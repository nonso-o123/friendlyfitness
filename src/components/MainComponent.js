import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import Header from "./Header";
import Home from "./HomeComponent";
import "./styles.css";
import "./videochat/videochat.css"
import { Connect } from './Connect'
export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="container">
                <Header />
                <Switch>
                    <Route
                        exact={true}
                        path="/"
                        component={() => <Home {...this.props} />}
                    />
                    <Route
                        path="/connect"
                        component={() => <Connect {...this.props} />} />
                </Switch>

            </div>
        );
    }
}
