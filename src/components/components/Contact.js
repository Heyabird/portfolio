import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import { Button } from 'reactstrap';
import styled from 'styled-components';

const mobile_breakpoint = 480;
const xl_breakpoint = 1700;

const Styles = styled.div`
  .navbar {
    position: absolute;
    bottom: -50px;
    z-index: 1;
    right: 5%;
    // width: 50%;
  }
  a, .navbar-nav, .navbar-light .nav-link {
    color: black;
    transition: color .5s;
    &:hover { color: #007BFF; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: black;
    &:hover { color: #007BFF; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
  .fab {
    margin: 10px;
  }
  @media (max-width: ${mobile_breakpoint}px) {
    .navbar { 
      position: fixed;
      bottom: 2%;
      right: 0;
      // background-color: red;
    }
    a {
      background-color: white; 
      border-radius: 50px;
      height: 50px;
    }
  }
`;
export const Contact = () => (
  <Styles>
    <Navbar expand="lg">
      {/* <p>Contact Me</p> */}
      <a href="mailto:heyabird@gmail.com" target="_blank" class=""><i id="email-icon" class="far fa-envelope fa-3x"></i></a>
      <a href="https://www.linkedin.com/in/heya/" target="_blank" class=""><i class="fab fa-linkedin fa-3x "></i></a>
      <a href="https://www.linkedin.com/in/heya/" target="_blank"><i class="fab fa-twitter fa-3x"></i></a>
      <a href="https://github.com/Heyabird" target="_blank"><i class="fab fa-github-alt fa-3x"></i></a>
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