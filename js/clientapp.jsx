// @flow

import React from 'react';
import { render } from 'react-dom';
import App from './app';

// Force render top-level App component
const renderApp = () => {
  render(<App />, document.getElementById('app'));
};
renderApp();

if (module.hot) {
  module.hot.accept('./app', () => {
    renderApp();
  });
}

render(<App/>, document.getElementById('app')); 