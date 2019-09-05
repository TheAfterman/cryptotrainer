import React from 'react';
import './SideBar.scss';
import Divider from '@material-ui/core/Divider';
import {Box} from "@material-ui/core";

export const SideBar = ({ flex }) => {
    return (
        <Box variant="permanent" className="sidebar-drawer" flex={flex}>
            <div className="sidebar-logo">
                <img src="./assets/logo_2.PNG" alt="Trade Trainer"/>
            </div>
            <Divider/>
        </Box>
    )
};
