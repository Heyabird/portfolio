import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from 'styled-components';
import { Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

const Wrapper = styled.div`
  display: flex;
`;

const Tile = styled.div`
  margin: 1rem;
  width: 30%;
  height: 300px;
  border: 1px solid black;
  border-radius: 10px;
  background-color: black;
  padding: 1rem;
//   position: absolute;
`;

const Tag = styled.div`
  background-color: red;
  width: 20%;
`

export default class Project extends React.Component {

  render() {
    return (
      <Container>
        <Row>
          <Col className="code-project" id="smash-computer">
            <div>
              Smash the Computer
            </div>
            <div className="btn-container">
              <Button color="warning">CSS</Button> 
              <Button color="success">Javascript</Button>
            </div>
          </Col>
          <Col className="code-project" id="web-drum-kit">
            Web Drum Kit
            <div className="btn-container">
              <Button color="warning">CSS</Button> 
              <Button color="success">Javascript</Button>
            </div>
          </Col>
          <Col className="code-project">
            Pikamovie
            <div className="btn-container">
              <Button color="danger">Rails</Button> 
              <Button color="info">React</Button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="code-project">
            RPi Drum Kit
            <div className="btn-container">
              <Button color="danger">C++</Button> 
            </div>
          </Col>
          <Col className="code-project">
            Sandcamp
          </Col>
          <Col className="code-project">
            Airmap
            <div className="btn-container">
              <Button color="primary">Python</Button>
              <Button color="info">React</Button>
            </div>
          </Col>      
        </Row>
      </Container>
    );
  }
}