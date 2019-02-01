import React, { Component } from 'react';
// import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import StackList from './componets/StackList'
import SingleStack from './componets/SingleStack';
import styled, { keyframes } from 'styled-components'


const fadeIt = keyframes`
  0% {
    transform: rotateX(360deg);
  }
  50%{
    transform: rotateX(0deg)
  }
  75% {
    transform: rotateY(180deg);
    
  }
`
const Header = styled.div`
width: 100vw;
text-align: center;
display:flex; 
justify-content: center;
background-color: darkgray;
padding-top: 2%;
padding-bottom: 2%;
@media (max-width: 700px) {
    padding-top: 0px;
    padding-bottom: 0px;
  }
`
const HeaderText = styled.div`
font-size: 6em;
width: 50%;
@media (max-width: 700px) {
    font-size: 2.5em
  }
${Header}:hover & {
  background-color: white;
  animation: 4s ${fadeIt};
}
`

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header> 
          <HeaderText>Flip Cards</HeaderText>
          </Header>

          <Switch>

            <Route exact path='/' component={StackList} />
            <Route exact path='/all/:setId' component={SingleStack} />

          </Switch>

        </div>
      </Router>
    );
  }
}

export default App;
