import React from 'react';
import componentStyle from "./SessionStats.style";
import { Box } from "@material-ui/core";
import { StatRow } from "../stat-row/StatRow";
import { useSelector } from 'react-redux'

export const SessionStats = () => {
    const classes = componentStyle();
    const tradesWon = useSelector(state => state.sessionData.tradesWon);
    const tradesLost = useSelector(state => state.sessionData.tradesLost);
    const profit = useSelector(state => state.sessionData.profit);

    const getWinLossRatio = () => {
        if (tradesWon > 0 || tradesLost > 0) {
            return (100*tradesWon/(tradesWon + tradesLost)).toFixed(2);
        } else {
            return '0';
        }
    }

    return (
        <Box display="flex" flexDirection="column" className={classes.statContainer}>
            <h3>SESSION STATS</h3>
            <StatRow label="Wins" value={tradesWon}></StatRow>
            <StatRow label="Losses" value={tradesLost}></StatRow>
            <StatRow label="W/L" value={getWinLossRatio()}></StatRow>
            <StatRow label="P/L" value={profit}></StatRow>
        </Box>
    );
}