import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'

const OneCard = styled.div`
border: 2px solid black;
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
            if (qaId === qa._id) {
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
                <button onClick={this.toggleEdit} > Edit</button>
                {this.props.stack.map((qa, i) => (
                    <div key={i}>

                        {this.state.showEdit ? <form onBlur={(event) => this.handleSubmit(event, qa._id)}>
                            <textarea onChange={(event) => this.handleChange(event, qa._id)} type="text" name="question" defaultValue={qa.question}></textarea>
                            <textarea onChange={(event) => this.handleChange(event, qa._id)} type="text" name="answer" defaultValue={qa.answer}></textarea>
                        </form>
                            : <OneCard> <p>{qa.question}</p> <p>{qa.answer}</p> </OneCard>}

                        <button onClick={(event) => this.deleteQA(event, qa._id)}>X</button>

                    </div>
                ))}
            </div>
        );
    }
}

export default QA;


