/* global chance */
const DataGenerator = {};
const methods = ['GET', 'PUT', 'POST', 'DELETE', 'PATCH', 'HEAD'];
const methodsSize = methods.length - 1;

var LAST_TIME = Date.now();

DataGenerator.genRequestObject = function(projectData) {
  var methodIndex = chance.integer({min: 0, max: methodsSize});
  var url = chance.url();
  var name = chance.sentence({words: 2});
  LAST_TIME -= chance.integer({min: 1.8e+6, max: 8.64e+7});
  var method = methods[methodIndex];
  var id = encodeURIComponent(name) + '/' + encodeURIComponent(url) + '/' + method;
  if (projectData) {
    id += '/' + projectData;
  }
  var obj = {
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

DataGenerator.generateRequests = function(projectId, size) {
  size = size || 25;
  var result = [];
  for (var i = 0; i < size; i++) {
    let projectData = chance.bool({likelihood: 5}) ? projectId : undefined;
    result.push(DataGenerator.genRequestObject(projectData));
  }
  return result;
};

DataGenerator.generateData = function(size) {
  var requests = DataGenerator.generateRequests(size);
  var db = new PouchDB('saved-requests');
  return db.bulkDocs(requests);
};

DataGenerator.destroyData = function() {
  var db = new PouchDB('saved-requests');
  return db.destroy();
};
