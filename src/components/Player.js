import React from "react";

function Player(props) {
  const onClickIncrement = () => {
    return props.changeScore(props.id);
  };
  return (
    <div>
      <li className="Player">
        <p>
          {props.name} 's score: {props.score}{" "}
          <button onClick={onClickIncrement}>Increment</button>
        </p>
      </li>
    </div>
  );
}

export default Player;
