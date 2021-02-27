import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {userLoginFetch} from "../actions/actions";
import {editProfile} from "../actions/actions";

class EditForm extends Component {

    state = {
        name: '',
        surname: '',
        name_customer: '',
        role: '',
        editMode: false,

    };

    componentDidMount() {
        let userObj = JSON.parse(localStorage.currentUser)
        this.setState({
            name: userObj.name,
            surname: userObj.surname,
            name_customer: userObj.name_customer,
            role: userObj.role,
        })
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = async (event) => {
        event.preventDefault();
        let user = {
            name: this.state.name,
            surname: this.state.surname,
            name_customer: this.state.name_customer,
            role: this.state.role
        };
        await this.props.editProfile(user);
        if (this.props.currentUser.status === true) {
            localStorage.setItem('currentUser', JSON.stringify(this.props.currentUser.user))
        }
        this.setState({editMode: !this.state.editMode})
    };

    handleEdit = () => {
        this.setState({editMode: !this.state.editMode})
    };

    render() {
        return (
            <div>
                <div className='container mx-auto text-center'>
                    <form onSubmit={this.handleSubmit}>
                        <h3>Profile</h3>
                        <h3>name</h3>
                        {this.state.editMode ? <input
                            name='name'
                            value={this.state.name}
                            onChange={this.handleChange}
                        /> : <p>{this.state.name}</p>}
                        <h3>surname</h3>
                        {this.state.editMode ? <input
                            name='surname'
                            value={this.state.surname}
                            onChange={this.handleChange}
                        /> : <p>{this.state.surname}</p>}
                        <h3>name_customer</h3>
                        {this.state.editMode ? <input
                            name='name_customer'
                            value={this.state.name_customer}
                            onChange={this.handleChange}
                        /> : <p>{this.state.name_customer}</p>}
                        <h3>role</h3>
                        {this.state.editMode ? <select name='role' value={this.state.role} onChange={this.handleChange}
                                                       className="custom-select mr-sm-2">
                            <option value="1">поставщик</option>
                            <option value="2">заказчик</option>
                        </select> : <p>{this.state.role}</p>}
                        {this.state.editMode ? <input type='submit' value='confirm' onClick={this.handleSubmit}/> :
                            <button onClick={this.handleEdit}>Edit</button>}
                    </form>
                </div>


            </div>
        )
    }
}

const mapDispatchToProps = {
    editProfile,
};

const mapStateToProps = props => {
    return {currentUser: props.currentUser}
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EditForm));