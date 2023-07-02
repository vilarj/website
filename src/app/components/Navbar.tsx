import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-zinc-900">
      <nav className="flex justify-between items-center w-[92%]  mx-auto text-white">
        <div className="nav-links duration-500 md:static absolute bg-zinc-900 md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full flex items-center px-5">
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
            <li className="text-blue-200 hover:text-teal-200">
              <Link href="/">Home</Link>
            </li>
            <li className="text-blue-200 hover:text-teal-300">
              <Link href="/projects">Projects</Link>
            </li>
            <li className="text-blue-200 hover:text-teal-400">
              <Link href="/contact">Contact</Link>
            </li>
            <li className="text-blue-200 hover:text-teal-500">
              <Link href="/youtube">Youtube</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
