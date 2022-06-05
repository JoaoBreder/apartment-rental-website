import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Layout from '../../components/layout/Layout';


class Home extends Component {
    render() {
        return (
            <Layout>
                <header>
                    <div className='titulo conteiner'>
                        <h1>Home</h1>
                    </div>
                </header>
            </Layout>
        )
    }
}

export default withRouter(Home);