import React, { useEffect } from "react";
import Players from "../components/Players/Players";

import { useDispatch } from "react-redux";
import { getplayers } from "../redux/actions/actions";
import "./style.scss";
import PlayersForm from "../components/Players/PlayersForm";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getplayers());
  }, [dispatch]);

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
