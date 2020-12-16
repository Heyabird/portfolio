import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/components/NavigationBar';
import { Home } from './components/pages/Home';
import { About } from './components/pages/About';
import { Design } from './components/pages/Design';
import { NoMatch } from './components/pages/NoMatch';
import Sidebar from './components/components/Sidebar';
import styled from 'styled-components';

const breakpoint = 480;

const Everything = styled.div`
  background-color: red;
`

const Wrapper = styled.div`
  margin: 2rem 9rem;
  width: 88%;
  height: 92%;
  // border: 1px solid black;
  border-radius: 15px;
  max-width: 1250px;
  padding: 2rem;
  position: absolute;
  // overflow: scroll;
  background-color: #E7E7E7;

  @media (max-width: ${breakpoint}px) {
    padding: 1rem;
    margin: 0 1rem .5rem 1rem;
    max-width: 100%;
    height: inherit;
    min-height: 85%;
    min-width: 100%;
    border-radius: 0;
    width: inherit;
    margin: 0 auto;
  }
`;

function App() {
  return (
    <div className="everything">
      <Router>
        {/* <NavigationBar /> */}
        <Sidebar />
        <Wrapper>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/design" component={Design} />
            <Route component={NoMatch} />
          </Switch>
        </Wrapper>
      </Router>
    </div>
  );
}

export default App;
