import '../vendor/gridforms.css'

import React, {Children, PropTypes} from 'react'

let classNames = (...args) => args.filter(cn => !!cn).join(' ')

export let GridForm = React.createClass({
  getDefaultProps() {
    return {
      component: 'form',
      custom: false
    }
  },
  render() {
    let {children, className, component: Component, custom, ...props} = this.props
    return <Component {...props} className={classNames(!custom && 'grid-form', className)}>
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
    let {children, ...props} = this.props
    let span = 0
    Children.forEach(children, child => span += Number(child.props.span))
    return <div {...props} data-row-span={span}>
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
    let {children, span, ...props} = this.props
    return <div {...props} data-field-span={span}>
      {children}
    </div>
  }
})
