/* Base */
import React from "react";
import Grid from "@material-ui/core/Grid";

/* Style */
import {withStyles} from "mui-styling";
import createStyles from "./Cards.styles";

/* Components */
import PlayerCard from "../PlayerCard/PlayerCard";

const Cards = withStyles(createStyles, {
    name: "CardsStyles"
  })(props => {
    const { css } = props;

    return (
        <div className={css.cardsRoot}>
            <Grid container spacing={2}>
                {props.loading
                    ? "Loading..."
                    : props.players.map(person => (
                        <Grid item xs={3} key={person.login.uuid}>
                            <PlayerCard person={person} />
                        </Grid>
                    ))}
            </Grid>
        </div>
    );
});

export default Cards;