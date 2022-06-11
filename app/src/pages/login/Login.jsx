import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Button from '../../components/button/Button';
import locador from '../../dataManager/locador/locador';
import history from '../../components/history/history';
import './Login.css';
import { saveUser } from '../../components/functions/functions';


class Login extends Component {
    state = {
        login: undefined,
        senha: undefined
    }

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleChange(event, index) {
        const { value } = event.target;
        this.setState({ [index]: value });
    }

    async handleSubmit() {
        const { login, senha } = this.state;

        if (!login || !senha) {
            alert('Usuário não informou login ou senha');
            return;
        }

        const res = await locador.getByLogin(login);

        if (!res.result) {
            alert(res.mensagem);
            return;
        }

        const user = res.result;

        if (user.senha !== senha) {
            alert('Senha incorreta, tente novamente');
            return;
        }

        this.handleLogin(user);
    }

    handleLogin(user) {
        saveUser(user);

        history.push('/home');
        history.go();
    }

    render() {
        return (
            <div className='loginContainer'>
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
                                        <input
                                            type='text'
                                            placeholder='Login'
                                            value={this.state.login}
                                            onChange={(event) => this.handleChange(event, 'login')}
                                        />
                                    </div>

                                    <div>
                                        <label>Senha</label>
                                        <input
                                            type='password'
                                            placeholder='Senha'
                                            value={this.state.senha}
                                            onChange={(event) => this.handleChange(event, 'senha')}
                                        />
                                    </div>
                                </form>

                                <Button
                                    title='Entrar'
                                    onClick={this.handleSubmit}
                                />
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}

export default withRouter(Login);