/* Base */

import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

/* Icons */

import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

/* Style */
import { withStyles } from "mui-styling";
import createStyles from "./JournalPost.styles";

const JournalPost = withStyles(createStyles, {
    name: "JournalPostStyles"
  })(props => {
    const { classes } = props;
    //const history = useHistory();
    const [state, setState] = React.useState({
        journalIsOpen: false
    });
    
    const toggleJournal = (journal, open) => event => {
        setState({ ...state, [journal]: open });
    };

    return (
        <div className={classes.journalPost}>
            <div className={classes.headerContainer}>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={toggleJournal("journalIsOpen", !state.journalIsOpen)}
                    className={classes.button}
                    endIcon={state.journalIsOpen ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
                    position="fixed"
                    size="large"
                >
                    {props.date}
                </Button>
            </div>
            <div className={ state.journalIsOpen ? classes.displayJournalContent : classes.hideJournalContent } >
                <Typography variant="p">
                    {props.textContent}
                </Typography>
            </div>
            <div className={classes.journalContainer} />
        </div>
    );
});

export default JournalPost;