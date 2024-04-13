import { makeStyles } from '@material-ui/core/styles';

const createPlayerCardStyles = makeStyles(theme => ({
    good: {
        color: "#81c784"
    },
    warning: {
        color: "#ffb74d"
    },
    bad: {
        color: "#e57373"
    }
}));

export default createPlayerCardStyles;