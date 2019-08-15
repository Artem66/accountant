import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>          
          <Route exact path="/" component={ Home } />
          <Route path="/about/" component={ About } />          
        </Switch>        
      </Router>
    );
  }
}
