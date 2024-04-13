import "../css/style.css";
import { Box, Grid, ThemeProvider, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import React, { Component } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { connect } from "react-redux";

import history from "../history";
import { login, logout } from "../redux";
import firebase from "../firebase";
import { lightTheme } from "../components/Theme";

const loginStyles = theme => ({
    loginDiv: {
        textAlign: "center"
    },
    loginFailedText: {
        color: "red"
    }
});

/* HIDE LATER */
const mapDispatchToProps = dispatch => ({
    login: user => dispatch(login(user)),
    logout: () => dispatch(logout())
});
const mapStateToProps = state => ({ auth: state.auth });

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isUser: "undefined"
        };
    }
    componentDidMount() {
        /*firebase
            .auth()
            .currentUser.getIdToken(false)
            .then(function(idToken) {
                // Send token to your backend via HTTPS
                // ...
                console.log("______FIREBAASEAUTH:____", idToken);
            })
            .catch(function(error) {
                // Handle error
            });*/
    }
    uiConfig = {
        signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
        callbacks: {
            signInSuccessWithAuthResult: () =>
                firebase.auth().onAuthStateChanged(user => {
                    //if (user.customClaims.isUser) {
                    user.getIdTokenResult().then(idTokenResult => {
                        console.log(idTokenResult);
                        if (!!idTokenResult.claims.isUser) {
                            this.props.login(user);
                            history.push("/");
                            this.setState({ isUser: true });
                        } else {
                            this.props.login(user);
                            history.push("/");
                            this.setState({ isUser: true });
                        }
                    });
                })
        }
    };

    renderLoginScreen() {
        const { classes } = this.props;
        if (this.state.isUser === "undefined") {
            return (
                <Box my={20}>
                    <StyledFirebaseAuth
                        uiConfig={this.uiConfig}
                        firebaseAuth={firebase.auth()}
                    />
                </Box>
            );
        } else if (this.state.isUser === false) {
            return (
                <div className={classes.loginDiv}>
                    <Box my={20}>
                        <Typography className={classes.loginFailedText}>
                            You're not a user in our system. Please try another
                            Google account or contact your administrator.
                        </Typography>
                        <StyledFirebaseAuth
                            uiConfig={this.uiConfig}
                            firebaseAuth={firebase.auth()}
                        />
                    </Box>
                </div>
            );
        }
    }
    render() {
        return (
            <ThemeProvider theme={lightTheme}>
                <Grid direction="column" justify="center" alignItems="center">
                    <Box p={3} bgcolor="primary.main">
                        <Typography align="center" variant="h3">
                            TeamTracker
                        </Typography>
                    </Box>
                    {this.renderLoginScreen()}
                </Grid>
            </ThemeProvider>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(loginStyles)(Login));
