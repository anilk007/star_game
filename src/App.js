import React, { lazy, Suspense } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, add } from './slices/userSlice';

import { Redirect } from 'react-router-dom';

import API from './api/API';

// import Blank from './layouts/blank/Blank';
const Blank = lazy(() => import('./layouts/blank/Blank'));

// import Full from './layouts/full/Full';
const Full = lazy(() => import('./layouts/full/Full'));

// import PageNotFound from './ui/404/PageNotFound';
const PageNotFound = lazy(() => import('./ui/404/PageNotFound'));


const ProtectedRoute = (props) => {
    const user = useSelector(selectUser);
    return (
        user.email || sessionStorage.getItem('token') ? <Route path={props.path}>{props.children}</Route> : <Redirect to="/login" />
    )
}



const App = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const getUser = id => {
        API.get("/user/" + id)
            .then(response => {
                if (response.data.data)
                    dispatch(add(response.data.data));
            })
            .catch(err => {

            })
    }

    if (sessionStorage.getItem('token'))
        API.post('/auth/refresh', {})
            .then(response => {
                const { id } = response.data.data;
                if (id) {
                    getUser(id);
                } else {
                    history.push('/login');
                }
            })
            .catch(err => {
                sessionStorage.removeItem('token');
                history.push('/login');
            })


    return (<>
        <Suspense fallback={<p>Loading...</p>}>
            <Switch>
                <ProtectedRoute path="/secured">
                    <Full />
                </ProtectedRoute>

                <Route path="/"  >
                    <Blank />
                </Route>

                <Route path="/"  >
                    <Blank />
                </Route>

                <Route path="*">
                    <PageNotFound />
                </Route>

            </Switch>
        </Suspense>
    </>);
}

export default App;