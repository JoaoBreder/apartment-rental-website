import React, { Component } from 'react';
import { withRouter } from 'react-router';


class Home extends Component {
    render() {
        return (
            <div>
                Sucesso! Tela Inicial.
            </div>
        )
    }
}

export default withRouter(Home);