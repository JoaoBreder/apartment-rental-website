import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Button from '../../components/button/Button';
import './Login.css';


class Login extends Component {
    render() {
        return (
            <body>
                <header>
                    <div className='titulo conteiner'>
                        <h1>Login</h1>
                    </div>
                </header>

                <main>
                    <div className='conteiner'>
                        <div className='fundo-form-g'>
                            <div>
                                <form className='form-c-l'>
                                    <div>
                                        <label>Login</label>
                                        <input type='text' placeholder='Login' />
                                    </div>
                                    <div>
                                        <label>Senha</label>
                                        <input type='password' placeholder='Senha' />
                                    </div>
                                </form>
                                <div className='botao'>
                                    <Button
                                        title='Entrar'
                                        onClick={() => console.log('Entrando...')}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </body>
        )
    }
}

export default withRouter(Login);