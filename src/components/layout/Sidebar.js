import React, { useState } from 'react';
import {Projects} from '../Projects';
import { useSelectedProjectValue } from '../../context';

export const Sidebar = () => {
    const { setSelectedProject } = useSelectedProjectValue;
    const {active, setActive} = useState('inbox');
    const {showProjects, setShowProjects} = useState(true);
    
    return(
    <div className="sidebar">
        <ul className="sidebar__generic">   {/* BEM, Block Element Modifier */}
            <li className="inbox">Inbox</li>
            <li className="today">Today</li>
            <li className="next_7">This Week</li>
        </ul>
        <div className="sidebar__middle">
            <h2>Projects</h2>
        </div>

    <ul className="sidebar__projects">{showProjects && <Projects />}</ul>

        {showProjects && <Projects />}
    </div>
)};