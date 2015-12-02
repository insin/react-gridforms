module.exports = {
  type: 'react-component',
  babel: {
    loose: 'all'
  },
  karma: {
    tests: 'test/**/*-test.js',
    frameworks: [
      require('karma-tap')
    ]
  },
  // UMD build config
  global: 'GridForms',
  externals: {
    'react': 'React'
  }
}
