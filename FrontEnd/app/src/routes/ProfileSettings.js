import React from "react";
import { connect } from "react-redux";

import Navbar from "../components/Navbar";
import ProfileBar from "../components/ProfileBar/ProfileBar";

import "../css/style.css";

const mapStateToProps = state => ({ auth: state.auth });

const ProfileSettings = props => {
    return (
        <div>
            <Navbar />
            <ProfileBar 
                name={props.auth.user.displayName}
                photoURL={props.auth.user.photoURL}
            />
        </div>
    );
};

export default connect(mapStateToProps)(ProfileSettings);
