import React from 'react';
import componentStyle from  './AppInput.style';
import {Box, TextField} from "@material-ui/core";
import {IconButton} from "@material-ui/core";
import {LocationSearching} from '@material-ui/icons';

export const AppInput = ({ label }) => {
    const classes = componentStyle();
    return (
        <Box display="flex" flexDirection="row">
            <TextField label={label} className={classes.textInput} />
            <IconButton flex="1 0 auto" color="primary" aria-label="">
                <LocationSearching/>
            </IconButton>
        </Box>
    );
};
