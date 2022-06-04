import React, { Component } from 'react';
import { withRouter, Switch } from 'react-router';
import PrivateRoute from './components/route/PrivateRoute';
import PublicRoute from './components/route/PublicRoute';

// Pages
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import CadastroCliente from './pages/cadastro/cliente/CadastroCliente';
import CadastroLocador from './pages/cadastro/locador/CadastroLocador';
import CadastroImovel from './pages/cadastro/imovel/CadastroImovel';

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
                    <CadastroCliente />
                </PrivateRoute>

                <PrivateRoute
                    path='/cadastrar/locador'
                    exact
                >
                    <CadastroLocador />
                </PrivateRoute>

                <PrivateRoute
                    path='/cadastrar/imovel'
                    exact
                >
                    <CadastroImovel />
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