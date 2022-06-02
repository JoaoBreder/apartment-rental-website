import { Route, Redirect } from 'react-router';
import { isAuthenticated } from '../functions/functions';


function PublicRoute({ children, ...rest }) {
    return (
        <Route
            {...rest}
            render={
                ({ location }) => (
                    !isAuthenticated() ?
                        (
                            children ??
                            <Redirect
                                to={{
                                    pathname: '/login',
                                    state: { from: location }
                                }}
                            />
                        ) :
                        (
                            <Redirect
                                to={{
                                    pathname: '/home',
                                    state: { from: location }
                                }}
                            />
                        )
                )
            }
        />
    )
}

export default PublicRoute;