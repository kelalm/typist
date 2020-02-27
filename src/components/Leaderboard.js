import React from "react";
import { ListGroup, ListGroupItem } from "shards-react";

export default function Leaderboard() {
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
