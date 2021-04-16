import logo from "./logo.svg";
import "./App.css";
import React, { useRef, useEffect } from "react";
import { Navbar } from "./Navbar/Navbar";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { Header } from "./Components/Header";
import { Projects } from "./Components/Projects";
import { About } from "./Components/About";
import { Stack } from "./Components/Stack";
import { Footer } from "./Components/Footer";
import { Contact } from "./Components/Contact";
import Particles from "react-particles-js";
import Grid from "@material-ui/core/Grid";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const executeScroll = (ref) => {
    window.scrollTo({ behavior: "smooth", top: ref.current.scrollIntoView() });
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <Router>
        <Particles
          className="particles"
          params={{
            particles: {
              shape: {
                type: "circle",
                stroke: {
                  width: 6,
                },
              },
              number: {
                value: 30,
                density: {
                  enable: true,
                  value_area: 900,
                },
              },
            },
          }}
        />
        <Grid container>
          <Grid item xs={12} md={12} lg={12} xl={12}>
            <Navbar
              projectsRef={projectsRef}
              about={aboutRef}
              executeScroll={executeScroll}
              contactRef={contactRef}
            />
          </Grid>
          <br />
          <br />
          <br />
          <Grid xs={12} md={12} lg={12} xl={12}>
            <Header executeScroll={executeScroll} aboutRef={aboutRef} />
            <Projects projectsRef={projectsRef} />
            <About aboutRef={aboutRef} />
            <Stack />
            <Contact contactRef={contactRef} />
            <Footer />
          </Grid>
        </Grid>
      </Router>
    </div>
  );
}

export default App;
