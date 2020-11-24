import * as types from '../types';
import * as d3 from "d3";

export const fetchReport = (page) => async (dispatch) => {

    const payloadData = await d3.json('http://statsocial-html.s3.amazonaws.com/free-reports/9359104051669969706').then(data => {
        const chartData = data.data.demographics.data.pages;
        let tmpArray = {};
        chartData.map((d, i) => {
            tmpArray[d.properties.display] = d.models;
        });
        return tmpArray;
    });

    dispatch({
        type: types.FETCH_REPORT,
        payload: payloadData
    });
};