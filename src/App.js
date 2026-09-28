import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Navbar />

      <Home />

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
