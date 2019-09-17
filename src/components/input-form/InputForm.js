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
import {startTrade, pauseTrade, advanceChart, entryPriceChange, stopPriceChange, targetPriceChange} from '../../actions/FormActions';

export const InputPanel = ({ flex }) => {

    const classes = componentStyle();
    const dispatch = useDispatch();
    const isRunning = useSelector(state => state.tradeData.isRunning);
    const tradeInputs = useSelector(state => {
        return (({entry, stop, target}) => {
            return {entry, stop, target};
        })(state.tradeData);
    });

    const dispatchTradeAction = () => {
        if (isRunning) {
            dispatch(pauseTrade());
        } else {
            dispatch(startTrade());
        }
    }

    const dispatchAdvanceAction = () => {
        if (isRunning) {
            dispatch(pauseTrade());
        } else {
            dispatch(advanceChart());
        }
    }

    const getTradeR = (inputs) => {
        if (inputs.entry && inputs.stop && inputs.target) {
            return calculateR(inputs);
        } else {
            return '';
        }
    }

    const calculateR = (inputs) => {
        return ((inputs.target - inputs.entry) / (inputs.entry - inputs.stop)).toFixed(2);
    }

    const getStopPercent = (inputs) => {
        if (inputs.entry && inputs.stop) {
            return (100 * (inputs.entry - inputs.stop) / inputs.entry).toFixed(2);
        } else {
            return '';
        }
    }

    const getTargetPercent = (inputs) => {
        if (inputs.entry && inputs.target) {
            return (100 * (inputs.target - inputs.entry) / inputs.entry).toFixed(2);
        } else {
            return '';
        }
    }

    return (
        <Box display="flex" flexDirection="column">
            <Box display="flex" flexDirection="row" flex={flex}>
                <Box component="form" flex="1 1 auto" display="flex" flexDirection="column" className={classes.inputForm}>
                    <AppInput label="Entry Price" changeAction={entryPriceChange} />
                    <AppInput label="Stop Loss" changeAction={stopPriceChange} />
                    <AppInput label="Target" changeAction={targetPriceChange} />
                    <Box display="flex" flexDirection="row" className={classes.buttonRow}>
                        <Button variant="contained" color="primary" onClick={dispatchTradeAction} >
                            {isRunning ? 'Pause Trade' : 'Execute Trade'}
                        </Button>
                        <Button onClick={dispatchAdvanceAction}>Advance Chart</Button>
                    </Box>

                </Box>
                <Paper className={classes.statBox}>
                    <StatRow label="R: " value={getTradeR(tradeInputs)}/>
                    <StatRow label="Stop %: " value={getStopPercent(tradeInputs)}/>
                    <StatRow label="Target %: " value={getTargetPercent(tradeInputs)}/>
                </Paper>
            </Box>
            <Divider className={classes.divider}></Divider>
            <SessionStats/>
        </Box>
    );
};
