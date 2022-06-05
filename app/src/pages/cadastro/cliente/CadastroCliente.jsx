import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Button from '../../../components/button/Button';
import Layout from '../../../components/layout/Layout';
import './CadastroCliente.css';


class CadastroCliente extends Component {
    render() {
        return (
            <Layout>
                <body>
                    <header>
                        <div className='titulo conteiner'>
                            <h1>Cadastro de Cliente</h1>
                        </div>
                    </header>

                    <main>
                        <div className='conteiner'>
                            <div className='fundo-form'>
                                <div>
                                    <form className='form-c'>
                                        <div>
                                            <label>Nome Completo</label>
                                            <input type='text' placeholder='Nome' />
                                        </div>

                                        <div>
                                            <label>Email</label>
                                            <input type='email' placeholder='Email' />
                                        </div>

                                        <div>
                                            <label>CPF</label>
                                            <input type='text' placeholder='xxx.xxx.xxx-xx' />
                                        </div>

                                        <div>
                                            <label>Telefone 1</label>
                                            <input type='text' placeholder='(xx) xxxxx-xxxx' />
                                        </div>

                                        <div>
                                            <label>Telefone 2</label>
                                            <input type='text' placeholder='(xx) xxxxx-xxxx' />
                                        </div>
                                    </form>

                                    <Button
                                        title='Cadastrar'
                                        onClick={() => console.log('Cadastrando cliente...')}
                                    />
                                </div>
                            </div>
                        </div>

                    </main>
                </body>
            </Layout>
        )
    }
}

export default withRouter(CadastroCliente);