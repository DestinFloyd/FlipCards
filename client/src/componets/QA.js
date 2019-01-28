import React, { Component } from 'react';
import axios from 'axios'

class QA extends Component {
    state={
        qa:{
            question: '',
            answer: ''
        }
    }

deleteQA = (event, qaId) => {
    event.preventDefault()
    console.log(qaId)
    const setId = this.props.setId
    axios.delete(`/api/set/${setId}/qa/${qaId}`).then(() => {
        this.props.getSingleStack()
    })
}
    render() {
        return (
            <div>
                {this.props.stack.map((qa, i) => (
                    <div key={i}>
                   
                        <div>{qa.question}</div>
                        <div>{qa.answer}</div>
                        <p>QA</p>
                        <button onClick={(event)=> this.deleteQA(event, qa._id)}>x</button>
                    </div>
                ))}
            </div>
        );
    }
}

export default QA;


