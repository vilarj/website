import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2023 <label className="text-white">Vilarj</label> | All Rights
        Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li className="text-sky-50 italic">
          <Link href="/about" className="mr-4 md:mr-6 hover:text-yellow-200">
            About
          </Link>
        </li>
      </ul>
    </footer>
  );
}
