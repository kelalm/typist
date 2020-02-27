import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Button
} from "shards-react";

export default function MainCard(props) {
  const [raceType, setRaceType] = useState(props.raceType);

  return (
    <Card style={{ maxWidth: "300px" }}>
      <CardHeader>Start a new game</CardHeader>
      <CardBody>
        <CardTitle>New {raceType} Race</CardTitle>
        <p>Join a random lobby with random people Hop in by yourself!.</p>
        <Button>Join &rarr;</Button>
      </CardBody>
      <CardFooter>You will be matched into a lobby.</CardFooter>
    </Card>
  );
}
