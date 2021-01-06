import * as types from '../types';

const initialState = {
    reportPayload: {},
    loading: true,
    error: null
}

const smsReducer = ( state = initialState, action ) => {

    switch (action.type) {

        case types.FETCH_REPORT.message:
            return{
                ...state,
                reportPayload: action.payload,
                loading: false,
                error: null
            }
        default:
            return state
    }
}

export default smsReducer;