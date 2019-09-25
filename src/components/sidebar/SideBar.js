import React from 'react';
import componentStyle from "./SideBar.style";
import Divider from '@material-ui/core/Divider';
import {Box} from "@material-ui/core";
import ExitToApp from "@material-ui/icons/ExitToApp";
import {signOut} from '../../Firebase';

export const SideBar = ({ flex }) => {
    const classes = componentStyle();
    return (
        <Box className={classes.sidebarDrawer} flex={flex} >
            <div className={classes.sidebarLogo}>
                <img src="./assets/logo_3.PNG" alt="Trade Trainer"/>
            </div>
            <ExitToApp  onClick={signOut} />
            <Divider/>
        </Box>
    )
};
