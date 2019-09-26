import React from 'react';
import { withRouter } from 'react-router-dom';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { authCompleted } from '../actions/SessionActions';

export const AuthHOC = (Component) => {
    return connect(mapStateToProps, mapDispatchToProps)(withRouter(class extends React.Component {

        componentDidMount() {
            this.verifyAuth();
        }

        verifyAuth() {
            firebase.auth().onAuthStateChanged((user) => {
                if (user && this.props.history.location.pathname !== '/main') {
                    this.props.history.push('/main');
                    // ...
                } else if (!user && this.props.history.location.pathname !== '/') {
                    this.props.history.push('/');
                }
                this.props.authCompleted();
            });
        }

        render() {
            return (
                <div>
                    {this.props.authComplete ?
                        <Component></Component> :
                        null
                    }
                </div>
            );
        }
    }))
};

const mapStateToProps = state => ({
    authComplete: state.sessionData.authComplete
});
const mapDispatchToProps = dispatch => ({
    authCompleted: () => dispatch(authCompleted())
});
