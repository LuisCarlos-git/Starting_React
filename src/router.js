import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Products from './pages/Product';

const Routes = () => {
    return (
        <BrowserRouter> 
            <Switch>
                <Route exact path = "/" component={Main}/>
                <Route path = "/product/:id" component={Products}/>
            </Switch>
        </BrowserRouter>
    );
    
};

export default Routes;