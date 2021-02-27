import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {clearStore, userPostFetch} from '../actions/actions';
import {connect} from 'react-redux';
import AlertMessage from './AlertMessage'
import {Link} from 'react-router-dom'

class RegistrationForm extends Component {
    state = {
        name: '',
        surname: '',
        name_customer: '',
        email: '',
        phone: '',
        role: '1',
        password: '',
        password_confirmation: '',
        invalidForms: {}
    };


    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };


    handleSubmit = async (event) => {
        event.preventDefault();
        await this.props.userPostFetch(this.state);
        if (this.props.messageFromServer.message !== '  Пользователь был создан') {
            this.setState({invalidForms: this.props.messageFromServer.errors})
        } else {
            this.setState({});
            clearStore();
            setTimeout(
                () => {
                    this.props.history.push('/login')
                }, 2000
            );
        }
    };

    render() {
        return (
            <div className='container text-center pt-3 col-6'>
                <AlertMessage/>
                <Link to='/login'>Перейти на страницу логинизации</Link>
                <form className='form-group' onSubmit={this.handleSubmit}>
                    <label>name</label>
                    <input
                        className={`form-control ${this.state.invalidForms.name ? 'is-invalid' : null}`}
                        name='name'
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <span>{this.state.invalidForms.name ? this.props.messageFromServer.errors.name : null}</span>
                    <br/>
                    <span>surname</span>
                    <input
                        className={`form-control ${this.state.invalidForms.surname ? 'is-invalid' : null}`}
                        name='surname'
                        value={this.state.surname}
                        onChange={this.handleChange}
                    />
                    <span>{this.state.invalidForms.surname ? this.props.messageFromServer.errors.surname : null}</span>
                    <br/>
                    <span>name_customer</span>
                    <input
                        className={`form-control ${this.state.invalidForms.name_customer ? 'is-invalid' : null}`}
                        name='name_customer'
                        value={this.state.name_customer}
                        onChange={this.handleChange}
                    />
                    <span>{this.state.invalidForms.name_customer ? this.props.messageFromServer.errors.name_customer : null}</span>
                    <br/>
                    <span>email</span>
                    <input
                        className={`form-control ${this.state.invalidForms.email ? 'is-invalid' : null}`}
                        name='email'
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    <span>{this.state.invalidForms.email ? this.props.messageFromServer.errors.email : null}</span>
                    <br/>
                    <span>phone</span>
                    <input
                        className={`form-control ${this.state.invalidForms.phone ? 'is-invalid' : null}`}
                        name='phone'
                        value={this.state.phone}
                        onChange={this.handleChange}/>
                    <span>{this.state.invalidForms.phone ? this.props.messageFromServer.errors.phone : null}</span>
                    <br/>
                    <span>role   </span>
                    <select name='role' value={this.state.role} onChange={this.handleChange}
                            className="custom-select mr-sm-2">
                        <option value="1">поставщик</option>
                        <option value="2">заказчик</option>
                    </select>
                    <span>{this.state.invalidForms.role ? this.props.messageFromServer.errors.role : null}</span>
                    <br/>
                    <span>password</span>
                    <input
                        className={`form-control ${this.state.invalidForms.password ? 'is-invalid' : null}`}
                        name='password'
                        value={this.state.password}
                        onChange={this.handleChange}/>
                    <span>{this.state.invalidForms.password ? this.props.messageFromServer.errors.password : null}</span>
                    <br/>
                    <span>password_confirmation</span>
                    <input
                        className={`form-control ${this.state.invalidForms.password_confirmation ? 'is-invalid' : null}`}
                        name='password_confirmation'
                        value={this.state.password_confirmation}
                        onChange={this.handleChange}/>
                    <span>{this.state.invalidForms.password_confirmation ? this.props.messageFromServer.errors.password_confirmation : null}</span>
                    <br/>
                    <input type='submit'/>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = {
    userPostFetch, clearStore
};

const mapStateToProps = props => {
    return {messageFromServer: props.messageFromServer}
};


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(RegistrationForm));