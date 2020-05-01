import React, { useState } from "react";
import Player from "./Player";
import AddPlayerForm from "./AddPlayerForm";

function compareScore(playerA, playerB) {
  return playerB.score - playerA.score;
}
function compareName(playerA, playerB) {
  return playerA.name.localeCompare(playerB.name);
}
function ScoreBoard() {
  const [sortBy, setSortBy] = useState("score"); // by name or score
  const [players, setPlayers] = useState([
    { id: 1, name: "Hihi", score: 5 },
    { id: 2, name: "Ouch", score: 10 },
    { id: 3, name: "Meh", score: 3 },
    { id: 4, name: "Eww", score: 15 },
    { id: 5, name: "Urgh", score: 22 },
  ]);
  const playerCopy = [...players]; // make a copy array

  const sortedPlayers = sortPlayers(sortBy);

  function sortPlayers(sortBy) {
    if (sortBy === "score") {
      return playerCopy.sort(compareScore);
    } else {
      return playerCopy.sort(compareName);
    }
  }
  //mapping to return Player component for each element
  const changeSorting = (event) => {
    console.log("new sort order:", event.target.value);
    setSortBy(event.target.value);
  };

  //callback prop function
  function changeScore(id) {
    const updatedPlayers = players.map((player) => {
      if (player.id === id) {
        // update score
        return {
          id: player.id,
          name: player.name,
          score: player.score + 1,
        };
      }
      // do nothing
      return player;
    });
    setPlayers(updatedPlayers);
  }
  // reset button to 0
  function onClickReset() {
    const updatedPlayers = sortedPlayers.map((player) => {
      return {
        id: player.id,
        name: player.name,
        score: player.score - player.score,
      };
    });
    setPlayers(updatedPlayers);
  }
  // add player
  function addPlayer(name) {
    console.log("Let's add a new player with the name:", name);
    const updatedPlayers = playerCopy.concat({
      id: playerCopy.length + 1,
      name: name,
      score: 0,
    });
    console.log(updatedPlayers);
    setPlayers(updatedPlayers);
  }
  // render Player component after sorting
  const player = sortedPlayers.map((player) => {
    return (
      <div>
        <Player
          changeScore={changeScore}
          id={player.id}
          name={player.name}
          score={player.score}
        />
      </div>
    );
  });

  return (
    <div className="ScoreBoard">
      <p> Score Board </p>
      <button onClick={onClickReset}>Reset</button>
      <p>
        Sort order:{" "}
        <select onChange={changeSorting}>
          <option value="score">Sort by score</option>
          <option value="name">Sort by name</option>
        </select>
      </p>
      <ul>{player}</ul>
      <AddPlayerForm addPlayer={addPlayer} />
    </div>
  );
}

export default ScoreBoard;
