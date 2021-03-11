import './App.css';
import { BrowserRouter as Router, 
         Switch,
         Route } from 'react-router-dom';
import Navigation from './components/Navigation'
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import React from 'react';

export default class App extends React.Component {
  render(){
    return (
      <Router>
        <Navigation />
        <div className="App">
          <Switch>
            <Route path="/about" className="about-route">
              <About />
            </Route>
            <Route path="/" className="home-route">
              <Home />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}