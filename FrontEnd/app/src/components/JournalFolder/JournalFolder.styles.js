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
        flexGrow: 1
    },
    button: {
        margin: theme.spacing(1),
    },
    headerContainer: {
        display: "inline-block",
        width: "100%",
        height: "5rem",
        marginTop: "2rem"
    },
    openButton: {
        marginTop: "-4.25rem",
        display: "inline-block",
        float: "right"
    },
    displayJournalPosts: {
        display: "inline-block",
        width: "100%",
        marginTop: "4rem",
        marginLeft: "1rem",
        color: "rgba(0,0,0,1)",
        transition: "color 2s"
    },
    hideJournalPosts: {
        display: "none",
        color: "rgba(0,0,0,0)",
        transition: "color 2s"
    },
    collapsedFolder: {
        maxHeight: "11rem",
        height: "11rem",
        backgroundColor: theme.palette.common.white,
        marginTop: "2rem",
        padding: "1rem",
        transition: "max-height 1s",
        overflow: "hidden"
    },
    expandedFolder: {
        maxHeight: "200rem",
        backgroundColor: theme.palette.common.white,
        marginTop: "2rem",
        padding: "1rem",
        transition: "max-height 1s",
        overflow: "hidden"
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
        marginLeft: "1rem"
    },
    subText: {
        width: "100%",
        display: "inline-block",
        margin: "1rem"
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
