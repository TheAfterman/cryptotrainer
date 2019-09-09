import React from 'react';
import componentStyle from "./InputForm.style";
import Paper from "@material-ui/core/Paper";
import {AppInput} from "../app-input/AppInput";
import {StatRow} from "../stat-row/StatRow";
import {SessionStats} from '../session-stats/SessionStats';
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import {startTrade, pauseTrade} from '../../actions/FormActions';

export const InputPanel = ({ flex }) => {

    const classes = componentStyle();
    const dispatch = useDispatch();
    const isRunning = useSelector(state => state.tradeData.isRunning);

    const dispatchTradeAction = () => {
        if (isRunning) {
            dispatch(pauseTrade());
        } else {
            dispatch(startTrade());
        }
    }

    return (
        <Box display="flex" flexDirection="column">
            <Box display="flex" flexDirection="row" flex={flex}>
                <Box component="form" flex="1 1 auto" display="flex" flexDirection="column" className={classes.inputForm}>
                    <AppInput label="Entry Price" />
                    <AppInput label="Stop Loss" />
                    <AppInput label="Target 1" />
                    <AppInput label="Target 2" />
                    <AppInput label="Target 3" />
                    <Box display="flex" flexDirection="row" className={classes.buttonRow}>
                        <Button variant="contained" color="primary" onClick={dispatchTradeAction} >
                            {isRunning ? 'Pause Trade' : 'Execute Trade'}
                        </Button>
                        <Button>No Position</Button>
                    </Box>

                </Box>
                <Paper className={classes.statBox}>
                    <StatRow label="R: " value="2.1"/>
                    <StatRow label="Stop %: " value="5%"/>
                    <StatRow label="Target 1 %: " value="10%"/>
                    <StatRow label="Target 2 %: " value="15%"/>
                    <StatRow label="Target 3 %: " value="21%"/>
                </Paper>
            </Box>
            <Divider className={classes.divider}></Divider>
            <SessionStats/>
        </Box>
    );
};
