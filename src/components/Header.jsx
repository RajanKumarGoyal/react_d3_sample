import React, { Fragment } from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <Fragment>
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="/#">ReactJs D3</a>
                    </div>  
                    <ul className="nav navbar-nav">
                        <li className="active"><Link to={ "/" }>Home</Link></li>
                        <li><Link to={ "/circle" }>Circle</Link></li>
                        <li><Link to={ "/bar-chart" }>Bar Charts</Link></li>
                        <li><Link to={ "/pie-chart" }>Pie Charts</Link></li>
                    </ul>
                </div>
            </nav>
        </Fragment>
    );
};

export default Header;