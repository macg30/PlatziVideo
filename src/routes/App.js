import React from 'react';
import { BrowserRouter,Switch, Route } from 'react-router-dom';
import Home from '../containers/Home.jsx'
import Login from '../containers/Login.jsx';
import Register from '../containers/Register.jsx';

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
        </Switch>
    </BrowserRouter>
);

export default App;