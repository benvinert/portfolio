import React from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { ImLinkedin } from "react-icons/im";
import { AiFillGithub } from "react-icons/ai";

export const Navbar = () => {
  const navbar = ["Contact ", "Projects ", "About"];

  return (
    <Grid container align="center" className="Navbar">
      {navbar.map((each) => (
        <Grid item xs={3} md={3} lg={3} xl={3} className="Navbar-labels">
          <Link>{each}</Link>
        </Grid>
      ))}
      <Grid className="NavbarIcons">
        <Link>
          <ImLinkedin />
        </Link>
        <Link>
          <AiFillGithub />
        </Link>
      </Grid>
    </Grid>
  );
};
