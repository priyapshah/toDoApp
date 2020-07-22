import React from 'react';

export const Header = () => {
    return <header className="header">
        <nav>
            <div className="logo">
               <h2>To Do List</h2>
            </div>
            <div className="settings">
                <ul>
                    <li className="settings__add">+</li>
                    <li className="settings__darkmode">DARK</li>
                </ul>
            </div>
        </nav>
    </header>
};