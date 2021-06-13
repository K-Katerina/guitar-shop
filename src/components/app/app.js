import React from 'react';
import {Redirect, Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute} from '../../const';
import {Catalog} from '../../pages/catalog';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={AppRoute.CATALOG} component={Catalog}/>
                <Redirect to={AppRoute.ROOT}/>
            </Switch>
        </BrowserRouter>
    );
};

export default App;
