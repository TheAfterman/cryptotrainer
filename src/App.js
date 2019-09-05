import React from 'react';
import { connect } from 'react-redux';
import {InputPanel} from "./components/input-form/InputForm";
import {Chart} from "./components/chart/Chart";
import {SideBar} from "./components/sidebar/SideBar";
import {Box} from "@material-ui/core";

export const App = () => {
    return (
        <Box display="flex" flexDirection="row" alignItems="flex-start" justifyContent="stretch">
            <SideBar flex="0 0 auto"/>
            <Chart flex="1 1 auto"/>
            <InputPanel flex="0 0 auto"/>
        </Box>
    );
};


const mapStateToProps = state => ({
  ...state
});
const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
