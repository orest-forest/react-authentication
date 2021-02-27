import React from 'react';
import LoginForm from '../components/LoginForm';
import {Redirect} from 'react-router-dom';
import {Link} from 'react-router-dom'


export default function Login() {
    return (
        <div>
            {localStorage.token ? <Redirect to="/home"/> : null}
            <Link to='/registration'>Перейти на страницу регистрации</Link>
            <h3 className='text-center'>Login</h3>
            <LoginForm/>
        </div>
    )
}