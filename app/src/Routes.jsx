import React, { Component } from 'react';
import { withRouter, Switch } from 'react-router';
import PrivateRoute from './components/route/PrivateRoute';
import PublicRoute from './components/route/PublicRoute';

// Pages
import Login from './pages/login/Login';
import Home from './pages/home/Home';

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
                    <Home />
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