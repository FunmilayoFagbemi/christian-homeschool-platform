import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Journey from "./pages/Journey";

import Toddler from "./pages/Toddler";
import EarlyYears from "./pages/EarlyYears";
import Primary from "./pages/Primary";
import PreTeen from "./pages/PreTeen";
import Teenager from "./pages/Teenager";

import Learn from "./pages/Learn";
import Faith from "./pages/Faith";
import CreateDiscover from "./pages/CreateDiscover";
import ParentHub from "./pages/ParentHub";
import Resources from "./pages/Resources";
import OurStory from "./pages/OurStory";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/journey" element={<Journey />} />

        <Route path="/journey/toddler" element={<Toddler />} />
        <Route path="/journey/early-years" element={<EarlyYears />} />
        <Route path="/journey/primary" element={<Primary />} />
        <Route path="/journey/pre-teen" element={<PreTeen />} />
        <Route path="/journey/teenager" element={<Teenager />} />

        <Route path="/learn" element={<Learn />} />
        <Route path="/faith" element={<Faith />} />
        <Route path="/create-discover" element={<CreateDiscover />} />
        <Route path="/parent-hub" element={<ParentHub />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/our-story" element={<OurStory />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
