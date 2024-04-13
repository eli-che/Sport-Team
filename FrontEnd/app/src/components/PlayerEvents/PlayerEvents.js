import React from "react";
import { withStyles } from "mui-styling";
import List from "@material-ui/core/List";

import EventListItem from "./EventListItem";
import createStyles from "./PlayerEvents.styles";
import { Typography } from "@material-ui/core";

const playerEventsData = [
    {
        id: 1,
        title: "Martins rygg",
        author: {
            role: "Lagläkare",
            name: "Anita Henriksson"
        },
        content: "Incididunt do ipsum irure nisi quis laboris ut minim tempor mollit. Laborum magna sit deserunt ipsum ex quis anim adipisicing voluptate aliquip reprehenderit eiusmod. Ipsum enim dolore minim ad elit do ipsum aliqua deserunt reprehenderit fugiat labore. Ad cillum in adipisicing duis laboris occaecat cillum occaecat pariatur labore Lorem occaecat. Proident esse duis ad adipisicing proident culpa est occaecat laborum. Sint exercitation dolor reprehenderit veniam minim veniam cupidatat sint do magna aliqua aute cupidatat.Incididunt do ipsum irure nisi quis laboris ut minim tempor mollit. Laborum magna sit deserunt ipsum ex quis anim adipisicing voluptate aliquip reprehenderit eiusmod. Ipsum enim dolore minim ad elit do ipsum aliqua deserunt reprehenderit fugiat labore. Ad cillum in adipisicing duis laboris occaecat cillum occaecat pariatur labore Lorem occaecat. Proident esse duis ad adipisicing proident culpa est occaecat laborum. Sint exercitation dolor reprehenderit veniam minim veniam cupidatat sint do magna aliqua aute cupidatat.Incididunt do ipsum irure nisi quis laboris ut minim tempor mollit. Laborum magna sit deserunt ipsum ex quis anim adipisicing voluptate aliquip reprehenderit eiusmod. Ipsum enim dolore minim ad elit do ipsum aliqua deserunt reprehenderit fugiat labore. Ad cillum in adipisicing duis laboris occaecat cillum occaecat pariatur labore Lorem occaecat. Proident esse duis ad adipisicing proident culpa est occaecat laborum. Sint exercitation dolor reprehenderit veniam minim veniam cupidatat sint do magna aliqua aute cupidatat.Incididunt do ipsum irure nisi quis laboris ut minim tempor mollit. Laborum magna sit deserunt ipsum ex quis anim adipisicing voluptate aliquip reprehenderit eiusmod. Ipsum enim dolore minim ad elit do ipsum aliqua deserunt reprehenderit fugiat labore. Ad cillum in adipisicing duis laboris occaecat cillum occaecat pariatur labore Lorem occaecat. Proident esse duis ad adipisicing proident culpa est occaecat laborum. Sint exercitation dolor reprehenderit veniam minim veniam cupidatat sint do magna aliqua aute cupidatat.Incididunt do ipsum irure nisi quis laboris ut minim tempor mollit. Laborum magna sit deserunt ipsum ex quis anim adipisicing voluptate aliquip reprehenderit eiusmod. Ipsum enim dolore minim ad elit do ipsum aliqua deserunt reprehenderit fugiat labore. Ad cillum in adipisicing duis laboris occaecat cillum occaecat pariatur labore Lorem occaecat. Proident esse duis ad adipisicing proident culpa est occaecat laborum. Sint exercitation dolor reprehenderit veniam minim veniam cupidatat sint do magna aliqua aute cupidatat."
    },
    {
        id: 2,
        title: "Ny diet till Anton",
        author: {
            role: "Dietist",
            name: "Henrik Lagerfeldt",
        },
        content: "Nisi incididunt officia anim consectetur culpa deserunt pariatur nostrud dolor mollit anim quis consequat. Esse sint tempor mollit labore elit ex occaecat ipsum. Do ut excepteur ex velit enim."
    },
    {
        id: 3,
        title: "Alfons fys resultat",
        author: {
            role: "Fystränare",
            name: "Anders Johansson",
        },
        content: "Ut officia elit consectetur fugiat excepteur et consequat. Anim in amet laboris mollit sunt sunt occaecat irure deserunt et sint ullamco in. Proident cillum sit cillum incididunt et. Incididunt elit quis sit ipsum ipsum est enim minim sit irure anim esse ullamco. Ut proident excepteur exercitation amet. Dolore non dolore qui cupidatat nisi excepteur."
    }
];

const PlayerEvents = withStyles(createStyles, { name: "PlayerEvents" })(
    ({ classes }) => {
        return (
            <div className={classes.playerEvents}>
                <Typography variant="h4" className={classes.title}>
                    Nyheter:
                </Typography>
                <List className={classes.root}>
                    {playerEventsData.map(event => {
                        return (
                            <React.Fragment>
                                <EventListItem
                                    title={event.title}
                                    authorRole={event.author.role}
                                    authorName={event.author.name}
                                    avatarImg={event.img}
                                    body={event.content}
                                    styles={classes}
                                />
                                {/*<Divider variant="inset" component="li" />*/}
                            </React.Fragment>
                        );
                    })}
                </List>
            </div>
        );
    }
);

export default PlayerEvents;
