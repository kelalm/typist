import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle } from "shards-react";

export default function CardBodyTitleSubtitleExample() {
  return (
    <Card>
      <CardBody>
        <CardTitle>Excerpt from Peak</CardTitle>
        <CardSubtitle>Roland Smith</CardSubtitle>
        Nunc quis nisl ac justo elementum sagittis in quis justo. Nunc quis nisl
        ac justo elementum sagittis in quis justo. Nunc quis nisl ac justo
        elementum sagittis in quis justo.
      </CardBody>
    </Card>
  );
}
