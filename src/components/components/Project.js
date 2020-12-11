import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
`;

const Tile = styled.div`
  margin: 1rem;
  width: 30%;
  border: 1px solid black;
  border-radius: 10px;
  padding: 2rem;
//   position: absolute;
`;

export default class Project extends React.Component {

  render() {
    return (
      <Wrapper>
        <Tile>
          Smash the Computer
        </Tile>
        < Tile>
          Web Drum Kit
        </Tile>
        < Tile>
          RPi Drum Kit
        </Tile>
        <Tile>
          Smash the Computer
        </Tile>
        < Tile>
          Web Drum Kit
        </Tile>
        < Tile>
          RPi Drum Kit
        </Tile>      </Wrapper>
    );
  }
}