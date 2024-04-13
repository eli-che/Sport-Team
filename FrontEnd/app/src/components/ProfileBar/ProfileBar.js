/* Base */
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Card } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";

/* Icons */
import EditIcon from '@material-ui/icons/Edit';

/* Style */
import { withStyles } from "mui-styling";
import createStyles from "./ProfileBar.styles";

const ProfileBar = withStyles(createStyles, {
    name: "ProfileBar"
  })(props => {
    const { classes } = props;
    const history = useHistory();

    return (
        <div className={classes.grow}>
        <AppBar className={classes.appBar} position="static">
            <Toolbar>
                <Card className={classes.profilePicture}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt={props.name}
                            title={props.name}
                            image={props.photoURL}
                            height="200"
                            width="200"
                        />
                    </CardActionArea>
                </Card>
                <div className={classes.infoDiv}>
                    <Typography className={classes.name} variant="h4" noWrap>
                        { props.name }
                    </Typography>
                    <Typography className={classes.subText} noWrap>
                        Roll: Spelare
                    </Typography>
                    <Typography className={classes.subText} noWrap>
                        Position: Back
                    </Typography>
                    <Typography className={classes.subText} noWrap>
                        Status: 7/10
                    </Typography>
                    {/* Ja, jag skrev fel med vilje, det är kul, okej? Skratta nu. */}
                    <Typography className={classes.subText} noWrap>
                        Vikt: 185cm
                    </Typography>
                    <Typography className={classes.subText} noWrap>
                        Längd: 15kg
                    </Typography>
                </div>
                <div className={classes.grow} />
                <div className={classes.editButton}>
                    <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    startIcon={<EditIcon />}
                    onClick={() => {
                        history.push("/profile/settings");
                    }}
                    >
                        Edit
                    </Button>
                </div>
            </Toolbar>
        </AppBar>
        </div>
    );
});

export default ProfileBar;
