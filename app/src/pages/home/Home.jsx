import React, { Component } from 'react';
import { withRouter } from 'react-router';


class Home extends Component {
    render() {
        return (
            <header>
                <div className='titulo conteiner'>
                    <h1>Home</h1>
                </div>
            </header>
        )
    }
}

export default withRouter(Home);