module.exports = {
  'extends': 'eslint:recommended'
  ,'env': {
    'mocha': true
    ,'node': true
  }
  ,'plugins': [
    'eslint-plugin-promise'
  ]
  ,'rules': {
    'promise/param-names': 'error'
    ,'promise/always-return': 'error'
    //, 'promise/always-catch': 'error', // deprecated
    ,'promise/catch-or-return': 'error' // Formerly called always-catch
    ,'promise/no-native': 'error'
  }
};