import React from 'react';
import AppLogo from "../app-logo/AppLogo";
import './AppHeader.scss';

export const AppHeader = () => {
    return (
        <header className="app-header">
            <AppLogo/>
        </header>
    );
};
