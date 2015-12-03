# react-gridforms

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

React components for form layout with [Gridforms](https://github.com/kumailht/gridforms).

## [Live Demo](http://insin.github.io/react-gridforms/)

## Install

**Note: [Webpack](http://webpack.github.io/) is _required_ in order to use this component from npm.**

```
npm install react-gridforms
```

Browser bundles are available, which export a global `GridForms` variable and expect to find a global ``React`` variable to work with.

* [react-gridforms.js](https://npmcdn.com/react-gridforms/umd/react-gridforms.js) (development version)
* [react-gridforms.min.js](https://npmcdn.com/react-gridforms/umd/react-gridforms.min.js) (compressed production version)
* Use [gridforms.css](https://cdn.rawgit.com/kumailht/gridforms/master/gridforms/gridforms.css) via RawGit with the browser bundle.

## Usage

```javascript
var GridForms = require('react-gridforms')
// or
var {Gridform, Fieldset, Row, Field} = require('react-gridforms')
// or
import {Gridform, Fieldset, Row, Field} from 'react-gridforms'
```

Nest `<Fieldset>`, `<Row>` and `<Field>` components under a `<GridForm>` as necessary, using a `span` prop to control the relative size of each field.

```js
<GridForm>
  <Fieldset legend="Add to inventory">
    <Row>
      <Field span={3}>
        <label>Product Name</label>
        <input type="text" autoFocus/>
      </Field>
      <Field>
        <label>Tags</label>
        <input type="text"/>
      </Field>
    </Row>
  </Fieldset>
</GridForm>
```

Row spans will be calculated based on their Fields, so you only have to specify `span` props for fields which need more than the default of `1`.

## API

All components will pass any props not documented below to the container element they render.

### `GridForm` component

Renders a `<form>` with a `.grid-form` class by default.

Prop | Default | Description
---- | ------- | -----------
`className` | | An additional class name for the element rendered by the component
`component` | `'div'` | The container component to be rendered - can be a tag name or a custom React component
`custom` | `false` | Flag to indicate a custom build of Gridforms is being used - when `true` the default `.grid-form` class will not be used, only the provided `className`

### `Fieldset` component

Renders a `<fieldset>` with a `<legend>`.

Prop | Description
---- | -----------
`legend` | Contents for the `<legend>`, which will only be rendered when a `legend` prop is provided

### `Row` component

Renders a `<div>` and calculates a GridForms `data-row-span` attribute based on the `span` props of its `Field` component children.

### `Field` component

Container for an input field.

Prop | Default | Description
---- | ------- | -----------
`span` | `1` | Relative size of the field compared to others in the same `Row` - can be expressed as a Number or a String

## MIT Licensed

[build-badge]: https://img.shields.io/travis/insin/react-gridforms/master.svg?style=flat-square
[build]: https://travis-ci.org/insin/react-gridforms

[npm-badge]: https://img.shields.io/npm/v/react-gridforms.svg?style=flat-square
[npm]: https://www.npmjs.org/package/react-gridforms

[coveralls-badge]: https://img.shields.io/coveralls/insin/react-gridforms/master.svg?style=flat-square
[coveralls]: https://coveralls.io/github/insin/react-gridforms
