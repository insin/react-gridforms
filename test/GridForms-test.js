import React from 'react'
import {findDOMNode} from 'react-dom'
import test from 'tape'
import {renderIntoDocument as render} from 'react-addons-test-utils'

import {GridForm, Fieldset, Row, Field} from 'src/index'

test('GridForm', t => {
  t.plan(4)

  let node = render(<GridForm action="/test"/>)
  let el = findDOMNode(node)
  t.equal(el.tagName.toLowerCase(), 'form', 'renders a <form> by default')
  t.equal(el.className, 'grid-form', 'gives its element a grid-form class')
  t.equal(el.getAttribute('action'), '/test', 'passes other props when rendering')

  node = render(<GridForm component="div"/>)
  el = findDOMNode(node)
  t.equal(el.tagName.toLowerCase(), 'div', 'rendered component can be customised')
  t.end()
})

test('Fieldset', t => {
  let node = render(<Fieldset legend="Legendary" name="test"/>)
  let el = findDOMNode(node)
  let legend = el.querySelector('legend')
  t.ok(legend, 'renders a <legend> when given a legend prop')
  t.equal(legend.textContent, 'Legendary', 'uses legend prop for <legend> content')
  t.equal(el.getAttribute('name'), 'test', 'passes other props when rendering')

  node = render(<Fieldset/>)
  el = findDOMNode(node)
  t.ok(!el.querySelector('legend'), "doesn't render a <legend> when a legend prop isn't given")
  t.end()
})

test('Row ', t => {
  let node = render(<Row className="test">
    <Field/>
    <Field span="2"/>
    <Field span={3}/>
  </Row>)
  t.equal(findDOMNode(node).getAttribute('data-row-span'), '6',
          'sums the spans of its children and sets the total as data-row-span')
  t.equal(findDOMNode(node).className, 'test', 'passes other props when rendering')
  t.end()
})

test('Field ', t => {
  let node = render(<Field className="test"/>)
  t.equal(findDOMNode(node).getAttribute('data-field-span'), '1', 'defaults data-field-span to 1')
  t.equal(findDOMNode(node).className, 'test', 'passes other props when rendering')
  node = render(<Field span="2"/>)
  t.equal(findDOMNode(node).getAttribute('data-field-span'), '2', 'takes span as a string')
  node = render(<Field span={2}/>)
  t.equal(findDOMNode(node).getAttribute('data-field-span'), '2', 'takes span as a number')
  t.end()
})
