import React from "react";
import { Button } from "@material-ui/core";

function LogoutButton(props) {
    return (
        <Button
            variant="contained"
            color="primary"
            onClick={() => {
                props.onClick();
            }}
        >
            Logout
        </Button>
    );
}
export default LogoutButton;
