import React, { Fragment } from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <Fragment>
            <nav class="navbar navbar-inverse">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <a class="navbar-brand" href="#">ReactJs D3</a>
                    </div>  
                    <ul class="nav navbar-nav">
                        <li class="active"><Link to={ "/" }>Home</Link></li>
                        <li><Link to={ "/circle" }>Circle</Link></li>
                    </ul>
                </div>
            </nav>
        </Fragment>
    );
};

export default Header;