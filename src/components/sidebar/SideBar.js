import React from 'react';
import componentStyle from "./SideBar.style";
import Divider from '@material-ui/core/Divider';
import {Box} from "@material-ui/core";

export const SideBar = ({ flex }) => {
    const classes = componentStyle();
    return (
        <Box className={classes.sidebarDrawer} flex={flex} >
            <div className={classes.sidebarLogo}>
                <img src="./assets/logo_3.PNG" alt="Trade Trainer"/>
            </div>
            <Divider/>
        </Box>
    )
};
