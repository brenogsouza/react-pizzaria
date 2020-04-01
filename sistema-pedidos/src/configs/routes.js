import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';

const Home = lazy(() => import('../pages/home'))
const Login = lazy(() => import('../pages/login'))

const Routes = () => (
  <Suspense fallback={<CircularProgress />}>
    <Switch>
      <Route path="/login" component={Login} />
      <Route exact path="/" component={Home} />
    </Switch>
  </Suspense>
);

export default Routes;
