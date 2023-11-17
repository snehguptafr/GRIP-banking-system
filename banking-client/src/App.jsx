import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Customers from "./pages/Customers";
import "./App.css"

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar  />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/customers" element={<Customers />} />
        </Routes>

      </BrowserRouter>
    </>
  );
}
