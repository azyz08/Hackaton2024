import { Route, Routes } from "react-router-dom";
import "./App.scss"
import Navbar from "./components/navbar";
import useMode from "./utils/zustand";
import Home from "./pages/home";
import About from "./pages/about";
import Murojaat from "./pages/murojaat";
import Contact from "./pages/contact";


export default function App() {
  const { darkMode } = useMode();
  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <Navbar />
      <div className="bigBox duration-300 dark:bg-[#121212] dark:text-white bg-white text-black">

        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/murojaat" element={<Murojaat />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
