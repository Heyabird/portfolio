import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import { Button } from 'reactstrap';
import styled from 'styled-components';
const Styles = styled.div`
  .navbar {
    position: absolute;
    bottom: 45px;
    z-index: 1;
    right: 5%;
    // width: 50%;
    background-color: #white; 
  }
  a, .navbar-nav, .navbar-light .nav-link {
    color: black;
    &:hover { color: #59E970; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: black;
    &:hover { color: #59E970; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
  .fab {
    margin: 10px;
  }
`;
export const Contact = () => (
  <Styles>
    <Navbar expand="lg">
      {/* <p>Contact Me</p> */}
      <a href="https://www.linkedin.com/in/heya/" target="_blank"><i class="fab fa-linkedin fa-3x"></i></a>
      <a href="https://www.linkedin.com/in/heya/" target="_blank"><i class="fab fa-twitter fa-3x"></i></a>
      <a href=""><i class="fab fa-github-alt fa-3x"></i></a>
      {/* <Button href="https://github.com/heyabird/anger-release-app" target="_blank"> */}
        {/* Repo</Button> */}
      {/* <Navbar.Brand href="/">Contact Me</Navbar.Brand> */}
      {/* <Navbar.Toggle aria-controls="basic-navbar-nav"/> */}
      {/* <Navbar.Collapse id="basic-navbar-nav"> */}
        {/* <Nav className="ml-auto">
          <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
        </Nav> */}
      {/* </Navbar.Collapse> */}
    </Navbar>
  </Styles>
)