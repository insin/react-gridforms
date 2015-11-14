import '../vendor/gridforms.css'

import React, {cloneElement, Children, PropTypes} from 'react'

let classNames = (...args) => args.filter(cn => !!cn).join(' ')

export let GridForm = ({children, className, component: Component, ...props}) =>
  <Component {...props} className={classNames('grid-form', className)}>
    {children}
  </Component>

GridForm.propTypes = {
  component: PropTypes.any
}

GridForm.defaultProps = {
  component: 'form'
}

export let Fieldset = ({children, legend, ...props}) =>
  <fieldset {...props}>
    {legend && <legend>{legend}</legend>}
    {children}
  </fieldset>

Fieldset.propTypes = {
  name: PropTypes.string.isRequired
}

export let Row = ({children, className}) => {
  let span = 0
  Children.forEach(children, child => span += Number(child.props.span))
  return <div data-row-span={span} className={className}>
    {children}
  </div>
}

export let Field = ({children, className, span}) =>
 <div data-field-span={span} className={className}>
   {children}
 </div>

Field.propTypes = {
  span: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ])
}

Field.defaultProps = {
  span: '1'
}
