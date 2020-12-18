import React from 'react';
import styled from 'styled-components';
import { Button } from 'reactstrap';

export const NoMatch = () => (
  <>
    <div className="page-header">
      <h1>Music</h1>  
    </div>
    <div className="page-content">
      <h4>Page Under Construction! <br/><br/>
          Meanwhile, check out my music on <Button href="https://www.youtube.com/results?search_query=heya+%E3%85%8E%E3%85%87" target="_blank"><i class="fab fa-youtube"></i>Youtube</Button>.</h4>
        <div id="heya-cartoon">
          <img src="/heya_construction_outside.svg" onMouseOver={e => (e.currentTarget.src = "/heya_construction_inside.svg")} onMouseOut={e => (e.currentTarget.src = "/heya_construction_outside.svg")}/>
      </div>
    </div>
  </>
)