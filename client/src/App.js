import React, { Component } from 'react';
// import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import StackList from './componets/StackList'
import SingleStack from './componets/SingleStack';

const Container = styled.div`
// background-color:blue;

`
const Header = styled.div`
width: 100vw;
font-size: 3em;
`

class App extends Component {
  render() {
    return (
      <Router>
        <Container>
          <Header>Flip Cards</Header>
         
          
          <Switch>

            <Route exact path='/' component={StackList} />
            <Route exact path='/:setId' component={SingleStack} />


          </Switch>

        </Container>
      </Router>
    );
  }
}

export default App;
