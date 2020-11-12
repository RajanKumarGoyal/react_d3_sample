import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Circle from "../pages/Circle";
import Home from "../pages/Home";
import BarChartData from "../pages/BarChartData";

const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/circle" component={Circle} exact />
            <Route path="/bar-chart" component={BarChartData} exact />
        </Switch>
    );
};

export default Routes;