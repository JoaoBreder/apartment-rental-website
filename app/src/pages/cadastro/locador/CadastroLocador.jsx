import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Button from '../../../components/button/Button';
import Layout from '../../../components/layout/Layout';
import locador from '../../../dataManager/locador/locador';
import './CadastroLocador.css';


class CadastroLocador extends Component {
    state = {
        nome: undefined,
        tipo: 'L',
        login: undefined,
        senha: undefined
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
            senha
        } = this.state;

        if (!nome || !tipo || !login || !senha) {
            alert('Preencha todos os campos');
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

        this.setState({
            nome: undefined,
            tipo: 'L',
            login: undefined,
            senha: undefined
        });
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
                                                placeholder='Senha'
                                                value={this.state.senha}
                                                onChange={(event) => this.handleChange(event, 'senha')}
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