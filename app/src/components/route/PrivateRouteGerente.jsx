import { Route, Redirect } from 'react-router';
import { isAuthenticated } from '../functions/functions';
import siteStorage from '../../service/localStorage/localStorage';


function PrivateRouteGerente({ children, ...rest }) {
    return (
        <Route
            {...rest}
            render={
                ({ location }) => (
                    (isAuthenticated() && (siteStorage.get('user-type') === 'Gerente')) ?
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