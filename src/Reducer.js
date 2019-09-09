import { combineReducers } from 'redux';
import chartData from "./reducers/ChartDataReducer";
import tradeData from "./reducers/ExecuteTradeReducer";

export default combineReducers({
    chartData,
    tradeData
});

