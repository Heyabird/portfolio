import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from 'styled-components';
import { Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import SmashComputer from '../../project-images/smash-computer.png'
import WebDrumKit from '../../project-images/web-drum-kit.png'
import Pikamovie from '../../project-images/pikamovie.png'
import Sandcamp from '../../project-images/sandcamp.png'
import Airmap from '../../project-images/airmap.png'
import RpiDrumKit from '../../project-images/rpi-drum-kit.png'

const Wrapper = styled.div`
  display: flex;
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
            <div className="project-header">
              <p>Smash Computer</p>
              <div>
                <Button href="https://imstuck.netlify.app/" target="_blank"><i class="fas fa-desktop"></i> Try</Button>
                <Button href="https://github.com/heyabird/anger-release-app" target="_blank"><i class="fab fa-github-alt"></i> Repo</Button>
              </div>
            </div>
            <div className="project-description">
              <img src={SmashComputer}/>
              <p>Stuck? Angry? Smash your virtual computer.</p>
            </div>    
            <div className="btn-container">
              {/* <Button color="secondary">Front-end</Button> */}
              {/* <Button color="warning">CSS</Button>  */}
              <Button color="success">Javascript</Button>
            </div>
          </Col>
          <Col className="code-project" id="web-drum-kit">
          <div className="project-header">
              <p>Web Drum Kit</p>
              <div>
                <Button href="https://heyadrums.netlify.app/" target="_blank"><i class="fas fa-desktop"></i> Try</Button>
                <Button href="https://github.com/Heyabird/heya_drum_kit" target="_blank"><i class="fab fa-github-alt"></i> Repo</Button>
              </div>
            </div>    
            <div className="project-description">
              <img src={WebDrumKit}/>
              <p>Play drums online using heya samples.</p>
            </div>         
            <div className="btn-container">
              {/* <Button color="secondary">Front-end</Button> */}
              {/* <Button color="warning">CSS</Button>  */}
              <Button color="success">Javascript</Button>
            </div>
          </Col>
          <Col className="code-project">
            <div className="project-header">
              <h4>PikaMovie</h4>
              <div>
                <Button href="https://pikamovie.herokuapp.com/" target="_blank"><i class="fas fa-desktop"></i> Try</Button>
                <Button href="https://github.com/TheJonasSisters/pikachoose_app" target="_blank"><i class="fab fa-github-alt"></i> Repo</Button>
              </div>
            </div> 
            <div className="project-description">
              <img src={Pikamovie}/>
              <p>A CRUD app that picks a movie for you.</p>
            </div> 
            <div className="btn-container">
              {/* <Button color="secondary">Full-Stack</Button> */}
              <Button color="success">React</Button>
              <Button color="danger">Rails</Button> 
              <Button color="warning">Postgres</Button> 
              <Button color="primary">TMDB API</Button> 
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="code-project">
          <div className="project-header">
              <p>Sandcamp</p>
              <div>
                {/* <Button href="https://pikamovie.herokuapp.com/" target="_blank"><i class="fas fa-desktop"></i> Try</Button> */}
                <Button href="https://github.com/Heyabird/Sandcamp_v2" target="_blank"><i class="fab fa-github-alt"></i> Repo</Button>
              </div>
            </div>    
            <div className="project-description">
              <img src={Sandcamp}/>
              <p>Discover hidden gems of the music world.</p>
            </div>            
            <div className="btn-container">
              {/* <Button color="secondary">Full-Stack</Button> */}
              <Button color="success">Javascript</Button>
              <Button color="danger">Rails</Button>
              <Button color="warning">MySQL</Button> 
              <Button color="primary">Spotify API</Button> 
            </div>
          </Col>
          <Col className="code-project">
          <div className="project-header">
              <p>Air Map</p>
              <div>
                {/* <Button href="https://pikamovie.herokuapp.com/" target="_blank"><i class="fas fa-desktop"></i> Try</Button> */}
                <Button href="https://github.com/Heyabird/air_pollution_map_VERSION2" target="_blank"><i class="fab fa-github-alt"></i> Repo</Button>
              </div>
            </div>   
            <div className="project-description">
              <img src={Airmap}/>
              <p>See the air pollution data in major cities.</p>
            </div>                 
            <div className="btn-container">
              <Button color="success">React</Button>
              <Button color="danger">Python</Button>
              <Button color="primary">Mapbox</Button>
            </div>
          </Col>   
          <Col className="code-project">
          <div className="project-header">
              <p>RPi Drum Kit</p>
              <div>
                {/* <Button href="https://pikamovie.herokuapp.com/" target="_blank"><i class="fas fa-desktop"></i> Try</Button> */}
                <Button href="https://github.com/Heyabird/RaspberryPi-Drumkit" target="_blank"><i class="fab fa-github-alt"></i> Repo</Button>
              </div>
            </div>
            <div className="project-description">
              <img src={RpiDrumKit}/>
              <p>Raspberry Pi drum kit using arcade buttons.</p>
            </div>  
            <div className="btn-container">
              <Button color="danger">C++</Button> 
              <Button color="danger">Python</Button>
            </div>
          </Col>   
        </Row>
      </Container>
    );
  }
}