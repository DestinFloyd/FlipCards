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
border: 2px solid black;
max-height: 300px;
max-width: 300px;
display: flex;
justify-content: center;
align-items: center;
`
const Top = styled.div`
height: 300px;
width: 300px; 
position: relative;
z-index: 1;
text-align: center;
display: flex;
justify-content: center;
align-items: center;
${OneCard}:hover & {
    opacity: 0;
}
`
const Bottom = styled.div`
height: 300px;
width: 300px; 
position: absolute;
z-index: 2;
opacity: 0;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
${OneCard}:hover & {
    opacity: 1;
    text-align: center;
}
`
const EditButton = styled.button`
width: 20vw;

`
const DeleteButton = styled.button`
justify-self: flex-end;
align-self: flex-start;
`

class QA extends Component {
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
        axios.put(`/api/set/${setId}/qa/${qaId}`, newQA)
            .then(() => this.props.getSingleStack())
            console.log("blurr")
    }
    deleteQA = (event, qaId) => {
        event.preventDefault()
        const setId = this.props.setId
        axios.delete(`/api/set/${setId}/qa/${qaId}`).then(() => {
            this.props.getSingleStack()
        })  
    }
    render() {

        return (
            <div>
            <EditButton onClick={this.toggleEdit}> {this.state.showEdit ? "Done Editing" : "Edit" }</EditButton>
            <Container>
            
                {this.props.stack.map((qa, i) => (
                    <div key={i}>

                        {this.state.showEdit ? <form onBlur={(event) => this.handleSubmit(event, qa._id)}>
                       
                            <textarea onChange={(event) => this.handleChange(event, qa._id)} type="text" name="question" defaultValue={qa.question}></textarea>
                            <textarea onChange={(event) => this.handleChange(event, qa._id)} type="text" name="answer" defaultValue={qa.answer}></textarea>
                        </form>
                            : <OneCard> <Top>{qa.question}</Top> 
                            <Bottom>{qa.answer}<DeleteButton onClick={(event) => this.deleteQA(event, qa._id)}>X</DeleteButton></Bottom> 
                            </OneCard>}
                       

                    </div>
                ))}
            </Container>
            </div>
        );
    }
}

export default QA;


