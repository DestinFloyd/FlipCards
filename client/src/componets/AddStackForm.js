import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'

const SlightlyRoundedButton = styled.button`
border-radius: 20%;
background-color: #155084;
color: white;
font-weight: bold;
padding: 1%;
`

class AddStackForm extends Component {
state={
    name: "",
    formShowing: ''
} 

handleChange = (event) => {
    const newStack = { ...this.state.stack }
    
    newStack[event.target.name] = event.target.value
    console.log(newStack)
    this.setState({ name: newStack })
}

handleSubmit = (event) => {
    event.preventDefault()
    const newName = this.state.name
    if( newName.name === undefined ){
        this.props.getAllStacks()
        this.props.toggleAddStackForm()

    }else{ 
        axios.post('/api/stack', newName)
        .then( 
            (res) => {
            this.props.getAllStacks()
            this.props.toggleAddStackForm()
        })

    }

}
    render() {

        return (
            <div>
                
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input type="text"
                    placeholder="New Stack Name"
                    name="name"
                    onChange={this.handleChange}
                    />
                </div>
                <SlightlyRoundedButton>Submit</SlightlyRoundedButton>
            </form>
        </div>
        );
    }
}

export default AddStackForm;