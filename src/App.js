import './app.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import React from 'react'
import Registration from './pages/Registration'
import Login from './pages/Login'
import Home from './pages/Home'
import Profile from './pages/Profile'
import {connect} from 'react-redux'
import {useEffect} from 'react'
import {currentUser} from './actions/actions'
import { useDispatch } from 'react-redux';
// import createHistory from 'history/createBrowserHistory';
//
// const history = createHistory();

function App(props) {

    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/registration" component={Registration}/>
                    <Route path="/login" component={Login}/>
                    <Route path='/home' component={Home}/>
                    <Route path='/profile' component={Profile}/>
                    {localStorage.token ? <Redirect to='/home'  /> : <Redirect to="/registration"/>}
                        {/*{localStorage.token ? null : <Redirect to="/registration"/>}*/}

                    {/*{localStorage.token ? <Redirect to="/"> : <Redirect to="/registration"}*/}

                </Switch>
            </div>
        </Router>
    );
}

const mapStateToProps = state => ({
    //currentUser: state.reducer.currentUser
});

const mapDispatchToProps = dispatch => ({
    currentUser
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
