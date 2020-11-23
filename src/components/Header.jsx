import React, { Fragment } from 'react';
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <Fragment>
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="/#">ReactJs D3</a>
                    </div>  
                    <ul className="nav navbar-nav">
                        <li><NavLink to={ "/" } exact activeClassName="active-link">Home</NavLink></li>
                        <li><NavLink to={ "/circle" } exact activeClassName="active-link">Circle</NavLink></li>
                        <li><NavLink to={ "/bar-chart" } exact activeClassName="active-link">Bar Charts</NavLink></li>
                        <li><NavLink to={ "/pie-chart" } exact activeClassName="active-link">Pie Charts</NavLink></li>
                    </ul>
                </div>
            </nav>
        </Fragment>
    );
};

export default Header;