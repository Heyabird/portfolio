import React from 'react';
import Project from '../components/Project';
import { Button } from 'reactstrap';

export const About = () => (
  <>
    <div className="page-header">
      <div>
        <h2>Code</h2>
        <p>Click on <Button><i class="fas fa-desktop"></i> Try</Button> to see the project deployed and <Button><i class="fab fa-github-alt"></i> Repo</Button> to go to the Github repository.</p>
      </div>
      {/* <div class="filter"><Button>Filter</Button></div> */}
    </div>
    <Project/>
  </>
)