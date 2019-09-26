import React from 'react';
import componentStyle from "./SignIn.style";
import { Box } from "@material-ui/core";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import {uiConfig} from '../../Firebase';
import {AuthHOC} from '../../hoc/AuthHOC';


export const SignIn = AuthHOC(() => {
    const classes = componentStyle();

    return (
        <Box display="flex" flexDirection="row" justifyContent="center">
            <Box flex="1 1 0" className={classes.introduction}>
                <h1>Trade Trainer</h1>
                <h3>Trade Better.</h3>
                <p>Welcome to Trade Trainer. Boost your profits, banish your losses and accelerate your development with a trading terminal that similuates real markets and puts you in control of your own strategy.</p>
                <p>To begin, sign up using any method on the right.</p>
            </Box>
            <Box component={StyledFirebaseAuth} flex="2 1 0" className={classes.signInContainer}  uiConfig={uiConfig} firebaseAuth={firebase.auth()} ></Box>
        </Box>
    );
});