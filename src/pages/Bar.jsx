import React, { useState, useEffect, Fragment } from 'react';
import BarChart from '../components/BarChart';
import logo from "../logo.svg";

const BarChartData = () => {

    const [barChartData, setBarChartData] = useState(null)

    let gender = [
        {title: 'Female', percentage: 40.84}, 
        {title: 'Male', percentage: 59.15}
    ];

    let ageRanges = [
        {title: '18 - 24', percentage: 9.7}, 
        {title: '25 - 34', percentage:23.1}, 
        {title: '35 - 44', percentage: 27.77},
        {title: '45 - 54', percentage: 21.59},
        {title: '> 54', percentage: 17.82}
    ];
    
    let ethnicity = [
        {title: 'Asian', percentage: 21.94}, 
        {title: 'Black', percentage:9.52}, 
        {title: 'Hispanic', percentage: 30.42},
        {title: 'Mixed', percentage: 2.19},
        {title: 'Native', percentage: 0.469},
        {title: 'White', percentage: 35.46}
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
