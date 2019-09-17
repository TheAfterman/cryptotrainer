import { combineReducers } from 'redux';
import chartData from "./reducers/ChartDataReducer";
import tradeData from "./reducers/ExecuteTradeReducer";
import sessionData from "./reducers/SessionReducer";
import settingsData from "./reducers/SettingsReducer";
export default combineReducers({
    chartData,
    tradeData,
    sessionData,
    settingsData
});

