import React, { Component } from 'react';
import EditSingleStack from './EditSingleStack';
import axios from 'axios'
import { Link } from 'react-router-dom'
import Card from './Card'
import styled from 'styled-components'

const SlightlyRoundedButton = styled.button`
border-radius: 20%;
background-color: navy;
color: white;
font-weight: bold;
padding: 1%;
`

class SingleStack extends Component {
    state = {
        stackInfo: {
            name: '',
            stack: [{}]
        },
        showEditForm: false,
    }
    componentDidMount() {
        this.getSingleStack()
    }
    getSingleStack = () => {
        const setId = this.props.match.params.setId
        axios.get(`/api/stack/${setId}`)
            .then((res) => {
                this.setState({ stackInfo: res.data })
            })
    }
    toggleShowEditForm = () => {
        this.setState({ showEditForm: !this.state.showEditForm })
    }
    toggleAddCard = () => {
        this.setState({ showCardForm: !this.state.showCardForm })
    }
    deleteStack = () => {
        const setId = this.props.match.params.setId
        axios.delete(`/api/stack/${setId}`)
            .then(() => this.props.history.goBack())
    }
    createNewQA = () => {
        const setId = this.props.match.params.setId
        axios.post(`/api/stack/${setId}/card`).then((res) => {
            this.getSingleStack()
        })
    }

    render() {

        return (
            <div>
                <Link to={`/`}><h3>Go Back</h3></Link>

                <h1>{this.state.stackInfo.name}</h1>
                <div><SlightlyRoundedButton onClick={this.toggleShowEditForm}>Edit Stack Name</SlightlyRoundedButton></div>

                {this.state.showEditForm ? <EditSingleStack
                    getSingleStack={this.getSingleStack}
                    setId={this.state.stackInfo._id}
                    toggleShowEditForm={this.toggleShowEditForm}
                /> : null}

                <div><SlightlyRoundedButton onClick={this.deleteStack}>Delete this Stack</SlightlyRoundedButton></div>
                <SlightlyRoundedButton onClick={this.createNewQA} >Add Card</SlightlyRoundedButton>
       
                <Card toggleShowEditForm={this.toggleShowEditForm} setId={this.props.match.params.setId} stack={this.state.stackInfo.stack} getSingleStack={this.getSingleStack} />
          
            </div>
           
        );
    }
}

export default SingleStack;