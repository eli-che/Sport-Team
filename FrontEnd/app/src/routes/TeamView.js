/* Base */
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

/* Components */
import Navbar from "../components/Navbar";
import FilterBar from "../components/FilterBar/FilterBar";
import Cards from "../components/CardsComponent/Cards";
import CardList from "../components/CardList/CardList";

//import "../css/style.css";

const makeCardsStyles = makeStyles(theme => ({
    cardsRoot: {
        "@media (min-width: 600px)": {
            paddingLeft: 24,
            maxWidth: "70%"
        }
    }
}));

// Placeholder data
const people = [
    {
        name: {
            first: "Anders",
            last: "Andersson"
        },
        picture: {
            medium:
                "https://www.kindpng.com/picc/m/24-248729_stockvader-predicted-adig-user-profile-image-png-transparent.png"
        },
        login: {
            uuid: "1"
        },
        dob: {
            age: 23
        }
    },
    {
        name: {
            first: "Johan",
            last: "Johansson"
        },
        picture: {
            medium:
                "https://www.kindpng.com/picc/m/24-248729_stockvader-predicted-adig-user-profile-image-png-transparent.png"
        },
        login: {
            uuid: "1"
        },
        dob: {
            age: 20
        }
    },
    {
        name: {
            first: "Göran",
            last: "Göransson"
        },
        picture: {
            medium:
                "https://www.kindpng.com/picc/m/24-248729_stockvader-predicted-adig-user-profile-image-png-transparent.png"
        },
        login: {
            uuid: "1"
        },
        dob: {
            age: 26
        }
    }
];
// End of Placeholder data

const TeamView = props => {
    const cardStyles = makeCardsStyles();

    // API Fetch
    const [players, setPlayers] = useState({ players: [] });
    const [loading, setLoading] = useState(true);
    const [allPlayers, setAllPlayers] = useState(true);
    const fetchData = async () => {
        try {
            const result = await axios("https://randomuser.me/api/?results=12");
            setPlayers(result.data.results);
            setAllPlayers(result.data.results);
            setLoading(false);
        } catch (e) {
            if (e) setPlayers(people);
            setAllPlayers(people);
            setLoading(false);
            console.log("players:", e);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);
    // End of API Fetch

    return (
        <div>
            <Navbar />
            <FilterBar
                allPlayers={allPlayers}
                players={players}
                updatePlayers={setPlayers}
            />
            <Cards classes={cardStyles} loading={loading} players={players} />
            <CardList title="SPELARE" loading={loading} players={players} />
        </div>
    );
    //const cardStyles = makeCardsStyles();
    //return (
    // <div>
    // <Navbar />
    // <Filterbar />
    // <Cards classes={cardStyles} spacing={3} cardSize={3} />
    //</div>
    // );
};

export default TeamView;
