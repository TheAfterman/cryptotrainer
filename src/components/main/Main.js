import React from 'react';
import { SideBar } from "../sidebar/SideBar";
import Chart from "../chart/Chart";
import { InputPanel } from "../input-form/InputForm";
import {Box} from "@material-ui/core";
import {AuthHOC} from '../../hoc/AuthHOC';

export const Main = AuthHOC(() => {
    return (
        <Box display="flex" flexDirection="row" alignItems="flex-start" justifyContent="stretch">
            <SideBar flex="0 0 auto"/>
            <Chart flex="1 1 0"/>
            <InputPanel flex="0 0 auto"/>
        </Box>
    );
});
