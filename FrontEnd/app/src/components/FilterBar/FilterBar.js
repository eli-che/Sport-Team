import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import createFilterBarStyles from "./FitlerBar.styles";
import { Typography } from "@material-ui/core";

const FilterBar = props => {
    const classes = createFilterBarStyles();

    // Set component states
    const [state, setState] = React.useState({
        checkedA: false,
        checkedB: false
    });

    console.log(props.players);

    // Handler for checkbox changes
    const handleChange = name => event => {
        setState({ ...state, [name]: event.target.checked });
    };

    // Alphabetical sort if checkbox A is checked
    if (state.checkedA) {
        sortAlphabetical();
    }

    /**
     * Sorts and updates the visible players alphabetically.
     * 
     * @returns void
     */
    function sortAlphabetical() {
        // Sort players
        let unsorted = props.players;

        console.log(unsorted);

        unsorted = unsorted.sort(stringComparator);

        console.log(unsorted);

        // Update visible players
        props.updatePlayers(unsorted);
    }

    function stringComparator(a, b) {
        console.log(a);
        console.log(b);
        if (a.name.first.toLowerCase() < b.name.first.toLowerCase()){
            return -1;
        }
        if (a.name.first.toLowerCase() > b.name.first.toLowerCase()){
            return 1;
        }
        return 0;
    }

    /**
     * Filters players by name with the given string.
     *
     * @param {String} filterQuery The text to filter names by.
     * 
     * @returns {Array} The filtered player array.
     */
    function filterPlayersByInput(filterQuery) {
        // Filter by input value
        let filteredPlayers = props.allPlayers.filter((player) => {
            return player.name.first.toLowerCase().includes(filterQuery.toLowerCase()) || player.name.last.toLowerCase().includes(filterQuery.toLowerCase());
        });

        return filteredPlayers;
    }

    return (
        <div className={classes.root}>
            <AppBar position="relative" color="transparent" elevation="0">
                <Toolbar className={classes.toolbar}>
                    <div className={classes.search} edge="start">
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Filtrera enligt namn..."
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput
                            }}
                            inputProps={{ "aria-label": "search" }}
                            onChange={(event) => {
                                let filteredPlayers = filterPlayersByInput(event.target.value)
                                
                                // Update visible players
                                props.updatePlayers(filteredPlayers);
                            }}
                        />
                    </div>
                    <Typography className={classes.filterText}>
                        Sortera:
                        </Typography>
                    <FormGroup row>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={state.checkedA}
                                    onChange={handleChange("checkedA")}
                                    value="checkedA"
                                />
                            }
                            label="A-Z"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={state.checkedB}
                                    onChange={handleChange("checkedB")}
                                    value="checkedB"
                                />
                            }
                            label="Ålder"
                        />
                    </FormGroup>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default FilterBar;
