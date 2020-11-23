import React, { Fragment } from 'react';
import Header from "../components/Header";

const Front = ({ children }) => {

    return (
        <Fragment>

            <Header />

            { children }

        </Fragment>
    );
};

export default Front;