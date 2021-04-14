import { Grid } from "@material-ui/core";
import React from "react";
import "../Styles/Projects.css";
import Cart from "../Styles/Images/Cart.png";
import FitnessApp4 from "../Styles/Images/FitnessApp4.png";
import Image from "material-ui-image";
import CalculateApp1 from "../Styles/Images/CalculateApp1.png";
import { Button } from "@material-ui/core";

export const Projects = () => {
  var projectsArr = [
    {
      name: "Calculator_nut",
      image: Cart,
    },
    {
      name: "Fitness Plan",
      image: FitnessApp4,
    },
    {
      name: "Vinerfia",
      image: CalculateApp1,
    },
  ];

  return (
    <Grid className="projectsContainer" container>
      <Grid align="center" xs={12} md={12} lg={12} xl={12}>
        <h3>Projects</h3>
      </Grid>
      <Grid container align="center" justify="center">
        {projectsArr.map((each) => {
          return (
            <Grid className="ProjectBox" xs={3} md={3} lg={3} xl={3}>
              <span>{each.name}</span>
              <div>
                <Image
                  imageStyle={{ width: "100%", height: "100%" }}
                  // onMouseOver={e => (e.currentTarget.src=checkIfSecondImageExists(each.images))}
                  // onMouseOut={e => (e.currentTarget.src=each.images[0])}
                  src={each.image}
                />
                <Button>Github</Button>
              </div>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};
