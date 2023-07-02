import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-zinc-900">
      <nav className="text-white">
        <div>
          <span className="text-3xl cursor-pointer mx-2 md:hidden block"></span>

          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
            <li className="mx-4 my-6 md:my-0 text-blue-200 hover:text-teal-200">
              <Link href="/">Home</Link>
            </li>
            <li className="mx-4 my-6 md:my-0 text-blue-200 hover:text-teal-300">
              <Link href="/projects">Projects</Link>
            </li>
            <li className="mx-4 my-6 md:my-0 text-blue-200 hover:text-teal-400">
              <Link href="/contact">Contact</Link>
            </li>
            <li className="mx-4 my-6 md:my-0 text-blue-200 hover:text-teal-500">
              <Link href="/youtube">Youtube</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
