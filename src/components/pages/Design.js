import React from 'react';
import styled from 'styled-components';
import DesignProjects from '../components/DesignProjects';

export const Design = () => (
  <>
    <div className="page-header">
        <h1>Some Art & Designs</h1>
        {/* <p id="code-page-description">Click on <Button><i class="fas fa-desktop"></i> Try</Button> to see the project deployed and <Button><i class="fab fa-github-alt"></i> Repo</Button> to go to the Github repository. The colored tags show the stack I used.</p> */}
        <p id="tag-description">
          {/* The tags on the bottom show what stack I mainly used and are color-coded: <Button color="success">Frontend</Button><Button color="danger">Backend</Button><Button color="warning">Database</Button><Button color="primary">External API</Button> */}
        </p>
        <br/>
      </div>
      {/* <div class="filter"><Button>Filter</Button></div> */}
    <DesignProjects/>
  </>
)