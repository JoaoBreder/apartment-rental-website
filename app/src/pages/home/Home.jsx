import React, { Component } from 'react';
import { withRouter } from 'react-router';


class Home extends Component {
    render() {
        return (
            <div>
                Tela Home.
            </div>
        )
    }
}

export default withRouter(Home);