import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Button from '../../../components/button/Button';
import history from '../../../components/history/history';
import Layout from '../../../components/layout/Layout';
import locador from '../../../dataManager/locador/locador';
import './CadastroLocador.css';


class CadastroLocador extends Component {
    state = {
        nome: undefined,
        tipo: 'L',
        login: undefined,
        senha: undefined,
        confirmarSenha: undefined
    }

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event, index) {
        const { value } = event.target;
        this.setState({ [index]: value });
    }

    async handleSubmit() {
        const {
            nome,
            tipo,
            login,
            senha,
            confirmarSenha
        } = this.state;

        if (!nome || !tipo || !login || !senha) {
            alert('Preencha todos os campos');
            return;
        }

        if (senha !== confirmarSenha) {
            alert('Senhas informadas são diferentes, por favor digite novamente');
            return;
        }

        const res = await locador.create({
            nome,
            tipo,
            login,
            senha
        });

        if (!res.recorded) {
            alert(res.message);
            return;
        }

        alert(res.message);

        history.push('/cadastrar/locador');
        history.go();
    }

    render() {
        return (
            <Layout>
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
                                            <input
                                                type='text'
                                                placeholder='Nome'
                                                value={this.state.nome}
                                                onChange={(event) => this.handleChange(event, 'nome')}
                                            />
                                        </div>

                                        <div>
                                            <label>Tipo</label>
                                            <select onChange={(event) => this.handleChange(event, 'tipo')}>
                                                <option value='L'>
                                                    Locador
                                                </option>

                                                <option value='G'>
                                                    Gerente
                                                </option>
                                            </select>
                                        </div>

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
                                                maxLength={12}
                                                placeholder='Senha'
                                                value={this.state.senha}
                                                onChange={(event) => this.handleChange(event, 'senha')}
                                            />
                                        </div>

                                        <div>
                                            <label>Confirmar Senha</label>
                                            <input
                                                type='password'
                                                maxLength={12}
                                                placeholder='Confirmar Senha'
                                                value={this.state.confirmarSenha}
                                                onChange={(event) => this.handleChange(event, 'confirmarSenha')}
                                            />
                                        </div>
                                    </form>

                                    <Button
                                        title='Cadastrar'
                                        onClick={this.handleSubmit}
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

export default withRouter(CadastroLocador);