import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
`;

const Tile = styled.div`
  margin: 1rem;
  width: 30%;
  height: 300px;
  border: 1px solid black;
  border-radius: 10px;
  padding: 2rem;
//   position: absolute;
`;

export default class Project extends React.Component {

  render() {
    return (
      <>
        <Wrapper>
          <Tile class="code-project" id="smash-computer">
            Smash the Computer
          </Tile>
          <Tile class="code-project" id="web-drum-kit">
          </Tile>
          < Tile>
            RPi Drum Kit
          </Tile>
          </Wrapper>
          <Wrapper>
          <Tile>
            Sandcamp
          </Tile>
          < Tile>
            Pikamovie
          </Tile>
          < Tile>
            Airmap
          </Tile>      
        </Wrapper>
      </>
    );
  }
}