import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import AddStackForm from './AddStackForm';
import styled from 'styled-components'
import card from "./images/cards.png"

const Container = styled.div`
display: flex; 
flex-direction: row; 
flex-wrap: wrap;
`
const OneStack = styled.div`
height: 400px; 
width: 400px;
background-image: url(${card});
background-repeat: no-repeat;
background-size: contain;
background-position: center;
text-align: center;
display: flex;
justify-content: center;
align-items: center;

`
const Name = styled.div`
margin-top: 30%;
margin-left: 10%;
width: 50%;
height: 35%;

`
const HH = styled.h3`color: black;`

class StackList extends Component {
    state = {
        stacks: [{}],
        addStackForm: false
    }

    componentDidMount() {
        this.getAllStacks()
    }

    getAllStacks = () => {
        axios.get(`/api/set`)
        .then((res) => this.setState({ stacks: res.data }))
    }

    toggleAddStackForm = () => {
        this.setState({ addStackForm: !this.state.addStackForm })
    }
    render() {
        return (
            <div>
                
                Im a stack List!
                <input type="text" name="searchBar"></input>
                <button onClick={this.toggleAddStackForm}>Submit New Stack</button>
                {this.state.addStackForm ? <AddStackForm getAllStacks={this.getAllStacks} toggleAddStackForm={this.toggleAddStackForm}/> : null }
                <Container>
                {this.state.stacks.map((set, i) => (
                   
                    <OneStack key={i}>
                    <Name><Link to={`/${set._id}`}><HH>{set.name}</HH></Link></Name>  
                    </OneStack>
                ))}
                </Container>
            </div>
        );
    }
}

export default StackList;