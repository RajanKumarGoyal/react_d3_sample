import React, { Fragment, useEffect } from 'react';

let renderCounter = 0;

const CounterChild = () => {

    useEffect(() => {
        renderCounter++;
    });

    return (
        <Fragment>
            <p>Render Count: {renderCounter}</p>
        </Fragment>
    );
};

export default CounterChild;