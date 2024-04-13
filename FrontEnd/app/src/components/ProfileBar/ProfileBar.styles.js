export default theme => ({
    list: {
        width: 250,
    },
    test: {
        margin: 5
    },
    fullList: {
        width: "auto"
    },
    grow: {
        flexGrow: 1,
    },
    button: {
        margin: theme.spacing(1),
    },
    editButton: {
        marginTop: "10rem",
        textAlign: "right"
    },
    appBar: {
        backgroundColor: theme.palette.common.white,
        height: 250,
        marginTop: "2rem",
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    profilePicture: {
        marginRight: "1.6rem",
        marginTop: "1.4rem",
        display: "inline",
        ['@media (max-width:600px)']: { // eslint-disable-line no-useless-computed-key
            display: "none"
        }
        
    },
    infoDiv: {
        display: "inline-block",
        maxWidth: "20rem",
        marginTop: "2rem",
        marginLeft: "1rem"
    },
    name: {
        display: "inline-block",
        width: "100%"
    },
    subText: {
        width: "100%",
        display: "inline-block",
    },
    sectionDesktop: {
        display: "none",
        [theme.breakpoints.up("md")]: {
            display: "flex",
        },
    },
    sectionMobile: {
        display: "flex",
        [theme.breakpoints.up("md")]: {
            display: "none",
        },
    },
});
