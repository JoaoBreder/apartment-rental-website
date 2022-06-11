import React, { Component } from 'react';
import { withRouter, Switch } from 'react-router';
import PublicRoute from './components/route/PublicRoute';
import PrivateRoute from './components/route/PrivateRoute';
import PrivateRouteGerente from './components/route/PrivateRouteGerente';

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

                <PrivateRouteGerente
                    path='/cadastrar/locador'
                    exact
                >
                    <CadastroLocador />
                </PrivateRouteGerente>

                <PrivateRouteGerente
                    path='/cadastrar/imovel'
                    exact
                >
                    <CadastroImovel />
                </PrivateRouteGerente>

                {/* Update Pages */}
                <PrivateRouteGerente
                    path='/gerenciamento/cliente'
                    exact
                >
                </PrivateRouteGerente>

                <PrivateRouteGerente
                    path='/gerenciamento/locador'
                    exact
                >
                </PrivateRouteGerente>

                <PrivateRouteGerente
                    path='/gerenciamento/imovel'
                    exact
                >
                </PrivateRouteGerente>


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