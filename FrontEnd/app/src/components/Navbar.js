// Material core
import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { ThemeProvider } from "@material-ui/core/styles";

// Icons
import AccountCircle from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";

import MenuComponent from "./Menu";
import { navbarStyles } from "../css/components/navbar/navbarStyles";

export default function Navbar() {
    const classes = navbarStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const handleProfileMenuOpen = event => {
        setAnchorEl(event.currentTarget);
        console.log("something", anchorEl);
    };

    const menuId = "primary-search-account-menu";

    return (
        <ThemeProvider>
            <Box>
                <AppBar position="static">
                    <Toolbar>
                        <MenuComponent />
                        <Typography variant="h5">Teamtracker</Typography>
                    </Toolbar>
                </AppBar>
            </Box>
        </ThemeProvider>
    );
}
