import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'


const Container = styled.div`
display: flex; 
flex-direction: row;
flex-wrap: wrap;
justify-content: space-evenly;

`
const OneCard = styled.div`
max-height: 200px;
max-width: 300px;
min-height: 200px;
min-width: 300px;
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 5%;
margin-right: 5%;

`
const Top = styled.div`
// height: 200px;
// width: 255px; 
// min-height: 200px;
// min-width: 255px; 
position: relative;
z-index: 1;
text-align: center;
display: flex;
justify-content: center;
align-items: center;
margin-left: 15px;
${OneCard}:hover & {
    opacity: 0;
}
`
const Bottom = styled.div`
// height: 200px;
// width: 255px; 
position: absolute;
z-index: 2;
opacity: 0;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
text-align: center;
margin-left: 15px;
${OneCard}:hover & {
    opacity: 1;
    text-align: center;
}
`
const EditButton = styled.button`
width: 10vw;
`
const WordHolder = styled.button`
border: 5px solid black;
border-radius: 15%;
height: 200px;
width: 300px;
font-size: 16px;
`
const DeleteButton = styled.button`
justify-self: flex-start;
align-self: flex-start;
background-color: red;
height: 20px;
width: 20px;
font-weight: bold;
font-size: large;
border-radius: 50%;
`

class Card extends Component {
    state = {
        stack:[{}],
        qa: {
            question: '',
            answer: ''
        },
        showEdit: false
    }
    toggleEdit = () => {
        this.setState({ showEdit: !this.state.showEdit })
    }
    handleChange = (event, qaId) => {
        const updatedState = { ...this.state.qa }
        this.props.stack.forEach((qa) => {
            if(qaId === qa._id) {
                updatedState[event.target.name] = event.target.value
            }
        })
        this.setState({ qa: updatedState })
    }

    handleSubmit = (event, qaId) => {
        event.preventDefault()
        const setId = this.props.setId
        const newQA = this.state.qa
        axios.put(`/api/stack/${setId}/card/${qaId}`, newQA)
            .then(() => this.props.getSingleStack())
            console.log("blurr")
    }
    deleteQA = (event, qaId) => {
        event.preventDefault()
        const setId = this.props.setId
        axios.delete(`/api/stack/${setId}/card/${qaId}`).then(() => {
            this.props.getSingleStack()
        })  
    }
    render() {

        return (
            <div>
            <EditButton onClick={this.toggleEdit}> {this.state.showEdit ? "Done Editing" : "Edit" }</EditButton>
            <br/>

            <Container>
            
                {this.props.stack.map((qa, i) => (
                    <div key={i}>

                        {this.state.showEdit ? <form onBlur={(event) => this.handleSubmit(event, qa._id)}>
                       
                            <textarea onChange={(event) => this.handleChange(event, qa._id)} type="text" name="question" defaultValue={qa.question}></textarea>
                            <textarea onChange={(event) => this.handleChange(event, qa._id)} type="text" name="answer" defaultValue={qa.answer}></textarea>
                        </form>
                            : <OneCard> <Top><WordHolder>{qa.question}</WordHolder></Top> 
                            <Bottom><WordHolder>{qa.answer}</WordHolder> <DeleteButton onClick={(event) => this.deleteQA(event, qa._id)}>X</DeleteButton></Bottom> 
                            </OneCard>}
                       

                    </div>
                ))}
            </Container>
            </div>
        );
    }
}

export default Card;


