import React from 'react';
import componentStyle from "./SideBar.style";
import Divider from '@material-ui/core/Divider';
import {Box} from "@material-ui/core";
import ExitToApp from "@material-ui/icons/ExitToApp";
import {signOut} from '../../actions/SessionActions';
import { useDispatch } from 'react-redux';

export const SideBar = ({ flex }) => {
    const dispatch = useDispatch();
    const classes = componentStyle();

    const signOutHandler = () => {
        dispatch(signOut());
    }

    return (
        <Box className={classes.sidebarDrawer} flex={flex} >
            <div className={classes.sidebarLogo}>
                <img src="./assets/logo_3.PNG" alt="Trade Trainer"/>
            </div>
            <ExitToApp  onClick={signOutHandler} />
            <Divider/>
        </Box>
    )
};
