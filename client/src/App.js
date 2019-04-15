import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from '../src/routes';

class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <Switch>
          {renderRoutes(routes)}
        </Switch>
      </div>
    )
  }
}

export default App;