import React, { Fragment, useEffect, useState } from 'react';
import * as d3 from "d3";
import PieChart from "../components/PieChart";
import logo from "../logo.svg";

const Pie = () => {

    const [PieChartData, SetPieChartData] = useState(null);

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

    useEffect (() => {

        /**
         * Created the Node Server & Hit By Back to
         * cover the cors error
         */
        d3.json('http://statsocial-html.s3.amazonaws.com/free-reports/9359104051669969706').then(data => {

            const chartData = data.data.demographics.data.pages;

            let tmpArray = {};
            chartData.map((d, i) => {
                tmpArray[d.properties.display] = d.models;
            });

            SetPieChartData(tmpArray);
        });

    }, []);

    if (PieChartData === null) {
        return <img src={logo} className="App-logo" alt="logo" />
    } 

    return (

        <Fragment>

            {
                Object.keys(PieChartData).map((key) => {
                    return (
                        <PieChart data={ PieChartData[key] } title={`${key} Data Visualization`} key={key} />            
                    )
                })
            }
 
            {/* 
            <PieChart data={ gender } title="Gender Data Visualization" />
            <PieChart data={ ageRanges } title="Age Composition Data Visualization" />
            <PieChart data={ ethnicity } title="Ethnicity Data Visualization" />   
            */}
           
        </Fragment>
    );

};

export default Pie;