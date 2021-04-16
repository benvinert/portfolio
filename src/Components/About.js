import { Grid } from "@material-ui/core";
import React from "react";
import "../Styles/About.css";
import Typography from "@material-ui/core/Typography";

export const About = ({ aboutRef }) => {
  return (
    <Grid container className="AboutContainer">
      <Grid xs={12} md={12} lg={12} xl={12}>
        <div align="center" style={{ color: "#f44336" }} ref={aboutRef}>
          <h1>About</h1>
        </div>
      </Grid>
      <Grid container xs={12} md={12} lg={12} xl={12}>
        <Grid xs={2} md={2} lg={2} xl={2} />
        <Grid xs={8} md={8} lg={8} xl={8}>
          <Typography
            data-aos="fade-right"
            align="center"
            variant="h5"
            noWrap={false}
            gutterBottom
          >
            I am Team player, Fast learner, takes advantage of every spare
            moment to learn something new , high passion to solving problems.
            After each project I made , I learn a lot about how to make my code
            better and readable , how I can take full Advantage of the
            framework.
          </Typography>
        </Grid>
        <Grid xs={2} md={2} lg={2} xl={2} />
      </Grid>
    </Grid>
  );
};
