import React, { useState } from 'react';
import {
  FaChevronDown,
  FaTasks,
  FaInbox,
  FaRegCalendarAlt,
} from 'react-icons/fa';
import { Projects } from '../Projects';
import { useSelectedProjectValue } from '../../context';
import { AddProject } from '../AddProject';

export const Sidebar = () => {
  const { setSelectedProject } = useSelectedProjectValue();
  const [active, setActive] = useState('all_tasks');
  const [showProjects, setShowProjects] = useState(true);

  return (
    <div className="sidebar">
      <ul className="sidebar__generic">
        <li
          className={active === 'all_tasks' ? 'active' : undefined}
        >
          <div
            aria-label="Show all tasks"
            tabIndex={0}
            role="button"
            onClick={() => {
              setActive('all_tasks');
              setSelectedProject('ALL_TASKS');
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                setActive('all_tasks');
                setSelectedProject('ALL_TASKS');
              }
            }}
          >
            <span>
              <FaInbox />
            </span>
            <span>All Tasks</span>
          </div>
        </li>
        <li
          className={active === 'today' ? 'active' : undefined}
        >
          <div
            aria-label="Show today's tasks"
            tabIndex={0}
            role="button"
            onClick={() => {
              setActive('today');
              setSelectedProject('TODAY');
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                setActive('today');
                setSelectedProject('TODAY');
              }
            }}
          >
            <span>
              <FaTasks />
            </span>
            <span>Today</span>
          </div>
        </li>
        <li
          className={active === 'next_week' ? 'active' : undefined}
        >
          <div
            aria-label="Show tasks for the next 7 days"
            tabIndex={0}
            role="button"
            onClick={() => {
              setActive('next_week');
              setSelectedProject('NEXT_WEEK');
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                setActive('next_week');
                setSelectedProject('NEXT_WEEK');
              }
            }}
          >
            <span>
              <FaRegCalendarAlt />
            </span>
            <span>Next Week</span>
          </div>
        </li>
      </ul>
      <div
        className="sidebar__middle"
        aria-label="Show/hide projects"
        onClick={() => setShowProjects(!showProjects)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') setShowProjects(!showProjects);
        }}
        role="button"
        tabIndex={0}
      >
        <span>
          <FaChevronDown
            className={!showProjects ? 'hidden-projects' : undefined}
          />
        </span>
        <h2>Projects</h2>
      </div>

      <ul className="sidebar__projects">{showProjects && <Projects />}</ul>

      {showProjects && <AddProject />}
    </div>
  );
};