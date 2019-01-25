import React, { Component } from 'react';
import EditSingleStack from './EditSingleStack';
import axios from 'axios'
import {Link} from 'react-router-dom'

class SingleStack extends Component {
    state = {
     stackInfo: {   
        name: '',
        stack:[{}]
        }
    }

    componentDidMount() {
        this.getSingleStack()
    }

    getSingleStack = () => {
        const setId = this.props.match.params.setId
        axios.get(`/api/set/${setId}`)
        .then((res) => {
            this.setState({ stackInfo: res.data })
        })
    }

    deleteStack = () => {
        const setId = this.props.match.params.setId
        axios.delete(`/api/set/${setId}`)
        .then(() => this.props.history.goBack())
    }
    render() {
        const all = this.state.stackInfo.stack.map((set, i)=>(
            <div key={i}> 
           
            <p>{set.question}</p>
            <p>{set.answer}</p>
            </div>
        ))
        return (
            <div>
                <Link to={`/`}><h3>Go Back</h3></Link>
                
                Im a single stack!
                <h1>{this.state.stackInfo.name}</h1>
                

                <div><button>Edit Stack Name</button></div> 
               <EditSingleStack
                getSingleStack={this.getSingleStack}
                setId={this.state.stackInfo._id}
                /> 
                    <div><button onClick={this.deleteStack}>Delete this Stack</button></div> 

                {all}

            
            </div>
        );
    }
}

export default SingleStack;