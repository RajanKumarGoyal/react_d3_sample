import React, { Fragment } from 'react';
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <Fragment>
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <NavLink to={ "/" } className="navbar-brand" exact>ReactJs D3</NavLink>
                    </div>  
                    <ul className="nav navbar-nav">
                        <li><NavLink to={ "/bar-chart" } exact activeClassName="active-link">Bar Charts</NavLink></li>
                        <li><NavLink to={ "/pie-chart" } exact activeClassName="active-link">Pie Charts</NavLink></li>
                        <li><NavLink to={ "/pie-redux" } exact activeClassName="active-link">Pie Redux</NavLink></li>
                        <li><NavLink to={ "/qr-code" } exact activeClassName="active-link">Qr Code</NavLink></li>
                    </ul>
                </div>
            </nav>
        </Fragment>
    );
};

export default Header;