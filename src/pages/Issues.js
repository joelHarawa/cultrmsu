/*
Title: Issues.js
Author: Joel Harawa
Purpose: Display the home page to the user
*/

import IssueComponent from "../components/IssueComponent";
import Navbar from "../components/Navbar";

const Issues = () => {

    return (
        <>
            <Navbar/>
            <IssueComponent/>
        </>
    );
}

export default Issues;