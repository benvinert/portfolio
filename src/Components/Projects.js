import { Grid } from "@material-ui/core";
import React, { useState, useRef } from "react";
import "../Styles/Projects.css";
import Cart from "../Styles/Images/Cart.png";
import New from "../Styles/Images/New.png";
import FitnessApp4 from "../Styles/Images/FitnessApp4.png";
import Image from "material-ui-image";
import CalculateApp1 from "../Styles/Images/CalculateApp1.png";
import { Button } from "@material-ui/core";
import { PopUp } from "./PopUp";
import { Link } from "react-router-dom";
import { FaToolbox } from "react-icons/fa";
import { withStyles } from "@material-ui/core/styles";
import undraw_projects from "../Styles/Ilustrations/undraw_projects.svg";

import {
  SiPython,
  SiFlask,
  SiJava,
  SiReact,
  SiSpring,
  SiDjango,
} from "react-icons/si";

const StyledButton = withStyles({
  root: {
    background: "#512da8",
  },
  label: {
    textTransform: "capitalize",
  },
})(Button);

export const Projects = ({ projectsRef }) => {
  const [open, setOpen] = useState({
    flag: false,
    name: "",
    desc: "",
  });

  const handleClickOpen = (name, desc) => {
    setOpen({ flag: true, name: name, desc: desc });
  };
  const handleClose = () => {
    setOpen({ ...open, flag: false });
  };

  var projectsArr = [
    {
      name: "Menu Nutrition",
      image: CalculateApp1,
      desc:
        "Customer can pick from 1000+ types of food and create his own nutrition menu and download it on pdf file.",
      github: "https://github.com/benvinert/Django-React-Menu-Nutrition",
      getIn: "https://nutrition-menu-frontend.herokuapp.com",
      tools: [
        { icon: <SiPython />, name: "Python" },
        { icon: <SiFlask />, name: "Flask" },
        { icon: <SiReact />, name: "React" },
      ],
    },
    {
      name: "Fitness Plan",
      image: FitnessApp4,
      desc: "Users can create their fitness plan and share it with other users",
      github: "https://github.com/benvinert/Java-Spring-React-FitnessApp-",
      getIn: "",
      tools: [
        { icon: <SiJava />, name: "Java" },
        { icon: <SiSpring />, name: "Spring" },
        { icon: <SiReact />, name: "React" },
      ],
    },
    {
      name: "E-ecommerce",
      image: New,
      desc:
        "web app who’s scrap than more 2000+ items each day within 14 minutes (optimized with multiprocessing ) from other sites and let to users buy this items.",
      github:
        "https://github.com/benvinert/Django-React-Scrapy-ecommerce-website",
      getIn: "https://frontend-ben-ecommerce.herokuapp.com",
      tools: [
        { icon: <SiPython />, name: "Python" },
        { icon: <SiDjango />, name: "Django" },
        { icon: <SiReact />, name: "React" },
      ],
    },
  ];

  return (
    <Grid className="projectsContainer" container>
      <Grid
        data-aos="fade-left"
        align="center"
        style={{ color: "#f44336" }}
        xs={12}
        md={12}
        lg={12}
        xl={12}
      >
        <h1 ref={projectsRef}>Projects</h1>
        <img src={undraw_projects} width="300rem" height="200rem" />
      </Grid>
      <Grid container align="center" justify="center">
        {projectsArr.map((each) => {
          return (
            <Grid
              className="ProjectBox"
              data-aos="fade-right"
              xs={3}
              md={3}
              lg={3}
              xl={3}
            >
              <span>{each.name}</span>
              <div>
                <Link onClick={() => handleClickOpen(each.name, each.desc)}>
                  <Image
                    imageStyle={{ width: "100%", height: "100%" }}
                    // onMouseOver={e => (e.currentTarget.src=checkIfSecondImageExists(each.images))}
                    // onMouseOut={e => (e.currentTarget.src=each.images[0])}
                    src={each.image}
                  />
                </Link>
                <Grid>
                  <span style={{ color: "#f44336" }}>
                    <FaToolbox />
                    Tools:
                  </span>
                  {each.tools.map((eachTool) => (
                    <div>
                      {eachTool.icon} {eachTool.name}
                    </div>
                  ))}
                </Grid>
                <PopUp handleClose={handleClose} open={open} />
                <a href={each.getIn} target="_blank">
                  <StyledButton
                    variant="contained"
                    textPrimary
                    color="secondary"
                  >
                    GET IN
                  </StyledButton>
                </a>
                <br />
                <a href={each.github} target="_blank">
                  <Button
                    style={{ marginTop: "5px" }}
                    variant="outlined"
                    color="secondary"
                  >
                    Github
                  </Button>
                </a>
              </div>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};
