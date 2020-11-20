import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Circle from "../pages/Circle";
import Home from "../pages/Home";
import Bar from "../pages/Bar";
import Pie from "../pages/Pie";

const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/circle" component={Circle} exact />
            <Route path="/bar-chart" component={Bar} exact />
            <Route path="/pie-chart" component={Pie} exact />
        </Switch>
    );
};

export default Routes;