import './styles.styl';
let logTest = require('./module01');
let htmlText = require('./module03');

logTest['default']();
document.getElementById('root').innerText = htmlText['default'];

if (module.hot) {
  module.hot.accept(['./module01', './module03'], () => {
    logTest = require('./module01');
    htmlText = require('./module03');
    logTest['default']();
    document.getElementById('root').innerText = htmlText['default'];
  });
}
