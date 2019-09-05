import React from 'react';
import componentStyle from  './AppInput.style';
import {TextField} from "@material-ui/core";

export const AppInput = ({ label }) => {
    const classes = componentStyle();
    return (
        <TextField label={label} className={classes.textInput} />
    )
};
