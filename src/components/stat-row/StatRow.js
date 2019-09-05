import React from "react";
import componentStyle from "./StatRow.style";
import {Box} from "@material-ui/core";

export const StatRow = ({ label, value }) => {
    const classes = componentStyle();
    return (
        <Box display="flex" flexDirection="row">
            <Box component="label" flex="1 1 auto" className={classes.statLabel}>{label}</Box>
            <Box component="span" flex="1 1 auto" className={classes.statValue}>{value}</Box>
        </Box>
    );
};
