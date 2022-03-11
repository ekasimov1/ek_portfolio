import React from "react";
import Container from "@mui/material/Container";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Module from "./components/Module";
import Footer from "./components/footer/Footer";
import Drawer from "./Drawer";

const App = () => {
  return (
    <div>
      <Drawer />
      <Container>
        <Header id="home" />
        <Module id="about" moduleTitle="ABOUT ME" moduleContent={<About />} />
        <Module
          id="skills"
          moduleTitle="MY SKILLS"
          moduleContent={<Skills />}
        />
        <Module
          id="projects"
          moduleTitle="MY PROJECTS"
          moduleContent={<Projects />}
        />
        <Module
          id="contact"
          moduleTitle="CONTACT"
          moduleContent={<Contact />}
        />
      </Container>

      <Footer />
    </div>
  );
};

export default App;
