import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Journey from "./pages/Journey";
import Toddler from "./pages/Toddler";
import EarlyYears from "./pages/EarlyYears";
import Primary from "./pages/Primary";
import Teenager from "./pages/Teenager";
import PreTeen from "./pages/PreTeen";

function App() {
  return (
    <>
      <Navbar />

      <Home />

      <Journey />
      <Toddler />
      <EarlyYears />
      <Primary />
      <PreTeen />
      <Teenager />

      <main>
        <section className="section">
          <div className="container">
            <h1>Christian Homeschool Platform</h1>
            <p>A learning journey designed to grow with your child.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
