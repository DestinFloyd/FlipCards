import React, { Component } from 'react';
import axios from 'axios'
class AddStackForm extends Component {
state={
    name: '',
    formShowing: ''
} 

handleChange = (event) => {
    const newStack = { ...this.state.stack }
    newStack[event.target.name] = event.target.value
    this.setState({ name: newStack })
}

handleSubmit = (event) => {
    event.preventDefault()
    const newName = this.state.name
    axios.post('/api/stack', newName)
    .then((res) => {
        this.props.getAllStacks()
        this.props.toggleAddStackForm()
    })
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
                <button>Submit</button>
            </form>
        </div>
        );
    }
}

export default AddStackForm;