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
                        <li><NavLink to={ "/" }>Home</NavLink></li>
                        <li><NavLink to={ "/circle" }>Circle</NavLink></li>
                        <li><NavLink to={ "/bar-chart" }>Bar Charts</NavLink></li>
                        <li><NavLink to={ "/pie-chart" }>Pie Charts</NavLink></li>
                    </ul>
                </div>
            </nav>
        </Fragment>
    );
};

export default Header;