import React from 'react';
import componentStyle from "./SessionStats.style";
import { Box } from "@material-ui/core";
import { StatRow } from "../stat-row/StatRow";

export const SessionStats = () => {
    const classes = componentStyle();
    return (
        <Box display="flex" flexDirection="column" className={classes.statContainer}>
            <h3>SESSION STATS</h3>
            <StatRow label="Wins" value="4"></StatRow>
            <StatRow label="Losses" value="1"></StatRow>
            <StatRow label="W/L" value="75%"></StatRow>
            <StatRow label="P/L" value="15%"></StatRow>
        </Box>
    );
}