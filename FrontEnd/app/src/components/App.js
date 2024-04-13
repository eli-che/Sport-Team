import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import AuthRoute from "./AuthRoute";

import { lightTheme } from "./Theme";
import { login, logout } from "../redux";
import Login from "../routes/Login";
import Home from "../routes/Home";
import history from "../history";
import TeamView from "../routes/TeamView";
import Profile from "../routes/Profile";
import ProfileSettings from "../routes/ProfileSettings";
import PlayerDiarie from "../routes/PlayerDiaries";

// App.js
export class App extends React.Component {
  componentWillMount() {
    console.log("auth", this.props.auth);
  }
  render() {
    return (
      <ThemeProvider theme={lightTheme}>
        <Router history={history}>
          <Switch>
            <Route path="/login" component={Login} />
            <AuthRoute
              exact
              auth={this.props.auth.loggedIn}
              path="/"
              component={Home}
            ></AuthRoute>
            <AuthRoute
              auth={this.props.auth.loggedIn}
              path="/teamview"
              component={TeamView}
            ></AuthRoute>
            <AuthRoute
              exact
              auth={this.props.auth.loggedIn}
              path="/profile"
              component={Profile}
            ></AuthRoute>
            <AuthRoute
              exact
              auth={this.props.auth.loggedIn}
              path="/profile/settings"
              component={ProfileSettings}
            ></AuthRoute>
            <AuthRoute
              exact
              auth={this.props.auth.loggedIn}
              path="/playerdiaries"
              component={PlayerDiarie}
            ></AuthRoute>
          </Switch>
        </Router>
      </ThemeProvider>
    );
  }
}

// AppContainer.js
const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user)),
  logout: () => dispatch(logout())
});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
