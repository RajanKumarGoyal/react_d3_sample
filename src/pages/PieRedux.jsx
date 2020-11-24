import React, { Fragment, useEffect } from 'react';
import PieChart from "../components/PieChart";
import { useDispatch, useSelector } from "react-redux";
import { fetchReport } from "../store/actions/report";
import logo from "../logo.svg";

const Pie = () => {

    const dispatch = useDispatch();

    const payload = useSelector( state => state.reportReducer );

    useEffect (() => {

        dispatch(fetchReport());

    }, [dispatch]);

    if (payload.loading === true) {

        return <img src={logo} className="App-logo" alt="logo" />
    } 

    return (

        <Fragment>
            {
                Object.keys(payload.reportPayload).map((key) => {
                    return (
                        <PieChart data={ payload.reportPayload[key] } title={`${key} Data Visualization`} key={key} />            
                    )
                })
            }           
        </Fragment>
    );

};

export default Pie;