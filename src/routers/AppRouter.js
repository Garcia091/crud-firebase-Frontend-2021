import React, { useEffect, useState } from 'react'
import {firebase} from '../firebase/firebase-config'

import {
    BrowserRouter as Router,
    Switch,
    Redirect
} from 'react-router-dom';

import AddTaks from '../components/formulario/AppTaks';
import { AuthRouter } from './AuthRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import {login} from '../actions/auth'
import { useDispatch } from 'react-redux';


const AppRouter = () => {

    const [checking, setChecking] = useState(true)
    const [isLooggedIn, setsIsLoogedIn] = useState(false)
    const dispatch = useDispatch();

    useEffect(() => {
        firebase.auth().onAuthStateChanged(async (user) => {
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName))
                setsIsLoogedIn(true)
            } else {
                setsIsLoogedIn(false)
            }
            setChecking(false)
        })
    }, [dispatch, setChecking])

    if (checking) {
        return (
            <h1>Cargando ...</h1>
        )
    }

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute
                        path="/auth"
                        component={AuthRouter}
                        isAuthenticated ={isLooggedIn}
                    />

                    <PrivateRoute
                        exact
                        path="/"
                        component={AddTaks}
                        isAuthenticated ={isLooggedIn}
                    />

                    <Redirect to="/auth/login" />


                </Switch>
            </div>
        </Router>
    )
}

export default AppRouter
