import React, { useState, useEffect } from "react";
import { ListGroup, ListGroupItem } from "shards-react";
import fire from "../config/fire";

export default function Leaderboard() {
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
      <ListGroupItem>Kelvin - 120 WPM</ListGroupItem>
      <ListGroupItem>Greg - 81 WPM</ListGroupItem>
      <ListGroupItem>Thomas - 80 WPM</ListGroupItem>
      <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
      <ListGroupItem>Vestibulum at eros</ListGroupItem>
    </ListGroup>
  );
}
