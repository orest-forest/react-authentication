import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {userLoginFetch} from "../actions/actions";

class LoginForm extends Component {

    state = {
        email: '',
        password: '',
        invalidForms: {}
    };

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = async (event) => {
        event.preventDefault();
        await this.props.userLoginFetch(this.state);
        if (this.props.messageFromServer.status == true) {
            this.setState({invalidForms: {}});
            localStorage.setItem('token', this.props.messageFromServer.token);
            localStorage.setItem('currentUser', JSON.stringify(this.props.messageFromServer.user));
            this.props.history.push('/home')
        } else {
            this.setState({invalidForms: this.props.messageFromServer.errors})
        }
    };


    render() {
        return (
            <div className='container text-center pt-3 col-6'>
                <form onSubmit={this.handleSubmit}>
                    <span>email</span>
                    <input
                        className={`form-control ${this.state.invalidForms.email ? 'is-invalid' : null}`}
                        name='email'
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    <span>{this.state.invalidForms.email ? this.props.messageFromServer.errors.email : null}</span>
                    <br/>
                    <span>password</span>
                    <input
                        className={`form-control ${this.state.invalidForms.email ? 'is-invalid' : null}`}
                        name='password'
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    <span>{this.state.invalidForms.password ? this.props.messageFromServer.errors.password : null}</span>
                    <br/>
                    <input type='submit'/>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = {
    userLoginFetch,
};

const mapStateToProps = props => {
    return {messageFromServer: props}
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginForm));