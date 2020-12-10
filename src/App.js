import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/components/NavigationBar';
import { Home } from './components/pages/Home';
import { About } from './components/pages/About';
import { NoMatch } from './components/pages/NoMatch';

function App() {
  return (
  <React.Fragment>
    <Router>
      <NavigationBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  </React.Fragment>
  );
}

export default App;
