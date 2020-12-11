import React from 'react';
import Project from '../components/Project';

export const About = () => (
  <>
    <div class="code-header">
      <div>
        <h2>Code</h2>
        <p>Click on a project to see more.</p>
      </div>
      <div class="filter">Filter</div>
    </div>
    <Project/>
  </>
)