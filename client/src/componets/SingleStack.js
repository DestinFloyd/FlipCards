import React, { Component } from 'react';
import EditSingleStack from './EditSingleStack';
import axios from 'axios'

class SingleStack extends Component {
    state = {
     stackInfo: {   
        name: '',
        qas: [{}]
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

    // deleteUser = () => {
    //     const userId = this.props.match.params.userId
    //     axios.delete(`/api/users/${userId}`)
    //     .then(() => this.props.history.goBack())
    // }
    render() {
        return (
            <div>
                Im a single stack!
                <h1>{this.state.stackInfo.name}</h1>
                

                <div><button>Edit Stack Name</button></div> 
               <EditSingleStack
                getSingleStack={this.getSingleStack}
                setId={this.state.stackInfo._id}
                /> 
                {/* <div><button onClick={this.deleteUser}>Delete User</button></div> */}

                {/* {this.state.user.ideas.map((idea, i) => (
                    <div key={i}>
                        <h3>{idea.title}</h3>
                        <p>{idea.description}</p>
                    </div>
                ))} */}
            </div>
        );
    }
}

export default SingleStack;