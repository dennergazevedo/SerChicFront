import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import HomePage from "../views/Loja/HomePage/HomePage.jsx";
import NotFound from "../views/NotFound/NotFound.jsx";

export default function Routes(){

    return (
        <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/" component={NotFound} />
        </Switch>
    );
}