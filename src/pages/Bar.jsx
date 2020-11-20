import React, { useState, useEffect, Fragment } from 'react';
import BarChart from '../components/BarChart';
import logo from "../logo.svg";

const BarChartData = () => {

    const [barChartData, setBarChartData] = useState(null)

    let gender = [
        {year: 'Female', value: 40.84}, 
        {year: 'Male', value: 59.15}
    ];

    let ageRanges = [
        {year: '18 - 24', value: 9.7}, 
        {year: '25 - 34', value:23.1}, 
        {year: '35 - 44', value: 27.77},
        {year: '45 - 54', value: 21.59},
        {year: '> 54', value: 17.82}
    ];
    
    let ethnicity = [
        {year: 'Asian', value: 21.94}, 
        {year: 'Black', value:9.52}, 
        {year: 'Hispanic', value: 30.42},
        {year: 'Mixed', value: 2.19},
        {year: 'Native', value: 0.469},
        {year: 'White', value: 35.46}
    ];    

    useEffect(() => {
        
        setBarChartData(gender);

    }, []);

    if (barChartData === null) {
        return <img src={logo} className="App-logo" alt="logo" />
    }

    return (
        <Fragment>
            <BarChart data={gender} title="Gender Data Visulization" />
            <BarChart data={ageRanges} title="Age Range Data Visulization" />
            <BarChart data={ethnicity} title="Ethnicity Data Visulization" />
        </Fragment>
    )
}

export default BarChartData;
