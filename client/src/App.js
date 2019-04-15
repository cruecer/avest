import React, { Component, Fragment } from 'react';
import { Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from '../src/routes';
import './style.scss';
import '../node_modules/antd/dist/antd.min.css';

class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Fragment>
        <Switch>
          {renderRoutes(routes)}
        </Switch>
      </Fragment>
    )
  }
}

export default App;