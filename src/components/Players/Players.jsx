import React from "react";
import { useSelector } from "react-redux";
import PlayerItem from "./PlayerItem";
import "./style.scss";

const Players = () => {
  const players = useSelector((state) => state.players.players);

  return (
    <div className="players-grid">
      {players.map((player) => (
        <PlayerItem key={player.name} player={player} />
      ))}
    </div>
  );
};

export default Players;
