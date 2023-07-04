import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Forms from "../components/Forms";

export default function Contact() {
  return (
    <div>
      <Navbar />
      <body className="bg-gradient-to-t from-[#ddee90] to-[#4b7dd4] h-screen" />
      <Forms />
      <Footer />
    </div>
  );
}
