import "./App.css";
import Navigation from "./component/Navigation";
import Resume from "./component/Resume";
import Aboutme from "./component/Aboutme";
import Skills from "./component/Skills";
import Experiences from "./component/Experiences";
import Education from "./component/Education";
import Projects from "./component/Projects";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Notfound from "./component/Notfound";
import ScrollToTop from "./component/ScrollToTop";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navigationside from "./component/Navigationside";
import { useState } from "react";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navigation />
        <Switch>
          <Route path="/education">
            <Education />
          </Route>
          <Route path="/experience">
            <Experiences />
            <Navigationside />
          </Route>
          <Route path="/about">
            <Aboutme />
            <Skills />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route exact path="/">
            <Resume />
          </Route>  
          <Route component={Notfound} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
