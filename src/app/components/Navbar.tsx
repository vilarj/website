import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="Navbar">
      <ul>
        <li className="">
          <Link href="/">Home</Link>
        </li>
        <li className="">
          <Link href="/projects">Projects</Link>
        </li>
        <li className="">
          <Link href="/contact">Contact</Link>
        </li>
        <li className="">
          <Link href="/youtube">Youtube</Link>
        </li>
      </ul>
    </div>
  );
}
