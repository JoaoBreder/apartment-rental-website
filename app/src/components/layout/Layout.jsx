import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { getUserType } from '../functions/functions';
import siteStorage from '../localStorage/localStorage';
import history from '../history/history';
import './Layout.css';


class Layout extends Component {
    state = {
        userType: getUserType()
    }

    constructor(props) {
        super(props);

        this.handleMenuClick = this.handleMenuClick.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleMenuClick(page) {
        history.push(page);
        history.go();
    }

    handleLogout() {
        siteStorage.clear('user');
        history.push('/login');
        history.go();
    }

    render() {
        return (
            <div>
                <div className='cor-fundo-menu'>
                    <nav>
                        <ul className='menu'>
                            <li
                                className='mt-l'
                                onClick={() => this.handleMenuClick('/home')}
                            >
                                <div>Home</div>
                            </li>

                            <li className='mt-l'>
                                <div>Cadastros</div>

                                <ul>
                                    <li onClick={() => this.handleMenuClick('/cadastrar/cliente')}>
                                        <div className='cor-dentro'>Cliente</div>
                                    </li>

                                    {this.state.userType === 'Gerente' && (
                                        <li onClick={() => this.handleMenuClick('/cadastrar/locador')}>
                                            <div className='cor-dentro'>Locador</div>
                                        </li>
                                    )}

                                    {this.state.userType === 'Gerente' && (
                                        <li onClick={() => this.handleMenuClick('/cadastrar/imovel')}>
                                            <div className='cor-dentro'>Imóvel</div>
                                        </li>
                                    )}
                                </ul>
                            </li>

                            {this.state.userType === 'Gerente' && (
                                <li className='mt-l'><div>Gerenciamento </div>
                                    <ul>
                                        <li>
                                            <div className='cor-dentro'>Gerenciar locadores</div>
                                        </li>

                                        <li>
                                            <div className='cor-dentro'>Gerenciar imóveis</div>
                                        </li>
                                    </ul>
                                </li>
                            )}

                            <li
                                className='mt-l'
                                onClick={this.handleLogout}
                            >
                                <div>Logout</div>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className='content'>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default withRouter(Layout);