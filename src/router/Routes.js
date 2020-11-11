import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import Circle from "../pages/Circle";
import Home from "../pages/Home";

const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/circle" component={Circle} exact />
        </Switch>
    );
};

export default Routes;