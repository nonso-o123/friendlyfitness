import React, { Component } from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import Header from './Header'
import Home from './HomeComponent'

export default class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {};
    }

    render() {
        return (
            <>
                <Header />
                <Switch>
                    <Route exact={true} path="/" component={() => <Home {...this.props} />} />
                </Switch>

            </>
        )
    }
}
