import React from "react";
import Player from "./Player";

function ScoreBoard() {
  return (
    <div className="ScoreBoard">
      <p>Players' score:</p>

      <ul>
        <Player name="Hihi" />
        <Player name="Haha" />
        <Player name="Hehe" />
        <Player name="Huhu" />
        <Player name="Hoho" />
      </ul>
    </div>
  );
}

export default ScoreBoard;
