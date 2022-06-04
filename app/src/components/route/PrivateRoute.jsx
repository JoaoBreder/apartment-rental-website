import { Route, Redirect } from 'react-router';
import { isAuthenticated } from '../functions/functions';


function PrivateRoute({ children, ...rest }) {
    return (
        <Route
            {...rest}
            render={
                ({ location }) => (
                    isAuthenticated() ?
                        (
                            children
                        ) :
                        (
                            <Redirect
                                to={{
                                    pathname: '/login',
                                    state: { from: location }
                                }}
                            />
                        )
                )
            }
        />
    )
}

export default PrivateRoute;