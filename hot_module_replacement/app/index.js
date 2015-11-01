import './styles.styl';
import React from 'react';
import { render } from 'react-dom';
import App from './App';

render(
  <App />,
  document.getElementById('root')
);

if (module.hot) {

  module.hot.status((status) => {
    console.log(`New Status: ${status}`);
  });
}
