import React from 'react';
import styled from 'styled-components';
import DesignProjects from '../components/DesignProjects';
import { Button } from 'reactstrap';


export const Design = () => (
  <>
    <div className="page-header">
        <h1>Some Art & Designs</h1>
    </div>
    <div className="page-content">
        <h4>Page Under Construction! <br/><br/>
          Meanwhile, check out my weekly comics on <Button href="https://instagram.com/heya.comics" target="_blank"><i class="fab fa-instagram"></i>Instagram</Button>.</h4>
    </div>
      {/* <div class="filter"><Button>Filter</Button></div> */}
    <DesignProjects/>
  </>
)