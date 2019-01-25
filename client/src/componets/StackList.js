import React, { Component } from 'react';
import axios from 'axios'
// import AddUserForm from './AddUserForm';
import { Link } from 'react-router-dom'

class StackList extends Component {
    state = {
        stacks: [{}],
        addStackForm: false
    }

    componentDidMount() {
        this.getAllUsers()
    }

    getAllUsers = () => {
        axios.get(`/api/set`)
        .then((res) => this.setState({ stacks: res.data }))
    }

    // toggleAddUserForm = () => {
    //     this.setState({ addStackForm: !this.state.addStackForm })
    // }
    render() {
        return (
            <div>
                Im a stack List!
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