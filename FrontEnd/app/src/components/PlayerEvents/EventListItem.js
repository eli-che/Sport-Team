import React from "react";
import { ListItem, Typography, Card, IconButton } from "@material-ui/core";

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

import createStyles from "./EventListItem.styles";
import { withStyles } from "mui-styling";

const EventListItem = withStyles(createStyles, {
    name: "EventListItemStyles"
})(props => {
    const { classes } = props;
    const [state, setState] = React.useState({
        isOpen: false
    });

    const toggleCard = (side, open) => event => {
        setState({ ...state, [side]: open });
    };

    //const { title, author, body, styles, avatarImg } = props;
    return (
        <ListItem alignItems="flex-start" className={classes.listItem}>
            <Card className={state.isOpen ? classes.openCard : classes.closedCard}>
                <div className={state.isOpen ?
                    `${classes.openCardNotificationColorDiv} ${classes.good}` :
                    `${classes.closedCardNotificationColorDiv} ${classes.warning}`}
                />
                <div className={classes.cardContent}>
                    {
                        /*
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src={avatarImg} />
                        </ListItemAvatar>
                        */
                    }
                    <Typography
                        component="span"
                        variant="h5"
                        className={classes.title}
                        color="textPrimary"
                    >
                        {props.title}
                    </Typography>
                    <Typography
                        component="span"
                        variant="h6"
                        className={classes.title}
                        color="textPrimary"
                    >
                        {props.authorName}, {props.authorRole}
                    </Typography>
                    <Typography
                        component="span"
                        variant="body1"
                        className={state.isOpen ? classes.openCardBody : classes.closedCardBody}
                        color="textPrimary"
                    >
                        {props.body}
                    </Typography>
                    <IconButton
                    className={classes.expandButton}
                    onClick={toggleCard("isOpen", !state.isOpen)}
                    >
                        { state.isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon /> }
                    </IconButton>
                </div>
            </Card>
        </ListItem>
    );
});

export default EventListItem;
