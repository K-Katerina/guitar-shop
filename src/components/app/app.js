import React from 'react';
import {Redirect, Switch, Route, BrowserRouter} from 'react-router-dom';
import {Catalog} from '../../pages/catalog';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={'/'} component={Catalog}/>
                <Redirect to={'/'}/>
            </Switch>
        </BrowserRouter>
    );
};

export default App;
