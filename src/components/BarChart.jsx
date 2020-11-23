import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const BarChart = ({ data, title }) => {

    const d3svg = useRef(null);

    useEffect(() => {

        if (data && d3svg.current) {

            let svg = d3.select(d3svg.current), margin = 200, width = svg.attr("width") - margin, height = svg.attr("height") - margin;
        
            svg.append("text")
                .attr("transform", "translate(100,0)")
                .attr("x", 50)
                .attr("y", 50)
                .attr("font-size", "24px")
                .text(title)

            let xScale = d3.scaleBand().range ([0, width]).padding(0.5).domain(data.map(function(d) { return d.title; }));
            let yScale = d3.scaleLinear().range ([height, 0]).domain([0, d3.max(data, function(d) { return d.percentage; })]);
        
            let g = svg.append("g").attr("transform", "translate(" + 100 + "," + 100 + ")");

            g.append("g")
                .attr("transform", "translate(0," + height + ")")
                .call(d3.axisBottom(xScale))
                .style('font-size', "12px");

            g.append("g")
                .call(d3.axisLeft(yScale).tickFormat((d) => d + "%").ticks(10))
                .style('font-size', "12px")
                .append("text")
                .attr("transform", "rotate(-90)")
                .attr("y", 40)
                .attr('x', -100)
                .attr("dy", "-5.1em")
                .attr("stroke", "black")
                .style('font-size', '17px')
                .style('font-family', 'monospace')
                .text("Audience");

            g.selectAll(".bar")
                .data(data)
                .enter().append("rect")
                .attr("class", "bar")
                .on("mouseover", onMouseOver) //Add listener for the mouseover event
                .on("mouseout", onMouseOut)   //Add listener for the mouseout event
                .attr("x", function(d) { return xScale(d.title); })
                .attr("y", function(d) { return yScale(d.percentage); })
                .attr("width", xScale.bandwidth())
                .transition().ease(d3.easeCubicInOut).duration(3000)
                .attr("height", (d, i) => height - yScale(d.percentage));             


            /**
             * Mouseover event handler function
             * */
            function onMouseOver(d, i) {
                
                d3.select(this).attr('class', 'highlight');
                
                d3.select(this)
                    .transition()     // adds animation
                    .duration(200)
                    .attr('width', xScale.bandwidth() + 5)
                    .attr("y", function(d) { return yScale(d.percentage) - 10; })
                    .attr("height", function(d) { return height - yScale(d.percentage) + 10; });

                g.append("text")
                    .attr('class', 'val') 
                    .attr('x', () => xScale(i.title) + 10)
                    .attr('y', () => yScale(i.percentage) - 15)
                    .text(() => `$${i.percentage}`);
            }

            /**
             * Mouseout event handler function
             */
            function onMouseOut(d, i) {
                
                // use the text label class to remove label on mouseout
                d3.select(this).attr('class', 'bar');

                d3.select(this)
                    .transition()     // adds animation
                    .duration(400)
                    .attr('width', xScale.bandwidth())
                    .attr("y", function(d) { return yScale(d.percentage); })
                    .attr("height", function(d) { return height - yScale(d.percentage); });

                d3.selectAll('.val').remove();
            }

        }

    }, [data, title])

    return (
        <svg width="600" height="500" ref={d3svg}></svg>
    )
}

export default BarChart;