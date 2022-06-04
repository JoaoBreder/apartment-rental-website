import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Button from '../../../components/button/Button';
import './CadastroLocador.css';


class CadastroLocador extends Component {
    render() {
        return (
            <body>
                <header>
                    <div className='titulo conteiner'>
                        <h1>Cadastro de Locador</h1>
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
                                        <label>Login</label>
                                        <input type='text' placeholder='Login' />
                                    </div>

                                    <div>
                                        <label>Senha</label>
                                        <input type='password' placeholder='Senha' />
                                    </div>
                                </form>

                                <Button
                                    title='Cadastrar'
                                    onClick={() => console.log('Cadastrando locador...')}
                                />
                            </div>
                        </div>
                    </div>

                </main>
            </body>
        )
    }
}

export default withRouter(CadastroLocador);