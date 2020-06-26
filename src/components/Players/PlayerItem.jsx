import React from "react";
import "./style.scss";

const PlayerItem = ({ player }) => {
  const { name, age, description } = player;
  return (
    <div className="player-card">
      <h3>
        <span className="player-card__attributes">Name:</span> {name}
      </h3>
      <h3>
        <span className="player-card__attributes">Age:</span> {age}
      </h3>
      <p>
        <span className="player-card__attributes">Desc: </span>
        {description}
      </p>
    </div>
  );
};

export default PlayerItem;
