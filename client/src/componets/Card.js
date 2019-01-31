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
min-height: 200px;
min-width: 300px;
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 5%;
margin-right: 5%;
`
const Top = styled.div`
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
const RoundButton = styled.button`
width: 25px;
height: 25px;
border-radius: 50%;
font-weight: bolder;
font-size: 16px;
background: ${props => props.color};
`
const UpDownHolder = styled.div`
display: flex; 
font-size: 16px;
`
const WordHolder = styled.button`
border: 5px solid black;
border-radius: 15%;
background: ${props => props.color};
color: ${props => props.fontColor};
height: ${props => props.height + "px"};
width: ${props => props.width + "px"};
font-size: ${props => props.fontNumber + "px"};
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
        stack: [{}],
        qa: {
            question: '',
            answer: ''
        },
        showEdit: false,
        fontNumber: 16,
        boxSizeWidth: 300,
        boxSizeHeight: 200,
        color: 'white',
        fontColor: 'black'
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
    colorUpdate = (num) => {
        let updatedColorInfo = { ...this.state.color }
        if (num === 1) {
            updatedColorInfo = 'red'
        } else if (num === 2) {
            updatedColorInfo = 'orange'
        } else if (num === 3) {
            updatedColorInfo = 'yellow'
        } else if (num === 4) {
            updatedColorInfo = 'green'
        } else if (num === 5) {
            updatedColorInfo = 'blue'
        } else if (num === 6) {
            updatedColorInfo = 'violet'
        } else if (num === 7) {
            updatedColorInfo = 'white'
        }
        this.setState({ color: updatedColorInfo })
    }
    fontColorUpdate = (num) => {
        let updatedFontColor = { ...this.state.fontColor }
        if (num === 1) {
            updatedFontColor = 'red'
        } else if (num === 2) {
            updatedFontColor = 'orange'
        } else if (num === 3) {
            updatedFontColor = 'yellow'
        } else if (num === 4) {
            updatedFontColor = 'green'
        } else if (num === 5) {
            updatedFontColor = 'blue'
        } else if (num === 6) {
            updatedFontColor = 'violet'
        } else if (num === 7) {
            updatedFontColor = 'black'
        }
        this.setState({ fontColor: updatedFontColor })
    }
    fontNumberUp = () => {
        let changing = this.state.fontNumber
        changing += 1
        this.setState({ fontNumber: changing })
    }
    fontNumberDown = () => {
        let changing = this.state.fontNumber
        changing -= 1
        this.setState({ fontNumber: changing })
    }
    boxSizeUp = () => {
        let changing = this.state.boxSizeHeight
        let changing2 = this.state.boxSizeWidth
        changing += 10
        changing2 += 10
        this.setState({ boxSizeHeight: changing, boxSizeWidth: changing2 })
    }
    boxSizeDown = () => {
        let changing = this.state.boxSizeHeight
        let changing2 = this.state.boxSizeWidth
        changing -= 10
        changing2 -= 10
        this.setState({ boxSizeHeight: changing, boxSizeWidth: changing2 })
    }
    handleSubmit = (event, qaId) => {
        event.preventDefault()
        const stackId = this.props.stackId
        const newQA = this.state.qa
        axios.put(`/api/stack/${stackId}/card/${qaId}`, newQA)
            .then(() => this.props.getSingleStack())
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

                <button onClick={this.toggleEdit} > {this.state.showEdit ? "Done Editing" : "Edit"}</button>
                <br />
                Color: <RoundButton onClick={(event) => { this.colorUpdate(1) }} color={"red"} ></RoundButton>
                <RoundButton onClick={(event) => { this.colorUpdate(2) }} color={"orange"} ></RoundButton>
                <RoundButton onClick={(event) => { this.colorUpdate(3) }} color={"yellow"} ></RoundButton>
                <RoundButton onClick={(event) => { this.colorUpdate(4) }} color={"green"} ></RoundButton>
                <RoundButton onClick={(event) => { this.colorUpdate(5) }} color={"blue"} ></RoundButton>
                <RoundButton onClick={(event) => { this.colorUpdate(6) }} color={"violet"} ></RoundButton>
                <RoundButton onClick={(event) => { this.colorUpdate(7) }} color={"white"} ></RoundButton>
                <br />
                Font: <RoundButton onClick={(event) => { this.fontColorUpdate(1) }} color={"red"} ></RoundButton>
                <RoundButton onClick={(event) => { this.fontColorUpdate(2) }} color={"orange"} ></RoundButton>
                <RoundButton onClick={(event) => { this.fontColorUpdate(3) }} color={"yellow"} ></RoundButton>
                <RoundButton onClick={(event) => { this.fontColorUpdate(4) }} color={"green"} ></RoundButton>
                <RoundButton onClick={(event) => { this.fontColorUpdate(5) }} color={"blue"} ></RoundButton>
                <RoundButton onClick={(event) => { this.fontColorUpdate(6) }} color={"violet"} ></RoundButton>
                <RoundButton onClick={(event) => { this.fontColorUpdate(7) }} color={"black"} ></RoundButton>

                <UpDownHolder>
                    <RoundButton onClick={this.fontNumberDown}> - </RoundButton>
                    <div>Font</div>
                    <RoundButton onClick={this.fontNumberUp}> + </RoundButton>
                </UpDownHolder>
                <UpDownHolder>
                    <RoundButton onClick={this.boxSizeDown}> - </RoundButton>
                    <div>Card</div>
                    <RoundButton onClick={this.boxSizeUp}> + </RoundButton>
                </UpDownHolder>

                <Container>

                    {this.props.stack.map((qa, i) => (
                        <div key={i}>

                            {this.state.showEdit ? <div><form onBlur={(event) => this.handleSubmit(event, qa._id)}>

                                <textarea onChange={(event) => this.handleChange(event, qa._id)} onFocus={(event) => this.handleChange(event, qa._id)} type="text" id="question" name="question" defaultValue={qa.question}></textarea>
                                <textarea onChange={(event) => this.handleChange(event, qa._id)} onFocus={(event) => this.handleChange(event, qa._id)} type="text" id="answer" name="answer" defaultValue={qa.answer}></textarea>
                            </form>
                            </div>

                                : <OneCard> <Top><WordHolder fontNumber={this.state.fontNumber} height={this.state.boxSizeHeight} width={this.state.boxSizeWidth} color={this.state.color} fontColor={this.state.fontColor}>{qa.question}</WordHolder></Top>
                                    <Bottom><WordHolder fontNumber={this.state.fontNumber} height={this.state.boxSizeHeight} width={this.state.boxSizeWidth} color={this.state.color} fontColor={this.state.fontColor}>{qa.answer}</WordHolder> <DeleteButton onClick={(event) => this.deleteQA(event, qa._id)}>X</DeleteButton></Bottom>
                                </OneCard>}

                        </div>
                    ))}
                </Container>
            </div>
        );
    }
}

export default Card;
