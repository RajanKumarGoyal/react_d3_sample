import React, { useEffect, useRef } from 'react';
import * as d3 from "d3";

const width = 500;
const height = 500;
const radius = Math.min(width, height)/3;

/**
 * Mouseover event handler function
 * */
function onMouseOver(d, i) {
    
    d3.select(this).select('path').attr('class', 'highlight');

    d3.select(this)
        .select('path')
        .transition()     // adds animation
        .duration(200)
        .attr('d', d3.arc()
            .innerRadius(80)
            .outerRadius(radius + 5)
        );

    var info = d3.select(this)
        .append('g')
        .attr('class', 'info');

    info.append("text")
        .attr('class', 'val')
        .attr('x', -35)
        .attr('y', 30)
        .html((d) => `${d.data.title}`)
        .style('font-size', '25px')
        .style('font-family', 'sans-serif');

    info.append("text")
        .html((d) => `${d.data.percentage}%`)
        .style('font-size', '15px')
        .style('font-family', 'sans-serif');                
}

/**
 * Mouseout event handler function
 */
function onMouseOut(d, i) {
    
    d3.select(this)
        .select('path')
        .attr('class', null)
        .attr('d', d3.arc()
            .innerRadius(80)
            .outerRadius(radius)
        );

    d3.select('.info').remove();
}

const Pie = ({ data, title }) => {

    const d3svg = useRef(null);

    useEffect (() => {

        if (data && d3svg.current) {

            let svg = d3.select(d3svg.current);

            svg.append("text")
                .attr("transform", "translate(50,0)")
                .attr("x", 50)
                .attr("y", 50)
                .attr("font-size", "24px")
                .text(title)
                
            var g = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
    
            var color = d3.scaleOrdinal(['#cddc39','#009688', '#ffc107', '#29DCB8', '#FF6D6A']);
        
            // Generate the pie
            var pie = d3.pie().value( (d) => d.percentage );
        
            // Generate the arcs
            var arc = d3.arc().innerRadius(80).outerRadius(radius);
        
            //Generate groups
            var arcs = g.selectAll("arc")
                .data(pie(data))
                .enter()
                .append("g")
                .attr("class", "arc")
                .on("mouseover", onMouseOver) //Add listener for the mouseover event
                .on("mouseout", onMouseOut)   //Add listener for the mouseout event;
        
            //Draw arc paths
            arcs.append("path")
                .attr("fill", (d, i) => color(i))
                .attr("d", arc) 
        }

    }, [])

    return (
        <svg width={ width } height={ height } ref={d3svg}></svg>
    );
};

export default Pie;