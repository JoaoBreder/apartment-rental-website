import React, { Component } from 'react';
import { Route, withRouter, Switch } from 'react-router';

// Pages
import Home from './pages/home/Home';

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route path='/' component={Home} />
            </Switch>
        )
    }
}

export default withRouter(Routes);

