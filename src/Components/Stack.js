import React from "react";
import Grid from "@material-ui/core/Grid";
import {
  SiPython,
  SiFlask,
  SiJava,
  SiReact,
  SiSpring,
  SiDjango,
  SiRedux,
  SiJavascript,
} from "react-icons/si";
import "../Styles/Stack.css";
import undraw_code from "../Styles/Ilustrations/undraw_code.svg";

export const Stack = () => {
  const stack = {
    languages: [
      { name: "Java", icon: <SiJava /> },
      { name: "Python", icon: <SiPython /> },
      { name: "JavaScript", icon: <SiJavascript /> },
    ],
    frameworks: [
      { name: "React", icon: <SiReact /> },
      { name: "Spring", icon: <SiSpring /> },
      { name: "Django", icon: <SiDjango /> },
    ],
  };

  return (
    <Grid container className="stackContainer" justify="center">
      <img
        data-aos="fade-left"
        src={undraw_code}
        width="300rem"
        height="200rem"
      />
      <Grid data-aos="fade-right" container justify="center">
        <h1>My Full Stack</h1>
      </Grid>
      <Grid data-aos="fade-right" container style={{ fontSize: "2rem" }}>
        <Grid container justify="center">
          Languages :
          <Grid container style={{ padding: 20 }}>
            {stack.languages.map((eachLanguage) => (
              <Grid container justify="center">
                <span style={{ padding: 6 }}>{eachLanguage.icon}</span>
                {eachLanguage.name}
              </Grid>
            ))}
          </Grid>
          <Grid container justify="center">
            Frameworks :
            {stack.frameworks.map((eachLanguage) => (
              <Grid container justify="center">
                <span style={{ padding: 6 }}>{eachLanguage.icon}</span>
                {eachLanguage.name}
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
