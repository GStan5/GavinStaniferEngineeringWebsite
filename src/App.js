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

function App() {
  return (
    <>
      <div id="stars1"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>

      <div className="cta">
        <a href="#contact" download className="btn">
          <SiJirasoftware /> Software Engineer
        </a>
        <a href="#contact" className="btn btn-primary">
          <BsFillHouseFill /> Real Estate Agent
        </a>
      </div>

      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      {/* <Portfolio /> */}
      <Contact />
      <Footer />
    </>
  );
}

export default App;
