import React, { useEffect } from "react";
import Players from "../components/Players/Players";
import axios from "axios";
import "./style.scss";
import PlayersForm from "../components/Players/PlayersForm";

const Home = () => {
  useEffect(() => {
    axios
      .get("http://localhost:5500/api/players")
      .then((res) => console.log(res.data));
  }, []);

  return (
    <div className="home">
      <div className="left">
        <PlayersForm />
      </div>
      <div className="right">
        <Players />
      </div>
    </div>
  );
};

export default Home;
