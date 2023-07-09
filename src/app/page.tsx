"use client";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Background from "./components/Background";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <Background />
      <Footer />
    </div>
  );
}
