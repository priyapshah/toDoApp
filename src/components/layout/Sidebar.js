import React from 'react';

export const Sidebar = () => (
    <div className="sidebar">
        <ul className="sidebar__tabs">   {/* BEM, Block Element Modifier */}
            <li>Inbox</li>
            <li>Today</li>
            <li>This Week</li>
        </ul>
        <div className="sidebar__cont">
            <h2>Projects</h2>
        </div>
        <ul className="sidebar_projects">Projects!</ul>
    </div>
);