import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Bio from './Bio';
import Projects from './Projects';
import Blog from './Blog';

export default function Main() {
    return (
        <Switch>
            <Route exact path="/" component={Bio} />
            <Route exact path="/bio" component={Bio} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/blog" component={Blog} />
        </Switch>
    )
}