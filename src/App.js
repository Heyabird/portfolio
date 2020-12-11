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

const Wrapper = styled.div`
  margin: 2.5rem 7rem;
  width: 90%;
  height: 90%;
  border: 1px solid black;
  padding: 2rem;
  position: absolute;
`;

function App() {
  return (
  <React.Fragment>
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
  </React.Fragment>
  );
}

export default App;
