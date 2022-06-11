import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Button from '../../../components/button/Button';
import history from '../../../components/history/history';
import PriceInput from '../../../components/inputMask/PriceInput';
import Layout from '../../../components/layout/Layout';
import imovel from '../../../dataManager/imovel/imovel';
import './CadastroImovel.css';


class CadastroImovel extends Component {
    state = {
        logradouroNumero: undefined,
        bairro: undefined,
        complemento: undefined,
        valorDiaria: undefined,
        descricao: undefined,
        palavrasChave: undefined
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
            logradouroNumero,
            bairro,
            complemento,
            valorDiaria,
            descricao,
            palavrasChave
        } = this.state;

        if (
            !logradouroNumero || !bairro || !complemento ||
            !valorDiaria || !descricao || !palavrasChave
        ) {
            alert('Preencha todos os campos');
            return;
        }

        const palavrasChaveArray = palavrasChave.split(' ');

        const [logradouro, numero] = logradouroNumero.split(', ');

        const res = await imovel.create({
            logradouro,
            numero,
            bairro,
            complemento,
            descricao,
            valorDiaria: Number(valorDiaria.split('R$ ')[1]),
            palavrasChave: palavrasChaveArray
        });

        if (!res.recorded) {
            alert(res.message);
            return;
        }

        alert(res.message);

        history.push('/cadastrar/imovel');
        history.go();
    }

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
                                            <input
                                                type='text'
                                                placeholder='Logradouro, Número'
                                                value={this.state.logradouroNumero}
                                                onChange={(event) => this.handleChange(event, 'logradouroNumero')}
                                            />
                                        </div>

                                        <div>
                                            <label>Bairro</label>
                                            <input
                                                type='text'
                                                placeholder='Bairro'
                                                value={this.state.bairro}
                                                onChange={(event) => this.handleChange(event, 'bairro')}
                                            />
                                        </div>

                                        <div>
                                            <label>Complemento</label>
                                            <input
                                                type='text'
                                                placeholder='Complemento'
                                                value={this.state.complemento}
                                                onChange={(event) => this.handleChange(event, 'complemento')}
                                            />
                                        </div>

                                        <div>
                                            <label>Valor Diária</label>
                                            <PriceInput
                                                type='text'
                                                placeholder='Valor Diária'
                                                value={this.state.valorDiaria}
                                                onChange={(event) => this.handleChange(event, 'valorDiaria')}
                                            />
                                        </div>

                                        <div>
                                            <label>Descrição</label>
                                            <input
                                                type='text'
                                                placeholder='Descrição'
                                                value={this.state.descricao}
                                                onChange={(event) => this.handleChange(event, 'descricao')}
                                            />
                                        </div>

                                        <div>
                                            <label>Palavras-Chave</label>
                                            <input
                                                type='text'
                                                placeholder='Palavras-Chave'
                                                value={this.state.palavrasChave}
                                                onChange={(event) => this.handleChange(event, 'palavrasChave')}
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

export default withRouter(CadastroImovel);