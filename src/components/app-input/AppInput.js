import React from 'react';
import componentStyle from  './AppInput.style';
import {Box, TextField} from "@material-ui/core";
import {IconButton} from "@material-ui/core";
import {LocationSearching} from '@material-ui/icons';
import { useDispatch } from 'react-redux';

export const AppInput = ({ label, changeAction }) => {
    const dispatch = useDispatch();
    const classes = componentStyle();

    const dispatchChangeAction = (actionCreator) => (event) => {
        dispatch(actionCreator(event.target.value));
    }

    return (
        <Box display="flex" flexDirection="row">
            <TextField label={label} className={classes.textInput} onChange={dispatchChangeAction(changeAction)} />
            <IconButton flex="1 0 auto" color="primary" aria-label="">
                <LocationSearching/>
            </IconButton>
        </Box>
    );
};
