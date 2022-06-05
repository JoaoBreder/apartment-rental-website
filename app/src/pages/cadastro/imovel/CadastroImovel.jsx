import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Button from '../../../components/button/Button';
import Layout from '../../../components/layout/Layout';
import './CadastroImovel.css';


class CadastroImovel extends Component {
    render() {
        return (
            <Layout>
                <body>
                    <header>
                        <div className='titulo conteiner'>
                            <h1>Cadastro de Imóvel</h1>
                        </div>
                    </header>

                    <main>
                        <div className='conteiner'>
                            <div className='fundo-form'>
                                <div>
                                    <form className='form-c'>
                                        <div>
                                            <label>Logradouro e Número</label>
                                            <input type='text' placeholder='Logradouro, Número' />
                                        </div>

                                        <div>
                                            <label>Bairro</label>
                                            <input type='text' placeholder='Bairro' />
                                        </div>

                                        <div>
                                            <label>Complemento</label>
                                            <input type='text' placeholder='Complemento' />
                                        </div>

                                        <div>
                                            <label>Valor Diária</label>
                                            <input type='text' placeholder='Valor Diária' />
                                        </div>

                                        <div>
                                            <label>Descrição</label>
                                            <input type='text' placeholder='Descrição' />
                                        </div>
                                    </form>

                                    <Button
                                        title='Cadastrar'
                                        onClick={() => console.log('Cadastrando imóvel...')}
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

export default withRouter(CadastroImovel);