import { makeStyles } from '@material-ui/core/styles';

const createCardListStyles = makeStyles(theme => ({
    cardList: {
        display: "inline-block",
        float: "left",
        maxWidth: "20%",
        marginRight: "1.5rem",
        marginLeft: "1.5rem"
    },
    good: {
        marginRight: "1rem",
        fontSize: "0.9rem",
        color: "#81c784"
    },
    warning: {
        marginRight: "1rem",
        fontSize: "0.9rem",
        color: "#ffb74d"
    },
    bad: {
        marginRight: "1rem",
        fontSize: "0.9rem",
        color: "#e57373"
    },
    listTitle: {
        marginTop: "1rem",
        marginBottom: "2rem"
    },
    listItem: {
        display: "block",
        width: "25rem",
    },
    text: {
        display: "inline-block"
    },
    notifications: {
        display: "inline-block",
        float: "right"
    }
}));

export default createCardListStyles;