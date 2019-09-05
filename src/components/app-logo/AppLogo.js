import React, { Component } from 'react';
import './AppLogo.scss';

export default class AppLogo extends Component {
    render() {
        return (
            <div className="app-logo">
                <div>TRADE TRAINER</div>
                <div className="reflection">
                    <span>TRADE TRAINER</span>
                </div>
            </div>
        )
    }
}
