import React, { Component } from 'react';
import axios from 'axios'

class EditSingleStack extends Component {
    state = {
        name: ''

    }

    handleChange = (event) => {
        const newStackName = { ...this.state.name }
        console.log(newStackName)
        newStackName[event.target.name] = event.target.value
        this.setState({ name: newStackName })
        this.props.getSingleStack()
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const newNameData = this.state.name
        const setId = this.props.setId
        axios.put(`/api/stack/${setId}`, newNameData)
        .then((res) => {
            this.props.getSingleStack()
            this.props.toggleShowEditForm()
        })
    }
    render() {
        return (
            <div>
                
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type="text"
                            placeholder="Stack Name"
                            name="name"
                            onChange={this.handleChange}
                        />
                    </div>
                    <button >Submit New Stack Name</button>
                </form>
            </div>
        );
    }
}

export default EditSingleStack;