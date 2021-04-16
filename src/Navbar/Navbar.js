import React from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { ImLinkedin } from "react-icons/im";
import { AiFillGithub } from "react-icons/ai";

export const Navbar = ({ projectsRef, about, contactRef, executeScroll }) => {
  const navbar = [
    { name: "Contact ", ref: contactRef },
    { name: "Projects ", ref: projectsRef },
    { name: "About", ref: about },
  ];

  return (
    <Grid container align="center" className="Navbar">
      {navbar.map((each) => (
        <Grid item xs={3} md={3} lg={3} xl={3} className="Navbar-labels">
          <Link onClick={() => executeScroll(each.ref)}>{each.name}</Link>
        </Grid>
      ))}
      <div className="NavbarIcons">
        <a
          href="https://www.linkedin.com/in/ben-vinert-32335a1b1/"
          target="_blank"
        >
          <ImLinkedin color="#1976d2" />
        </a>
        <a
          href="https://github.com/benvinert"
          target="_blank"
          style={{ marginLeft: "6px" }}
        >
          <AiFillGithub color="#f44336" />
        </a>
      </div>
    </Grid>
  );
};
