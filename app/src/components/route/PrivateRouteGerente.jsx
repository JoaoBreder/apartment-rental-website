import { Route, Redirect } from 'react-router';
import { getUserType, isAuthenticated } from '../functions/functions';


function PrivateRouteGerente({ children, ...rest }) {
    return (
        <Route
            {...rest}
            render={
                ({ location }) => (
                    (isAuthenticated() && (getUserType() === 'Gerente')) ?
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

export default PrivateRouteGerente;