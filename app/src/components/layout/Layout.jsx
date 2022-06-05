import React, { Component } from 'react';
import { withRouter } from 'react-router';
import './Layout.css';


class Layout extends Component {
    render() {
        return (
            <div>
                <div className='cor-fundo-menu'>
                    <nav>
                        <ul className='menu'>
                            <li className='mt-l'>
                                <a>Home</a>
                            </li>

                            <li className='mt-l'>
                                <a>Cadastros</a>

                                <ul>
                                    <li>
                                        <a className='cor-dentro'>Cliente</a>
                                    </li>

                                    <li>
                                        <a className='cor-dentro'>Locador</a>
                                    </li>
                                    <li>
                                        <a className='cor-dentro'>Imóvel</a>
                                    </li>
                                </ul>
                            </li>

                            <li className='mt-l'><a>Gerenciamento </a>
                                <ul>
                                    <li>
                                        <a className='cor-dentro'>Gerenciar locadores</a>
                                    </li>

                                    <li>
                                        <a className='cor-dentro'>Gerenciar imóveis</a>
                                    </li>
                                </ul>
                            </li>
                            <li className='mt-l'><a>Logout</a></li>
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