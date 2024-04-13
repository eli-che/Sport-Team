export default theme => ({
    root: {
        width: "100%",
        maxWidth: "100%",
        float: "left",
    },
    title: {
        display: "block",
        marginBottom: "0.3rem"
    },
    closedCardBody: {
        display: "block",
        maxWidth: "50rem",
        maxHeight: "3rem",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textAlign: "justify",
        marginLeft: "1.5rem",
        marginRight: "1rem",
        marginTop: "0.25rem"
    },
    openCardBody: {
        display: "block",
        maxWidth: "50rem",
        maxHeight: "20rem",
        textAlign: "justify",
        marginLeft: "1.5rem",
        paddingRight: "1rem",
        marginRight: "1rem",
        marginTop: "0.25rem",
        overflowY: "auto"
    },
    openCard: {
        position: "relative",
        width: "50rem",
        marginBottom: "1rem",
        height: "100%",
    },
    closedCard: {
        position: "relative",
        width: "50rem",
        marginBottom: "1rem",
        height: "7.5rem"
    },
    cardContent: {
        marginLeft: "1rem",
        padding: "0.5rem"
    },
    listItem: {
        display: "inline-block",
        padding: 0,
        paddingRight: "1rem",
        minHeight: "2rem",
    },
    expandButton: {
        position: "absolute",
        top: "1rem",
        right: "3rem"
    },
    closedCardNotificationColorDiv: {
        position: "absolute",
        display: "inline-block",
        height: "auto",
        width: "0.5rem",
        minHeight: "7.5rem",
        minWidth: "0.5rem",
        marginRight: "1rem",
        float: "left"
    },
    openCardNotificationColorDiv: {
        position: "absolute",
        display: "inline-block",
        height: "40rem",
        width: "0.5rem",
        minWidth: "0.5rem",
        marginRight: "1rem",
        float: "left",
        overflow: "hidden"
    },
    good: {
        backgroundColor: "#81c784",
    },
    warning: {
        backgroundColor: "#ffb74d",
    },
    bad: {
        backgroundColor: "#e57373",
    }
});
