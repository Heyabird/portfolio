import React from 'react';
import Project from '../components/Project';
import { Button } from 'reactstrap';

export const About = () => (
  <>
    <div className="page-header">
      <div>
        <h2>Code</h2>
        <p>Click on a project to see more.</p>
      </div>
      {/* <div class="filter"><Button>Filter</Button></div> */}
    </div>
    <Project/>
  </>
)