/* global chance */
const DataGenerator = {};
const methods = ['GET', 'PUT', 'POST', 'DELETE', 'PATCH', 'HEAD'];
const methodsSize = methods.length - 1;

let LAST_TIME = Date.now();

DataGenerator.genRequestObject = function(projectData) {
  const methodIndex = chance.integer({min: 0, max: methodsSize});
  const url = chance.url();
  const name = chance.sentence({words: 2});
  LAST_TIME -= chance.integer({min: 1.8e+6, max: 8.64e+7});
  const method = methods[methodIndex];
  let id = encodeURIComponent(name) + '/' + encodeURIComponent(url) + '/' + method;
  if (projectData) {
    id += '/' + projectData;
  }
  const obj = {
    _id: id,
    method: method,
    url: url,
    headers: 'x-test: true',
    created: LAST_TIME,
    updated: LAST_TIME,
    name: name
  };
  if (projectData) {
    obj.projectOrder = chance.integer({min: 0, max: 10});
    obj.legacyProject = projectData;
  }
  return obj;
};

DataGenerator.generateRequests = function(size, projectId) {
  size = size || 25;
  const result = [];
  for (let i = 0; i < size; i++) {
    const projectData = chance.bool({likelihood: 5}) ? projectId : undefined;
    result.push(DataGenerator.genRequestObject(projectData));
  }
  return result;
};

DataGenerator.generateData = function(size) {
  const requests = DataGenerator.generateRequests(size);
  /* global PouchDB */
  const db = new PouchDB('saved-requests');
  return db.bulkDocs(requests);
};

DataGenerator.destroyData = function() {
  const db = new PouchDB('saved-requests');
  return db.destroy();
};
