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
    searchIt = () => {
        console.log(document.getElementById('searchBar').value)
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

                Im a stack List!
                <input type="text" id="searchBar" onChange={this.searchIt}></input>
                <button onClick={this.toggleAddStackForm}>Submit New Stack</button>
                {this.state.addStackForm ? <AddStackForm getAllStacks={this.getAllStacks} toggleAddStackForm={this.toggleAddStackForm} /> : null}

                <Container>
                    {this.state.stacks.map((set, i) => (
                        // console.log('test')
                        // // let name = set.name
                        // // let search = document.getElementById("searchBar")
                        // // search.value = "deon"

                        // let search = document.getElementById("searchBar")
                        
                        // //    console.log(typeof(search)) 
                        // //    if(name.includes(`${search}`)){
                        // //     console.log(`test ${i}`)

                        // //    }

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