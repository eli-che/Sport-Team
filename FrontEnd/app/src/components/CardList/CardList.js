import React from "react";
//import { withStyles } from "mui-styling";
//import Grid from "@material-ui/core/Grid";

import NotificationsIcon from '@material-ui/icons/Notifications';

import createCardListStyles from "./CardList.styles";
//import PlayerCard from "../PlayerCard/PlayerCard";
import { Typography, Button, Badge, List, ListItem } from "@material-ui/core";


const CardList = props => {
    const css = createCardListStyles();
    return (
        <List container spacing={2} className={css.cardList}>
            <Typography variant="h4" className={css.listTitle}>
                {props.title ? props.title : "Items"}
            </Typography>
            {props.loading
                ? "Loading..."
                : props.players.map(person => (
                    <Button>
                        <ListItem item xs={4} key={person.login.uuid} className={css.listItem}>
                            <Typography variant="h6" className={`${css.text} ${css.warning}`}>
                                &#9679;
                            </Typography>
                            <Typography variant="h6" className={css.text}>
                                {person.name.first} {person.name.last}
                            </Typography>
                            <Badge badgeContent={2} color="secondary" className={css.notifications}>
                                <NotificationsIcon />
                            </Badge>
                        </ListItem>
                    </Button>
                ))}
        </List>
    );
};

export default CardList;
