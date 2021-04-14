import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./Navbar/Navbar";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { Header } from "./Components/Header";
import { Projects } from "./Components/Projects";
import { About } from "./Components/About";
import Particles from "react-particles-js";
import Grid from "@material-ui/core/Grid";

function App() {
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
            <Navbar />
          </Grid>
          <br />
          <br />
          <br />
          <Grid xs={12} md={12} lg={12} xl={12}>
            <Header />
            <Projects />
            <About />
          </Grid>
        </Grid>
      </Router>
    </div>
  );
}

export default App;
