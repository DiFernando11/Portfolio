// import { useState } from "react";
// import reactLogo from "./assets/react.svg";

import Nav from "./components/nav/index";
import "./App.css";
import About from "./components/about";
import Skill from "./components/skill";
import Projects from "./components/projects";
// import Contact from "./components/contact";
import Footer from "./components/footer";
import Contact from "./components/contact";
import { DataContextProvider } from "./context/context";

function App() {
  return (
    <DataContextProvider>
      <Nav />
      <main>
        <About />
        <Skill />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </DataContextProvider>
  );
}

export default App;
