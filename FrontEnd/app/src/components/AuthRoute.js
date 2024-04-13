import React from "react";
import { Redirect, Route } from "react-router";

const AuthRoute = ({ component: Component, auth }) => (
    <Route
        render={props =>
            auth === true ? <Component {...props} /> : <Redirect to="/login" />
        }
    />
);

export default AuthRoute;
