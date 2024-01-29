import React, { useState } from 'react';
import "./App.css";
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollToUp/ScrollUp";
import Work from './components/work/Work';



function App() {
  const [themeClass, setThemeClass] = useState("");

  const themeHandler = () => {
    if (themeClass === "") {
      setThemeClass("dark_theme");
    } else {
      setThemeClass("");
    }
  };
  return (
    <div className={themeClass}>
      <Header themeSwitch={themeHandler} />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Work/>
        <Contact />
      </main>

      <Footer />
      <ScrollUp />
    </div>
  );
}

export default App;