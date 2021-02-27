import React from 'react';
import EditForm from '../components/EditForm'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {useState} from 'react'


function Profile() {

    return (
        <div className='container mx-auto text-center'>
            <EditForm/>
        </div>
    )
}

const mapStateToProps = props => ({
    currentUser: props.currentUser
});

export default connect(mapStateToProps, null)(Profile)