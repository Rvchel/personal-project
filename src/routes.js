import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Club from './components/Authentication/Club';
import Register from './components/Authentication/Register';
import Login from './components/Authentication/Login';
import Dashboard from './components/Shop/Dashboard';
import Home from './components/Shop/Home';

export default (
    <Switch>
        <Route exact path={'/'} component={Home} />
        <Route path={'/club'} component={Club} />
        <Route path={'/register'} component={Register} />
        <Route path={'/login'} component={Login} />
        <Route path={'/dashboard'} component={Dashboard} />
    </Switch>
);