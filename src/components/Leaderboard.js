import React, { useState, useEffect } from "react";
import { ListGroup, ListGroupItem } from "shards-react";
import fire from "../config/fire";

export default function Leaderboard() {
  const [topScores, setTopScores] = useState({
    Kelvin: 120,
    Greg: 98,
    Sally: 54
  });

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
    <ListGroup flush={false}>
      <ListGroupItem>1. Kelvin - 120 WPM</ListGroupItem>
      <ListGroupItem>2. Greg - 81 WPM</ListGroupItem>
      <ListGroupItem>3. Thomas - 80 WPM</ListGroupItem>
      <ListGroupItem>4. Porta ac consectetur ac</ListGroupItem>
      <ListGroupItem>5. Vestibulum at eros</ListGroupItem>
    </ListGroup>
  );
}
