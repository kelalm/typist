import React, { useState, useEffect } from "react";

import ParagraphCard from "../ParagraphCard";
import EntryBox from "../EntryBox";

export default function Race() {
  return (
    <div>
      <h1 className="heading">Race</h1>
      <ParagraphCard></ParagraphCard>
      <EntryBox></EntryBox>
    </div>
  );
}
