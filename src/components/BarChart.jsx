import React, { useEffect, useRef } from 'react';
import { select } from 'd3-selection';
import { max } from 'd3-array';
import { scaleLinear, scaleBand } from 'd3-scale';
import { axisLeft, axisBottom } from 'd3-axis';

/**
 * Margin convention often used with D3
 */
const margin = { top: 80, right: 60, bottom: 80, left: 60 }
const width = 600 - margin.left - margin.right
const height = 600 - margin.top - margin.bottom

const color = ['#2196F3', '#03a9f4', '#b33535', '#283250'];

const BarChart = ({ data }) => {

    const d3svg = useRef(null);

    useEffect(() => {

        if (data && d3svg.current) {
            let svg = select(d3svg.current)

            /**
             * Scales
             */
            const xMax = max(data, d => d.revenue)

            const xScale = scaleLinear()
                .domain([0, xMax])
                .range([0, width])

            const yScale = scaleBand()
                .domain(data.map(d => d.genre))
                .rangeRound([0, height])
                .paddingInner(0.25)

            /**
             * Append group translated to chart area
             */
            svg = svg.append('g').attr('transform', `translate(${margin.left}, ${margin.top})`)

            /**
             * Draw header
             */
            svg
                .append('g')
                .attr('className', 'bar-header')
                .attr('transform', `translate(0, ${-margin.top / 2})`)
                .append('text')
                .append('tspan')
                .text('Horizontal BarChart in D3')

            /**
             * Draw bars
             */
            svg
                .selectAll('.bar')
                .data(data)
                .enter()
                .append('rect')
                .attr('className', 'bar')
                .attr('y', d => yScale(d.genre))
                .attr('width', d => xScale(d.revenue))
                .attr('height', yScale.bandwidth())
                .style('fill', d => d.colour)

            /**
             * Draw axes axisBottom axisLeft
             */
            const xAxis = axisBottom(xScale)
            svg
                .append('g')
                .attr('className', 'x axis')
                .attr('transform', `translate(0,${height + margin.bottom / 3})`)
                .call(xAxis)

            const yAxis = axisLeft(yScale).tickSize(0)
            svg
                .append('g')
                .attr('className', 'y axis')
                .attr('transform', `translate(${-margin.left / 3},0)`)
                .call(yAxis)
        }
    }, [data])

    return (
        <svg className="bar-chart-container" width={width + margin.left + margin.right} height={height + margin.top + margin.bottom} role="img" ref={d3svg}></svg>
    )
}

export default BarChart;