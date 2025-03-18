import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/NavBar";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import MainHome from "./Pages/MainHome";
import Facility from "./Pages/Facility";
import Gallery from "./Pages/Gallery";
import Careers from "./Pages/Careers";
import ContactUs from "./Pages/ContactUs";

function App() {
  return (
    <Router>
      {" "}
      {/* Ensure Routes are inside BrowserRouter */}
      <Navbar />
      <Routes>
        <Route path="/" element={<MainHome />} />
        {/* Fixed JSX component */}
        <Route path="/facility" element={<Facility />} /> {/* Facility Page */}
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
