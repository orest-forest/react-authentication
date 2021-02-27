import React from 'react';
import RegistrationForm from '../components/RegistratiomForm'
import {Redirect} from 'react-router-dom'

export default function Registration() {
    return (
        <div>
            {localStorage.token ? <Redirect to="/home"/> : null}
            <h3 className='text-center'>Registr page</h3>
            <RegistrationForm/>
        </div>
    )
}