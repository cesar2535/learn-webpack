import common from './common';
require.ensure(['./shared'], require => {
  let shared = require('./shared');
  shared('This is entry B.');
});
