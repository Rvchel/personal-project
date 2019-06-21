import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Club from './components/Authentication/Club';
import Register from './components/Authentication/Register';
import Login from './components/Authentication/Login';
import Dashboard from './components/Shop/Dashboard';
import Home from './components/Shop/Home';
import Cart from './components/Shop/Cart';
import Gallery from './components/Shop/Gallery';
import Form from './components/Shop/Form';

export default (
    <Switch>
        <Route exact path={'/'} component={Home} />
        <Route path={'/club'} component={Club} />
        <Route path={'/register'} component={Register} />
        <Route path={'/login'} component={Login} />
        <Route path={'/dashboard'} component={Dashboard} />
        <Route path={'/cart'} component={Cart}/>
        <Route path={'/gallery'} component={Gallery} />
        <Route exact path="/form" component={Form} />
        <Route path="/edit/:id" component={Form} />
    </Switch>
);