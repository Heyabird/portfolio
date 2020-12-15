import React from 'react';
import Project from '../components/Project';
import { Button } from 'reactstrap';

export const About = () => (
  <>
    <div className="page-header">
      <div>
        <h2>Coding Projects</h2>
        <p>Click on <Button><i class="fas fa-desktop"></i> Try</Button> to see the project deployed and <Button><i class="fab fa-github-alt"></i> Repo</Button> to go to the Github repository. The colored tags show the stack I used.</p>
        <p id="tag-description">
          {/* The tags on the bottom show what stack I mainly used and are color-coded: <Button color="success">Frontend</Button><Button color="danger">Backend</Button><Button color="warning">Database</Button><Button color="primary">External API</Button> */}
        </p>
        <br/>
      </div>
      {/* <div class="filter"><Button>Filter</Button></div> */}
    </div>
    <Project/>
  </>
)