import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AppRoute from "./AppRoute";

/**
 * Layouts
 */
import Main from "../layouts/Main";
import Front from "../layouts/Front";

/**
 * Pages
 */
import Circle from "../pages/Circle";
import Home from "../pages/Home";
import Bar from "../pages/Bar";
import Pie from "../pages/Pie";
import counter from "../pages/counter";
import PieRedux from "../pages/PieRedux";
import Qr from "../pages/Qr";

const Routes = () => {
    return (
        <Switch>
            <AppRoute path="/" component={Home} layout={Front} exact />
            <AppRoute path="/bar-chart" component={Bar} layout={Front} exact />
            <AppRoute path="/pie-chart" component={Pie} layout={Front} exact />
            <AppRoute path="/pie-redux" component={PieRedux} layout={Front} exact />
            <AppRoute path="/counter" component={counter} layout={Front} exact />
            <AppRoute path="/qr-code" component={Qr} layout={Front} exact />
        </Switch>
    );
};

export default Routes;