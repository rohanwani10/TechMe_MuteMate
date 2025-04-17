import {HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Features from "./Pages/Features";
import About from "./Pages/About";
import Download from "./Pages/Download";
import Support from "./Pages/Support";
import PrivacyAndPolicy from "./Pages/PrivacyAndPolicy";
import Terms from "./Pages/Terms";
import Navbar from "./Pages/Navbar";
import Footer from "./Pages/Footer";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/TechMe_MuteMate/" element={<Home />} />
        <Route path="/TechMe_MuteMate/features" element={<Features />} />
        <Route path="/TechMe_MuteMate/about" element={<About />} />
        <Route path="/TechMe_MuteMate/download" element={<Download />} />
        <Route path="/TechMe_MuteMate/support" element={<Support />} />
        <Route path="/TechMe_MuteMate/privacyandpolicy" element={<PrivacyAndPolicy />} />
        <Route path="/TechMe_MuteMate/termsandcondition" element={<Terms />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
