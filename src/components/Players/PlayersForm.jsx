import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPlayer } from "../../redux/actions/actions";
import axios from "axios";

const PlayersForm = () => {
  const dispatch = useDispatch();
  const [player, setPlayer] = useState({
    name: "",
    age: "",
    description: "",
  });

  const { name, age, description } = player;

  const onChange = (event) => {
    setPlayer({ ...player, [event.target.name]: event.target.value });
    console.log(player);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    dispatch(addPlayer(player));
    axios
      .post("http://localhost:5500/api/players/add", player)
      .then((res) => console.log(res.data));
    setPlayer({
      name: "",
      age: "",
      description: "",
    });

    window.location = "/";
  };
  return (
    <form className="players-form" onSubmit={onSubmit}>
      <h2>Add Player</h2>
      <input
        type="text"
        name="name"
        placeholder="name"
        value={name}
        onChange={onChange}
      />
      <input
        type="text"
        name="age"
        placeholder="age"
        value={age}
        onChange={onChange}
      />
      <input
        type="text"
        name="description"
        placeholder="description"
        value={description}
        onChange={onChange}
      />
      <button type="submit">Add Player</button>
    </form>
  );
};

export default PlayersForm;
