import React from "react";
import { connect } from "react-redux";

import Navbar from "../components/Navbar";
import ProfileBar from "../components/ProfileBar/ProfileBar";
import JournalFolder from "../components/JournalFolder/JournalFolder";

import "../css/style.css";

import firebase from "../firebase";
import axios from "axios";

const mapStateToProps = state => ({ auth: state.auth });


const journal = [
    {
        "date": "18/3-2020",
        "textContent": "Sit deserunt eu labore do sunt consequat excepteur incididunt proident qui. Consectetur eu pariatur ea Lorem. Duis magna aliquip dolore cupidatat qui nostrud reprehenderit sunt labore sunt adipisicing irure pariatur. Dolor nulla occaecat enim ea ullamco officia ipsum non ad deserunt eiusmod laborum quis magna. Dolore nisi est duis cillum sunt deserunt ut duis eu consectetur anim consequat sunt.",
        "regardingId": "100992553021",
        "regardingName": "Jakob Eriksson",
        "authorId": "100422156692",
        "authorName": "Ingvar Persson",
    },
    {
        "date": "12/3-2020",
        "textContent": "Elit qui labore in ut veniam laboris minim anim consectetur eiusmod. Dolore nulla sit ad proident labore amet. Labore sit cillum cillum ex reprehenderit laboris proident nostrud velit proident aliquip magna. Aliqua adipisicing irure ullamco sint duis nisi anim ex et. Dolor ullamco amet enim dolor ea dolor minim cupidatat.",
        "regardingId": "100992553021",
        "regardingName": "Jakob Eriksson",
        "authorId": "100422156692",
        "authorName": "Ingvar Persson",    
    },
    {
        "date": "6/3-2020",
        "textContent": "Proident labore consectetur excepteur aute ex sunt duis ea velit fugiat. Incididunt adipisicing ut eiusmod laboris pariatur fugiat non ut deserunt. Excepteur do ut aute anim esse adipisicing. Nisi officia ex commodo veniam et id proident eiusmod.",
        "regardingId": "100992553021",
        "regardingName": "Jakob Eriksson",
        "authorId": "100422156692",
        "authorName": "Ingvar Persson",    
    },
    {
        "date": "26/2-2020",
        "textContent": "Consectetur occaecat ex dolore aliquip ullamco. Enim quis pariatur labore pariatur velit ullamco ipsum sit deserunt cillum nostrud dolore ea eiusmod. In id aliquip culpa reprehenderit exercitation duis. Ex incididunt nostrud eiusmod tempor. Tempor nisi non dolor incididunt. Velit nisi exercitation id magna exercitation mollit. Adipisicing sunt sit incididunt consequat nisi quis id ea tempor cillum pariatur.",
        "regardingId": "100992553021",
        "regardingName": "Jakob Eriksson",
        "authorId": "100422156692",
        "authorName": "Ingvar Persson",    
    },
];
// End of placeholder data


 function getDataFromJournal(token) {
        fetch('http://localhost:5000/journalprivate', {
            method: 'GET',
             headers: {
                authorization: `Bearer ${token}`
            }
        })    
          .then((response) => response.json())
          .then((responseJson) => {
             console.log("HAHAHA!!!!", responseJson);
            return responseJson;
          })
          .catch((error) => {
            console.error(error);
          });
    }

function PostData() {
    firebase.auth().onAuthStateChanged(user => {
        user.getIdTokenResult().then(idTokenResult => {
        var token = idTokenResult.token;
       // console.log(getDataFromJournal(token));
        return getDataFromJournal(token);
        
        });
    });
   
}

const Profile = props => {


    var gang = PostData();
    console.log(gang);  

    return (
        <div>
            <Navbar />
            <ProfileBar 
                name={props.auth.user.displayName}
                photoURL={props.auth.user.photoURL}
            />
            <JournalFolder
                name={props.auth.user.displayName}
                journal={journal}
            />
        </div>
    );
};

export default connect(mapStateToProps)(Profile);
