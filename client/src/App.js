import React, { Component } from 'react';
// import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import axios from 'axios'
import StackList from './componets/StackList'
import SingleStack from './componets/SingleStack';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1> Flip Cards</h1>
          
          <Switch>

            <Route exact path='/' component={StackList} />
            <Route exact path='/:setId' component={SingleStack} />


          </Switch>

        </div>
      </Router>
    );
  }
}

export default App;
