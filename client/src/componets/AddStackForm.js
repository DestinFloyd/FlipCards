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
    this.setState({ user: newStack })
}

handleSubmit = (event) => {
    event.preventDefault()
    const payload = this.state.name
    axios.post('/api/set', payload)
    .then((res) => {
        // this.props.getAllUsers()
        // this.props.toggleAddUserForm()
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
                <button>Submit New Stack</button>
            </form>
        </div>
        );
    }
}

export default AddStackForm;