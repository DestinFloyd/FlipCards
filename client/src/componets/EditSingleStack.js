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
                    <SlightlyRoundedButton>Submit New Stack Name</SlightlyRoundedButton>
                </form>
            </div>
        );
    }
}

export default EditSingleStack;