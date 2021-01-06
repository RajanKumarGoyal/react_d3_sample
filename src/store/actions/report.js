import * as types from '../types';
import * as d3 from "d3";


export const fetchReport = () => async (dispatch) => {

    const payloadData = await d3.json(types.FETCH_REPORT.endpoint).then(data => {
        const chartData = data.data.demographics.data.pages;
        let tmpArray = {};
        chartData.map((d, i) => {
            tmpArray[d.properties.display] = d.models;
        });
        return tmpArray;
    });

    dispatch({
        type: types.FETCH_REPORT.message,
        payload: payloadData
    });
};

export const fetchGeoReport = () => async (dispatch) => {
   
    const payloadData = await d3.json(types.FETCH_REPORT.endpoint).then(data => {
        const chartData = data.data.geo_location.data.pages;
        let tmpArray = {};
        chartData.map((d, i) => {
            tmpArray[d.properties.display] = d.models;
        });
        return tmpArray;
    });

    dispatch({
        type: types.FETCH_REPORT.message,
        payload: payloadData
    });

}