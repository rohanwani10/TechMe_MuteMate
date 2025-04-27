import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Features from "./Pages/Features";
import About from "./Pages/About";
import Download from "./Pages/Download";
import Support from "./Pages/Support";
import PrivacyAndPolicy from "./Pages/PrivacyAndPolicy";
import Terms from "./Pages/Terms";
import Navbar from "./Pages/Navbar";
import Footer from "./Pages/Footer";
import Guidlines from "./Pages/Guidlines";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/about" element={<About />} />
        <Route path="/download" element={<Download />} />
        <Route path="/support" element={<Support />} />
        <Route path="/privacyandpolicy" element={<PrivacyAndPolicy />} />
        <Route path="/termsandcondition" element={<Terms />} />
        <Route path="/Guidlines" element={<Guidlines />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
