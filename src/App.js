import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { SignIn } from './components/sign-in/SignIn';
import { Main } from './components/main/Main';
import {config} from './Firebase';
import firebase from 'firebase';


export const App = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(config);
    }

    return (
        <Router>
            <Route path="/" exact component={SignIn} />
            <Route path="/main" component={Main} />
        </Router>
    );
};


const mapStateToProps = state => ({
  ...state
});
const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
