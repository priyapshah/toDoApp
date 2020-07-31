  
import React from 'react';
import { Sidebar } from './Sidebar';
import { Tasks } from '../tasks/Tasks';

export const Content = () => (
  <section className="content">
    <Sidebar />
    <Tasks />
  </section>
);