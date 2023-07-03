import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Body from "../components/Background";

export default function Contact() {
  return (
    <div>
      <Navbar />
      <h1>Contact</h1>
      <body className="bg-gradient-to-t from-[#ddee90] to-[#4b7dd4] h-screen"/>
      <Footer />
    </div>
  );
}
