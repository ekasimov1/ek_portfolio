import React, { useEffect } from "react";
import Container from "@mui/material/Container";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Module from "./components/Module";
import Footer from "./components/footer/Footer";


const App = () => {


  return (
    <div>
      <Container>
        <Header />
        <Module
          moduleTitle="ABOUT ME"
          moduleContent={<About />}
        />
        <Module moduleTitle="MY SKILLS" moduleContent={<About />} />
        <Module moduleTitle="MY RECENT PROJECTS" />
      </Container>

      <Footer />
    </div>
  );
};

export default App;
