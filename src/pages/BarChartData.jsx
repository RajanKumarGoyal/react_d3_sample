import React, { useState, useEffect } from 'react';
import { csv } from 'd3-fetch';
import { ascending } from 'd3-array';
import BarChartTest from '../components/BarChartTest';
import logo from "../logo.svg";

const parseNA = string => (string === 'NA' ? undefined : string);

function type(d) {
    return {
        genre: parseNA(d.genre),
        revenue: +d.revenue,
        colour: d.colour
    }
}

function filterData(data) {
    return data.filter(d => {
        return d.revenue > 0
    })
}

function prepareBarChartData(data) {

    /**
     * Usually more wrangling is required but the example data is simple
     */
    return data
}

const BarChartData = () => {

    const [barChartData, setBarChartData] = useState(null)

    useEffect(() => {
        csv('/static/data/barchart.csv', type).then(data => {
            const dataClean = filterData(data)
            setBarChartData(
                prepareBarChartData(dataClean).sort((a, b) => {
                    return ascending(a.genre, b.genre)
                }),
            )
        });
    }, []);

    if (barChartData === null) {
        return <img src={logo} className="App-logo" alt="logo" />
    }

    return <BarChartTest data={barChartData} />
}

export default BarChartData;
