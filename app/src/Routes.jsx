import React, { Component } from 'react';
import { withRouter, Switch } from 'react-router';
import PrivateRoute from './components/privateRoute/PrivateRoute';
import PublicRoute from './components/publicRoute/PublicRoute';

// Pages
import Login from './pages/login/Login';

class Routes extends Component {
    render() {
        return (
            <Switch>
                {/* Login and Home */}
                <PublicRoute
                    path='/'
                    exact
                />

                <PublicRoute
                    path='/login'
                    exact
                >
                    <Login />
                </PublicRoute>

                <PrivateRoute
                    path='/home'
                    exact
                >
                </PrivateRoute>


                {/* Registration Pages */}
                <PrivateRoute
                    path='/cadastrar/cliente'
                    exact
                >
                </PrivateRoute>

                <PrivateRoute
                    path='/cadastrar/locador'
                    exact
                >
                </PrivateRoute>

                <PrivateRoute
                    path='/cadastrar/casa-apartamento'
                    exact
                >
                </PrivateRoute>


                {/* Others Pages */}
                <PrivateRoute
                    path='/locacao'
                    exact
                >
                </PrivateRoute>
            </Switch>
        )
    }
}

export default withRouter(Routes);