import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom' 
import Docs from './components/Docs';
import Tutoriel from './components/Tutoriel';
import Comminity from './components/Comminity';
import Menu from './components/Menu';
import Profile from './components/Profile';
import ErrorPage from './components/ErrorPage';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      underConst : {
        Docs : false,
        Tutoriel : false,
        Comminity : false
      }
    }
  }
  
  render(){
    return (
      <BrowserRouter className="App">
        <Menu />
        <Switch>
          <Route exact path="/" component={Docs} />
          <Route path="/tutoriel" component={Tutoriel} />
          <Route path="/comminity" component={Comminity} />
          <Route path="/user/:id" component={Profile} />
          <Route component={ErrorPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
