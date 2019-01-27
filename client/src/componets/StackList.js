import React, { Component } from 'react';
import axios from 'axios'
// import AddUserForm from './AddUserForm';
import { Link } from 'react-router-dom'
import AddStackForm from './AddStackForm';

class StackList extends Component {
    state = {
        stacks: [{}],
        addStackForm: false
    }

    componentDidMount() {
        this.getAllStacks()
    }

    getAllStacks = () => {
        axios.get(`/api/set`)
        .then((res) => this.setState({ stacks: res.data }))
    }

    toggleAddStackForm = () => {
        this.setState({ addStackForm: !this.state.addStackForm })
    }
    render() {
        return (
            <div>
                Im a stack List!
                <button onClick={this.toggleAddStackForm}>Submit New Stack</button>
                {this.state.addStackForm ? <AddStackForm getAllStacks={this.getAllStacks} toggleAddStackForm={this.toggleAddStackForm}/> : null }
                
                {this.state.stacks.map((set, i) => (
                    <div key={i}>
                        <Link to={`/${set._id}`}><h3>{set.name}</h3></Link>
                    </div>
                ))}
            </div>
        );
    }
}

export default StackList;