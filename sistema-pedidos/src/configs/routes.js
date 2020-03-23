import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Login } from '../pages/login';
import { Home } from '../pages/home';

const Routes = () => (
  <Switch>
    <Route path="/login" component={Login} />
    <Route exact path="/" component={Home} />
  </Switch>
);

export default Routes;
