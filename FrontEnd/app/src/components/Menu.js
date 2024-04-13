// Material-ui core
import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Badge from "@material-ui/core/Badge";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";

// React-redux imports
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux";

// Components
import { menuStyles } from "../css/components/menu/menuStyles";
import { themes } from "./Theme";

// Icons
import HomeIcon from "@material-ui/icons/Home";
import MenuIcon from "@material-ui/icons/Menu";
import GroupWorkIcon from "@material-ui/icons/GroupWork";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Typography from "@material-ui/core/Typography";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import { red, yellow } from "@material-ui/core/colors";

export default function MenuComponent(props) {
    const classes = menuStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const [state, setState] = React.useState({
        left: false
    });

    const toggleDrawer = (side, open) => event => {
        setState({ ...state, [side]: open });
    };

    // drawer menu content
    const sideList = side => (
        <ThemeProvider>
            <List className={classes.list}>
                <Box
                    className={classes.listbutton}
                    role="presentation"
                    onClick={toggleDrawer(side, false)}
                    height="100%"
                >
                    <ListItem
                        button
                        onClick={() => {
                            history.push("/");
                        }}
                    >
                        <HomeIcon className={classes.menuIcon} />
                        <ListItemText primary={"Home"} />
                    </ListItem>
                    <ListItem
                        button
                        onClick={() => {
                            history.push("/teamview");
                        }}
                    >
                        <GroupWorkIcon className={classes.menuIcon} />
                        <ListItemText primary={"Teamview"} />
                    </ListItem>
                    <ListItem
                        button
                        onClick={() => {
                            history.push("/profile");
                        }}
                    >
                        <AccountCircleIcon className={classes.menuIcon} />
                        <ListItemText primary={"Profile"} />
                    </ListItem>
                    {/* <ListItem button>
            <Badge
              badgeContent={15}
              color="primary"
              className={classes.menuIcon}
            >
              <NotificationsIcon />
            </Badge>
            <Typography>Notifications</Typography>
          </ListItem> */}
                    <ListItem
                        button
                        onClick={() => {
                            dispatch(logout());
                            history.push("/login");
                        }}
                    >
                        <ExitToAppIcon className={classes.menuIcon} />
                        <Typography>Sign out</Typography>
                    </ListItem>
                </Box>
            </List>
        </ThemeProvider>
    );

    return (
        // Menu button
        <Box className={classes.test}>
            <Button onClick={toggleDrawer("left", true)} size="large">
                <MenuIcon />
            </Button>
            <Drawer open={state.left} onClose={toggleDrawer("left", false)}>
                {sideList("left")}
            </Drawer>
        </Box>
    );
}
