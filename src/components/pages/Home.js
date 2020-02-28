import React, { useState, useEffect } from "react";

import fire from "../../config/fire";

import MainCard from "../../components/MainCard";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

function Home() {
  var db = fire.firestore();
  //   db.collection("paragraphs")
  //     .doc()
  //     .get()
  //     .then(function(doc) {
  //       console.log(doc.data());
  //     })
  //     .catch(function(error) {
  //       console.log("Error getting documents: ", error);
  //     });

  // fire.auth().onAuthStateChanged(function(user) {
  //   if (user) {
  //     window.location.href = "/";
  //   } else {
  //     // No user is signed in.
  //   }
  // });

  useEffect(() => {
    console.log("Rendering home");
    var user = fire.auth().currentUser;

    if (user) {
      // User is signed in.
      console.log("User is signed in");
      console.log(user);
    } else {
      // No user is signed in.
      console.log("User is not signed in");
      console.log(user);
    }
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="heading">Getting Started</h1>
        <p>
          Welcome to <code>Typist.</code> Start as a guest, or create an
          account.
        </p>
        <div class="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
            <MainCard raceType={"Random"}></MainCard>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
            <MainCard raceType={"Private"}></MainCard>
          </div>
        </div>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          A message from the developer.
        </a>
      </header>
    </div>
  );
}

export default Home;
