[![Build Status](https://travis-ci.org/advanced-rest-client/saved-menu.svg?branch=stage)](https://travis-ci.org/advanced-rest-client/saved-menu)  

# saved-menu

A list of saved items in the ARC main menu.

The element uses direct implementation of the PouchDB to make a query to the
datastore. It also listens to events fired by the `arc-models/request-model`
element to update state of the saved items.

### Example
```
<saved-menu></saved-menu>
<request-model></request-model>
```

### Events

The element listens for the following events.

#### request-object-changed

The details object has to contain the following properties:
- `request` (`Object`) - Updated request object. Note, if `_id` of the object changed this should be a copy of the object. Otherwise it won't be possible to recognise old object on the list.
- `oldId` (`String`) - The `_id` property of the item from before the change.

Note: `items` list does not contain full request object. Don't use array of this items to update request object.

#### request-object-deleted
The details object has to contain the following properties:
- `id` (`String`) - The `_id` property of removed item.

### Sizing the element

The element uses `<iron-list>` to render the data in the view. The list is set
to be flex vertically. It means that the element has to be sized directly by the
hosting application or otherwise it size will be 0px.

It can be done using flex layout and making the element to be `flex: 1`.

### Styling
`<saved-menu>` provides the following custom properties and mixins for styling:

Custom property | Description | Default
----------------|-------------|----------
`--saved-menu` | Mixin applied to the element | `{}`
`--saved-menu-background-color` | Background color of the menu | `#f7f7f7`
`--saved-menu-selected-post-method-color` | Font color of selected item POST method label | `#fff`
`--saved-menu-focused-post-method-color` | Font color of focused item POST method label | `rgb(33, 150, 243)`
`--saved-menu-selected-method-label-background-color` | Background color of the POST method label when the item is focused | `#fff`
`--saved-menu-list` | Mixin applied to the list element. | `{}`
`--saved-menu-list-item` | Mixin applied to each list item | `{}`
`--saved-menu-selected-item-background-color` | Background color of the selected list item | `#FF9800`
`--saved-menu-selected-item-color` | Color of the selected list item | `#fff`
`--saved-menu-name-label` | Mixin applied to the name label | `{}`
`--arc-menu-empty-info-color` | Color applied to the empty info section | ``
`--arc-menu-empty-info-title-color` | Color applied to the title in the empty info section | ``

