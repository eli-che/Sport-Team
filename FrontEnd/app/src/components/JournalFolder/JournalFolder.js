/* Base */
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

/* Icons */
import FolderOpen from '@material-ui/icons/FolderOpen';

/* Style */
import { withStyles } from "mui-styling";
import createStyles from './JournalFolder.styles';

/* Components */
import JournalPost from "../JournalPost/JournalPost";

const JournalFolder = withStyles(createStyles, {
    name: "JournalFolderStyles"
  })(props => {
    const { classes } = props;
    //const history = useHistory();
    const [state, setState] = React.useState({
        journalFolderIsOpen: false
    });
    
    const toggleJournals = (journals, open) => event => {
        setState({ ...state, [journals]: open });
    };

    return (
        <div className={classes.grow}>
        <AppBar className={ state.journalFolderIsOpen ? classes.expandedFolder : classes.collapsedFolder } position="static">
                <div className={classes.headerContainer}>
                    <Typography className={classes.title} variant="h4" noWrap>
                        {props.name}'s Journal
                    </Typography>
                    <Typography className={classes.subText} variant="h6" noWrap>
                        {props.name}'s journal, här finner du samtliga journalinlägg som berör {props.name}.
                    </Typography>
                    <div className={classes.openButton}>
                        <Button
                        variant="contained"
                        color="primary"
                        onClick={toggleJournals("journalFolderIsOpen", !state.journalFolderIsOpen)}
                        className={classes.button}
                        startIcon={<FolderOpen />}
                        position="fixed"
                        >
                            {state.journalFolderIsOpen ? "Close" : "Open"}
                        </Button>
                    </div>
                </div>
                <div className={ state.journalFolderIsOpen ? classes.displayJournalPosts : classes.hideJournalPosts } >
                    {props.journal.map(post =>
                        <JournalPost
                            date={post.date}
                            textContent={post.textContent}
                        />
                    )}
                </div>
                <div className={classes.journalContainer} />
        </AppBar>
        </div>
    );
});

export default JournalFolder;
