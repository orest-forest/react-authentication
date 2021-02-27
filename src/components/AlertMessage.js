import React from 'react';
import {connect} from 'react-redux'


function AlertMessage(props) {

    if (props.messageFromServer === undefined) {
        return null
    }

    if (props.messageFromServer.message === 'The given data was invalid.') {
        return (
            <div className="alert alert-warning fade show" role="alert">
                {props.messageFromServer.message}
            </div>
        )
    } else if (props.messageFromServer.message === '  Пользователь был создан') {
        return (
            <div className="alert alert-primary fade show" role="alert">
                {props.messageFromServer.message}
            </div>
        )
    } else {
        return null
    }
}


const mapStateToProps = props => {
    return {messageFromServer: props.messageFromServer}
};

export default connect(null, mapStateToProps)(AlertMessage)