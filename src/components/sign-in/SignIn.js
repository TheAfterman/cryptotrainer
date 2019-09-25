import React from 'react';
import componentStyle from "./SignIn.style";
import { Box } from "@material-ui/core";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { withRouter } from 'react-router-dom';
import { verifyAuth } from '../../Firebase';
import firebase from 'firebase';
import {uiConfig} from '../../Firebase';


export const SignIn = withRouter(({ history }) => {
    const classes = componentStyle();

    //check user authentication state before rendering
    verifyAuth(history);

    return (
        <Box display="flex" flexDirection="column" className={classes.signInContainer}>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
        </Box>
    );
})
