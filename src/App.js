import "./App.scss";

import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

import { SiJirasoftware } from "react-icons/si";
import { BsFillHouseFill } from "react-icons/bs";

import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [softwareEngineer, setSoftwareEngineer] = useState(true);

  return (
    <>
      {/* background */}
      <div id="stars1"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>

      {/* top header buttons */}
      <div className="ctas">
        <a onClick={() => setSoftwareEngineer(true)} className="btn">
          <SiJirasoftware /> Software Engineer
        </a>
        <a onClick={() => setSoftwareEngineer(false)} className="btn">
          <BsFillHouseFill /> Real Estate Agent
        </a>
      </div>

      {/* state deciding content shown */}
      {softwareEngineer ? (
        <>
          <Header />
          <Nav />
          <About />
          <Experience />
          <Services />
          {/* <Portfolio /> */}
          <Contact />
          <Footer />
        </>
      ) : (
        <>
          <Header />
          {/* <Nav /> */}
          {/* <About /> */}
          {/* <Experience /> */}
          {/* <Services /> */}
          {/* <Portfolio /> */}
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
