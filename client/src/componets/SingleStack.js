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
const DangerText = styled.div`
${SlightlyRoundedButton}:hover &{
    color: red;
}
`
const EditName = styled.div`
display: flex; 
flex-direction: row;
`
const MidNav = styled.div`
display: flex; 
width: 100vw;
text-decoration: underline;
`
const GoBack = styled.div`
align-self: flex-start;
`
const NameOfStack = styled.div`
align-self: center;
padding-left: 40%;
@media (max-width: 800px) {
padding-left: 30%;
}
@media (max-width: 700px) {
padding-left: 10%;
}
`

const ButtonHolder = styled.div`
display: flex; 
flex-direction: row; 
justify-content: space-evenly;
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
    createNewCard = () => {
        const setId = this.props.match.params.setId
        axios.post(`/api/stack/${setId}/card`).then((res) => {
            this.getSingleStack()
        })
    }

    render() {

        return (
            <div>
                <MidNav>
                    <GoBack><Link to={`/`}><h3>Go Back</h3></Link></GoBack>

                    <NameOfStack><h1>{this.state.stackInfo.name}</h1></NameOfStack>
                </MidNav>

                <ButtonHolder>
                    <SlightlyRoundedButton onClick={this.createNewCard} >Add Card</SlightlyRoundedButton>
                    <div><SlightlyRoundedButton onClick={this.deleteStack}><DangerText> Delete this Stack </DangerText></SlightlyRoundedButton></div>

                    <EditName><SlightlyRoundedButton onClick={this.toggleShowEditForm}>Edit Stack Name</SlightlyRoundedButton>
                        {this.state.showEditForm ? <EditSingleStack
                            getSingleStack={this.getSingleStack}
                            setId={this.state.stackInfo._id}
                            toggleShowEditForm={this.toggleShowEditForm}
                        /> : null}
                    </EditName>
                </ButtonHolder>

                <Card toggleShowEditForm={this.toggleShowEditForm} setId={this.props.match.params.setId} stack={this.state.stackInfo.stack} getSingleStack={this.getSingleStack} />

            </div>

        );
    }
}

export default SingleStack;