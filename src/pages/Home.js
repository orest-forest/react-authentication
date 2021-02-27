import React, {useEffect} from 'react';
import {Link} from 'react-router-dom'
import {Redirect} from 'react-router-dom'
import {connect, useDispatch} from 'react-redux'
import {clearStore} from "../actions/actions";
import {withRouter} from 'react-router-dom';

function Home(props) {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            {localStorage.token ? null : <Redirect to='/registration'/>}
            <h3>Home page</h3>
            <div className="nav-item dropdown text-right">
                <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button"
                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                        <path fill-rule="evenodd"
                              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                    </svg>
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link className="dropdown-item" to="/profile" props={props.currentUser}>Profile</Link>
                    <button onClick={() => {
                        props.clearStore();
                        localStorage.removeItem('token');
                        localStorage.removeItem('currentUser');
                        props.history.push('/home')
                    }
                    } className="dropdown-item">Exit
                    </button>
                </div>
            </div>

        </nav>
    )
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    clearStore
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));