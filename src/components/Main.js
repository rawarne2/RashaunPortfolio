import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Bio from './Bio';
import Projects from './Projects';

export default class Main extends Component {
    render () {
        return (
                <Switch>
                    <Route exact path="/" component={Bio} />
                    <Route exact path="/bio" component={Bio} />
                    <Route exact path="/projects" component={Projects} />
                    {/*<Route exact path="/contacts" component={Contacts} />  add a contacts component*/}

                </Switch>
        )
    }
}