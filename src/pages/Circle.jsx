import * as d3 from "d3";
import { Fragment, useEffect, useRef } from 'react';

function Circle() {

    const ref = useRef();

    useEffect( () => {
        const svgElement = d3.select(ref.current);
        svgElement.append("circle").attr("cx", 150).attr("cy", 70).attr("r",  50);
    }, [] );

    return (
        <Fragment>
            <svg ref={ref} />
        </Fragment>
    );
}

export default Circle;