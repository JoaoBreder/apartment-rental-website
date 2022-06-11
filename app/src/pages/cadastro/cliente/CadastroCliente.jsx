import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Button from '../../../components/button/Button';
import history from '../../../components/history/history';
import CpfInput from '../../../components/inputMask/CpfInput';
import PhoneInput from '../../../components/inputMask/PhoneInput';
import Layout from '../../../components/layout/Layout';
import cliente from '../../../dataManager/cliente/cliente';
import './CadastroCliente.css';


class CadastroCliente extends Component {
    state = {
        nome: undefined,
        email: undefined,
        cpf: undefined,
        telefone_1: undefined,
        telefone_2: undefined
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
            email,
            cpf,
            telefone_1,
            telefone_2
        } = this.state;

        if (!nome || !email || !cpf || !telefone_1) {
            alert('Preencha todos os campos obrigatórios');
            return;
        }

        const res = await cliente.create({
            nome,
            email,
            cpf,
            telefone_1,
            telefone_2: telefone_2 ?? ''
        });

        if (!res.recorded) {
            alert(res.message);
            return;
        }

        alert(res.message);

        history.push('/cadastrar/cliente');
        history.go();
    }

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
                                            <input
                                                type='text'
                                                placeholder='Nome'
                                                value={this.state.nome}
                                                onChange={(event) => this.handleChange(event, 'nome')}
                                            />
                                        </div>

                                        <div>
                                            <label>Email</label>
                                            <input
                                                type='email'
                                                placeholder='Email'
                                                value={this.state.email}
                                                onChange={(event) => this.handleChange(event, 'email')}
                                            />
                                        </div>

                                        <div>
                                            <label>CPF</label>
                                            <CpfInput
                                                type='text'
                                                placeholder='xxx.xxx.xxx-xx'
                                                value={this.state.cpf}
                                                onChange={(event) => this.handleChange(event, 'cpf')}
                                            />
                                        </div>

                                        <div>
                                            <label>Telefone 1</label>
                                            <PhoneInput
                                                type='text'
                                                placeholder='(xx) xxxxx-xxxx'
                                                value={this.state.telefone_1}
                                                onChange={(event) => this.handleChange(event, 'telefone_1')}
                                            />
                                        </div>

                                        <div>
                                            <label>Telefone 2</label>
                                            <PhoneInput
                                                type='text'
                                                placeholder='(xx) xxxxx-xxxx'
                                                value={this.state.telefone_2}
                                                onChange={(event) => this.handleChange(event, 'telefone_2')}
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

export default withRouter(CadastroCliente);