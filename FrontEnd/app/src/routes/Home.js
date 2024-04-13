/* Base */
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

/* Components */
import Navbar from "../components/Navbar";
import PlayerEvents from "../components/PlayerEvents/PlayerEvents";
import Cards from "../components/CardsComponent/Cards";

//import "../css/style.css";

const makeCardsStyles = makeStyles(theme => ({
    cardsRoot: {
        float: "right",
        maxWidth: "55%"
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

const Home = props => {
    const cardStyles = makeCardsStyles();

    // API Fetch 
    const [players, setPlayers] = useState({ players: [] });
    const [loading, setLoading] = useState(true);
    const fetchData = async () => {
        try {
            const result = await axios("https://randomuser.me/api/?results=12");
            setPlayers(result.data.results);
            setLoading(false);
        } catch (e) {
            if (e) setPlayers(people);
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
            <PlayerEvents />
            <Cards
            classes={cardStyles}
            loading={loading}
            players={players}
            />
        </div>
    );
};

export default Home;
