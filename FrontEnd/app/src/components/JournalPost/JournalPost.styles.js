export default theme => ({
    journalPost: {
        maxWidth: "20rem",
        marginBottom: "1.5rem"
    },
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
        flexGrow: 1
    },
    button: {
        minWidth: "9.25rem",
        justifyContent: "right"
    },
    headerContainer: {
        display: "inline-block",
        width: "100%",
        height: "2rem",
        top: "0"
    },
    openButton: {
        marginTop: "-0.25rem",
        display: "inline-block",
        float: "right"
    },
    displayJournalContent: {
        display: "inline-block",
        width: "45rem",
        textAlign: "justify",
        marginTop: "2rem",
        marginLeft: "1rem",
        marginBottom: "1rem",
        color: "rgba(0,0,0,1)",
        transition: "color 2s"
    },
    hideJournalContent: {
        display: "none",
        color: "rgba(0,0,0,0)",
        transition: "color 2s"
    },
    collapsedFolder: {
        maxHeight: "9rem",
        backgroundColor: theme.palette.common.white,
        marginTop: "2rem",
        padding: "1rem",
        transition: "max-height 0.5s"
    },
    expandedFolder: {
        maxHeight: "200px",
        backgroundColor: theme.palette.common.white,
        marginTop: "2rem",
        padding: "1rem",
        transition: "max-height 0.5s"
    },
    appBar: {
        backgroundColor: theme.palette.common.white,
        height: 150,
        marginTop: "2rem",
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        display: "inline-block",
        marginLeft: "1rem",
        '&:hover': {
            textDecoration: "underline",
            cursor: "pointer"
        }
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
