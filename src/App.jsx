import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Nav from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";
import Home from "./Components/Home.jsx";
import About from "./Components/About.jsx";
import Project from "./Components/Projects.jsx";
import Contact from "./Components/Contact.jsx";
import MoveToTop from "./Components/MoveToTop.jsx";
import CircleLoader from "react-spinners/CircleLoader";
import "./App.css";
import { IoCallSharp } from "react-icons/io5";
import { FaEnvelope } from "react-icons/fa";
function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation()

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1900);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="loader">
          <CircleLoader
            color={"#011c38"}
            loading={true}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <>
        <div className="contact-nav-bar">
        <div className="contact-nav-bar-item"><IoCallSharp />8897293968 </div>
        <div className="contact-nav-bar-item"><FaEnvelope />sevenhillsenterprisestpt@gmail.com </div></div>
          <Nav />
          <MoveToTop />

          <TransitionGroup>
            <CSSTransition key={location.key} classNames="fade" timeout={500}>
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Services" element={<Project />} />
                <Route path="/Contact" element={<Contact />} />
              </Routes>
            </CSSTransition>
          </TransitionGroup>

          <Footer />
        </>
      )}
    </div>
  );
}

export default App
