import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Typed from "react-typed";
import "../Styles/Header.css";

export const Header = () => {
  const [hiddenClass, setHiddenClass] = useState({
    class: "WelcomeContainer",
  });
  if (hiddenClass.class == "WelcomeContainer") {
    setTimeout(() => {
      setHiddenClass({
        class: "WelcomeContainer active",
      });
    }, 1000);
  }
  return (
    <div align="center" className="HeaderBackground">
      <div className={hiddenClass.class}>
        <div className="myNameIs">
          Hi , my name is Ben Vinert
          <br />
          I'm Web Developer.
          <br />
          <Typed
            className="typed-text"
            strings={["React", "Web Development", "Python", "Java"]}
            typeSpeed={40}
            backSpeed={60}
            loop
          />
          <br />
          <Button variant="outlined" color="secondary">
            Know more
          </Button>
        </div>
      </div>
    </div>
  );
};
