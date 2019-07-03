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
import Admin from './components/Authentication/Admin';
import About from './components/Shop/About';
import catCare from './components/Shop/catCare';
import Breeds from './components/Shop/Breeds';

export default (
    <Switch>
        <Route exact path={'/'} component={Home} />
        <Route path={'/club'} component={Club} />
        <Route path={'/register'} component={Register} />
        <Route path={'/login'} component={Login} />
        <Route path={'/dashboard'} component={Dashboard} />
        <Route path={'/cart'} component={Cart}/>
        <Route path={'/gallery'} component={Gallery} />
        <Route path={'/admin'} component={Admin} />
        <Route path={'/about'} component={About} />
        <Route path={'/catCare'} component={catCare} />
        <Route path={'/breeds'} component={Breeds} />
    </Switch>
);