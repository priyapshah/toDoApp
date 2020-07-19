import React from 'react';

export const Header = () => {
    return <header className="header">
        <nav>
            <div className="logo">
                <img src="/images/logo.png" alt="To Do List"/>
            </div>
            <div className="settings">
                <ul>
                    <li>+</li>
                    <li>DARK</li>
                </ul>
            </div>
        </nav>
    </header>
};