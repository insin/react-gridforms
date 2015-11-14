import '../vendor/gridforms.css'

import React, {cloneElement, Children, PropTypes} from 'react'

let classNames = (...args) => args.filter(cn => !!cn).join(' ')

export let GridForm = React.createClass({
  getDefaultProps() {
    return {
      component: 'form'
    }
  },
  render() {
    let {children, className, component: Component, ...props} = this.props
    return <Component {...props} className={classNames('grid-form', className)}>
      {children}
    </Component>
  }
})

export let Fieldset = React.createClass({
  render() {
    let {children, legend, ...props} = this.props
    return <fieldset {...props}>
      {legend && <legend>{legend}</legend>}
      {children}
    </fieldset>
  }
})

export let Row = React.createClass({
  render() {
    let {children, className} = this.props
    let span = 0
    Children.forEach(children, child => span += Number(child.props.span))
    return <div data-row-span={span} className={className}>
      {children}
    </div>
  }
})

export let Field = React.createClass({
  propTypes: {
    span: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ])
  },
  getDefaultProps() {
    return {
      span: 1
    }
  },
  render() {
    let {children, className, span} = this.props
   return <div data-field-span={span} className={className}>
     {children}
   </div>
  }
})
