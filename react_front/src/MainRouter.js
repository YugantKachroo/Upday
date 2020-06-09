import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './core/Home';
import Signup from './user/Signup';
import Signin from './user/Signin';
import Menu from './core/Menu';
import Profile from './user/Profile';
import Users from './user/Users';
import EditProfile from './user/EditProfile';
import PrivateRoute from './auth/PrivateRoute';
import FindPeople from './user/FindPeople';

const MainRouter = () => (
  <div>
    <Menu />
    <Switch>
      <Route exact path='/signup' component={Signup} />
      <Route exact path='/signin' component={Signin} />
      <Route exact path='/' component={Home} />
      <PrivateRoute exact path='/user/edit/:userId' component={EditProfile} />
      <PrivateRoute exact path='/findpeople' component={FindPeople} />
      <PrivateRoute exact path='/user/:userId' component={Profile} />
      <Route exact path='/users' component={Users} />
    </Switch>
  </div>
);

export default MainRouter;
