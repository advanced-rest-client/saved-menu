[![Published on NPM](https://img.shields.io/npm/v/@advanced-rest-client/saved-menu.svg)](https://www.npmjs.com/package/@advanced-rest-client/saved-menu)

[![Build Status](https://travis-ci.org/advanced-rest-client/saved-menu.svg?branch=stage)](https://travis-ci.org/advanced-rest-client/saved-menu)

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/advanced-rest-client/saved-menu)


# &lt;saved-menu&gt;

A list of saved items in the ARC main menu.

## Example:

```html
<saved-menu style="heigth: 500px;"></saved-menu>
```

## API components

This components is a part of [API components ecosystem](https://elements.advancedrestclient.com/)

## Usage

### Installation
```
npm install --save @advanced-rest-client/saved-menu
```

### In an html file

```html
<html>
  <head>
    <script type="module">
      import './node_modules/@advanced-rest-client/saved-menu/saved-menu.js';
    </script>
  </head>
  <body>
    <saved-menu></saved-menu>
  </body>
</html>
```

### In a Polymer 3 element

```js
import {PolymerElement, html} from './node_modules/@polymer/polymer/polymer-element.js';
import './node_modules/@advanced-rest-client/saved-menu/saved-menu.js';

class SampleElement extends PolymerElement {
  static get template() {
    return html`
    <saved-menu></saved-menu>
    `;
  }
}
customElements.define('sample-element', SampleElement);
```

### Installation

```sh
git clone https://github.com/advanced-rest-client/saved-menu
cd api-url-editor
npm install
npm install -g polymer-cli
```

### Running the demo locally

```sh
polymer serve --npm
open http://127.0.0.1:<port>/demo/
```

### Running the tests
```sh
polymer test --npm
```
