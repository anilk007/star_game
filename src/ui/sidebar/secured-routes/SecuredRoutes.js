import React, { Suspense } from 'react';
import { useRouteMatch, Switch, Route } from 'react-router-dom';

import routes from '../../../shared/routes/Route';
const SecuredRoutes = () => {
    const { path } = useRouteMatch();
    return (<>
        <Suspense fallback={<p>Loading...</p>}>
            <Switch>
                {
                    routes && routes.map((route, i) => {
                        return <Route key={route.title + i} path={`${path}/${route.path}`} component={route.component} exact={route.path === "/" ? true : false} />
                    })
                }
            </Switch>
        </Suspense>
    </>
    )
}

export default SecuredRoutes;