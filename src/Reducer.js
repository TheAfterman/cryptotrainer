import { combineReducers } from 'redux';
import chartData from "./reducers/ChartDataReducer";
import tradeData from "./reducers/ExecuteTradeReducer";
import sessionData from "./reducers/SessionReducer";
export default combineReducers({
    chartData,
    tradeData,
    sessionData
});

