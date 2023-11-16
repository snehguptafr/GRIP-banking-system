import {useState} from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Customers from "./pages/Customers";

export default function App() {
  const [activePage, setActivePage] = useState("home");

  return (
    <>
      <BrowserRouter>
        <Navbar active={activePage} setActive={setActivePage} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/customers" element={<Customers />} />
        </Routes>

      </BrowserRouter>
    </>
  );
}
