import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import store from './store';

const renderApp = (Component) => {
  ReactDOM.render((
    <Provider store={store}>
      <Router>
        <Component />
      </Router>
    </Provider>
  ), document.querySelector('#root'));
}

renderApp(App);

if (module.hot) {
  module.hot.accept('./App', () => 
    renderApp(App)
  )
}