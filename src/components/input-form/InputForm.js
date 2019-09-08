import React from 'react';
import componentStyle from "./InputForm.style";
import Paper from "@material-ui/core/Paper";
import {AppInput} from "../app-input/AppInput";
import {StatRow} from "../stat-row/StatRow";
import {SessionStats} from '../session-stats/SessionStats';
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";

export const InputPanel = ({ flex }) => {
    const classes = componentStyle();

    return (
        <Box display="flex" flexDirection="column">
            <Box display="flex" flexDirection="row" flex={flex}>
                <Box component="form" flex="1 1 auto" display="flex" flexDirection="column" className={classes.inputForm}>
                    <AppInput flex="0 0 auto" label="Entry Price" />
                    <AppInput flex="0 0 auto" label="Stop Loss" />
                    <AppInput flex="0 0 auto" label="Target 1" />
                    <AppInput flex="0 0 auto" label="Target 2" />
                    <AppInput flex="0 0 auto" label="Target 3" />
                    <Box display="flex" flexDirection="row" className={classes.buttonRow}>
                        <Button variant="contained" color="primary" >Execute Trade</Button>
                        <Button>No Position</Button>
                    </Box>

                </Box>
                <Paper display="flex" flexDirection="column" justifyContent="stretch" flex="1 1 auto" className={classes.statBox}>
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
