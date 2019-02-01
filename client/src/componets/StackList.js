import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import AddStackForm from './AddStackForm';
import styled from 'styled-components'
import card from "./images/cards.png"

const SlightlyRoundedButton = styled.button`
border-radius: 20%;
background-color: navy;
color: white;
font-weight: bold;
padding: 1%;
`
const BoxOfStuff = styled.div`
display: flex; 
flex-direction: row; 
flex-wrap: wrap;
@media (max-width: 800px) {
    display: flex;
flex-direction: column;
align-items: center;
}
`
const NavTwo = styled.div`
display: flex; 
flex-direction: row; 
justify-content: space-evenly;
`
const AddStackBox = styled.div`
display: flex; 
flex-direction: row; 
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
const CardName = styled.h3`
color: black;`

class StackList extends Component {
    state = {
        stacks: [{}],
        addStackForm: false
    }
    componentDidMount() {
        this.getAllStacks()
    }
    searchIt = (e) => {
        console.log(document.getElementById('searchBar').value)
        
        let currentList = this.state.stacks
        let editableList = []
        if (e.target.value !== "") {
            editableList = currentList.filter(stack => {
                const stackName = stack.name.toLowerCase()
                const searchedWord = e.target.value.toLowerCase()
                return stackName.includes(searchedWord)
            })
            this.setState({ stacks: editableList })
        } else {
            this.getAllStacks()
        }
        
    }
    getAllStacks = () => {
        axios.get(`/api/stack`)
            .then((res) => this.setState({ stacks: res.data }))
    }

    toggleAddStackForm = () => {
        this.setState({ addStackForm: !this.state.addStackForm })
    }
    render() {
        return (
            <div>
            <NavTwo>
                <input type="text" id="searchBar" placeholder="Search Stacks..." onChange={this.searchIt}></input>
                <AddStackBox>
                <SlightlyRoundedButton onClick={this.toggleAddStackForm}>Submit New Stack</SlightlyRoundedButton>
                {this.state.addStackForm ? <AddStackForm getAllStacks={this.getAllStacks} toggleAddStackForm={this.toggleAddStackForm} /> : null}
                </AddStackBox>
            </NavTwo>
                <BoxOfStuff>
                    {this.state.stacks.map((set, i) => (

                        <OneStack key={i}>
                            <Name><Link to={`/all/${set._id}`}><CardName>{set.name}</CardName></Link></Name>
                        </OneStack>

                    ))}
                </BoxOfStuff>
            </div>
        );
    }
}

export default StackList;