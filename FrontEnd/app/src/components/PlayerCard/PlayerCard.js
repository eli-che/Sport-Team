import React from "react";
import { Button, Card } from "@material-ui/core";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import createPlayerCardStyles from "./PlayerCard.styles";

//= withStyles(createStyles, {name: "PlayerCard" })(({ css }) 

const PlayerCard = props => {
    const css = createPlayerCardStyles();
    const { person } = props;
    return (
        <Card>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt={person.name.first}
                    height="250"
                    image={person.picture.large}
                    title={person.name.first}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {person.name.first} {person.name.last}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                    >
                        Ålder: {person.dob.age}.
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                    >
                        Det här är {person.name.first}.
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="large" className={css.warning}>
                    &#9679; lätt skadad
                </Button>
            </CardActions>
        </Card>
    );
};

export default PlayerCard;
