import React, { useEffect } from "react";
import { Navbar } from "./Navbar";
import { Products } from "./Products";
import { useHistory } from "react-router-dom";
import { auth } from "../Config/Config";
import "./Home.css";

export const Home = ({ user }) => {
  const history = useHistory();

  useEffect(() => {
    // forcing user to signup
    auth.onAuthStateChanged((user) => {
      if (!user) {
        history.push("/login");
      }
    });
  });

  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src="a - Banner 02.png" alt="" />
        <div className="wrapper">
          <Navbar user={user} />
          <Products />
        </div>
      </div>
    </div>
  );
};
