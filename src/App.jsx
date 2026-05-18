import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import GetHelp from "./pages/GetHelp";
import Donate from "./pages/Donate";
import Contact from "./pages/Contact";
import Resources from "./pages/Resources";
import NotFound from "./pages/NotFound";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/get-help" element={<GetHelp />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/notfound" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
