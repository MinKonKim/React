import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Support from "./components/Support";
import Feedback from "./components/Feedback";
import Feature from "./components/Feature";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Support />
      <Feature />
      <Feedback />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
