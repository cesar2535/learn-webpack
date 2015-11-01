import './styles.styl';
let logTest = require('./module01');

logTest['default']();

if (module.hot) {
  module.hot.accept('./module01', () => {
    logTest = require('./module01');
    logTest['default']();
  });
}
