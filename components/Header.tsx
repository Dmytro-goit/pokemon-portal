"use client";

import Link from "next/link";
import { useState } from "react";
import { FaPaw, FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="bg-yellow-200 shadow-md">
      <div className="mx-auto px-4 py-3 max-w-screen-xl flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-2xl font-bold text-gray-800 "
          onClick={closeMenu}
        >
          <FaPaw className="text-orange-500" />
          Pokemons
        </Link>

        <nav className="hidden sm:flex gap-10 text-base font-medium text-gray-700">
          <Link href="/about" className="hover:underline hover:text-orange-600">
            About world
          </Link>
          <Link
            href="/search"
            className="hover:underline hover:text-orange-600"
          >
            Search
          </Link>
          <Link
            href="/register"
            className="hover:underline hover:text-orange-600"
          >
            Registration
          </Link>
        </nav>

        <button
          className="block sm:hidden text-2xl text-gray-800"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {isOpen && (
        <nav className="sm:hidden px-4 pb-4 flex flex-col gap-2 text-gray-700 font-medium">
          <Link
            href="/about"
            onClick={closeMenu}
            className="hover:underline hover:text-orange-600"
          >
            About world
          </Link>
          <Link
            href="/search"
            onClick={closeMenu}
            className="hover:underline hover:text-orange-600"
          >
            Search
          </Link>
          <Link
            href="/register"
            onClick={closeMenu}
            className="hover:underline hover:text-orange-600"
          >
            Registration
          </Link>
        </nav>
      )}
    </header>
  );
}
