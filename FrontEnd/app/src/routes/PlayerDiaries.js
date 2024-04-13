import React from "react";
import Navbar from "../components/Navbar";
import {
  Grid,
  Typography,
  Box,
  Paper,
  Button,
  ThemeProvider,
  createMuiTheme
} from "@material-ui/core";
import { connect } from "react-redux";
import { yellow, amber } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: yellow,
    secondary: amber
  }
});

const mapStateToProps = state => ({ auth: state.auth });

const PlayerDiaries = props => {
  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={2} justify="center">
        <Navbar />
        <Grid item xs={11}>
          <Box mt={1}>
            <Typography variant="h5">
              Självskattning för {props.auth.user.displayName}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={11}>
          <Box mt={5}>
            <Paper elevation={3}>
              <Box p={2}>
                <Typography variant="h5">lorem ipsum 28/3</Typography>
                <Grid container justify="center">
                  <Box mt={2}>
                    <Button color="primary" variant="contained">
                      Till självskattning
                    </Button>
                  </Box>
                </Grid>
              </Box>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default connect(mapStateToProps)(PlayerDiaries);
