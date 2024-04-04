import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import SkillesIcones from "./SkillsIcones";

import "./index.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/Footer" element={<Footer/>}/> */}
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
