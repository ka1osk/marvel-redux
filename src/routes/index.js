import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from '../components/PrivateRoute';
import Home from '../pages/Home';
import Contato from '../pages/Contato';

export default () => {
  return (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/contato' component={Contato} />
      <PrivateRoute path='/dashboard' component={() => <h1>Dashboard</h1>} />
    </Switch>
  );
}