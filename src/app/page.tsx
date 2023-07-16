"use client";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Body from "./components/Body";

export default function Home() {
  return (
    <div className="bg-gradient-to-t from-[#68faff] to-[#74a3f5] h-screen">
      <div>
        <ToastContainer />
        <Navbar />
        <Body />
        <Footer />
      </div>
    </div>
  );
}
