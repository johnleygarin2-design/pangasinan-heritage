"use client";

import { useState } from "react";
import NavigationItem from "../molecules/NavigationItem";
import Icon from "../atoms/Icon";

export default function HeaderNavigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <a
          href="/"
          onClick={closeMenu}
          className="
            text-base
            font-bold
            text-emerald-800
            sm:text-lg
          "
        >
          Pangasinan Heritage
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          aria-label={
            menuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          className="
            rounded-lg
            p-2
            text-gray-700
            hover:bg-gray-100
            focus:outline-none
            focus:ring-2
            focus:ring-emerald-600
            md:hidden
          "
        >
          <Icon name="menu" />
        </button>

        {/* Navigation */}
        <nav
          id="main-navigation"
          aria-label="Main navigation"
          className={`
            absolute
            left-0
            top-16
            w-full
            border-b
            border-gray-200
            bg-white
            px-4
            py-4
            shadow-md
            md:static
            md:w-auto
            md:border-0
            md:bg-transparent
            md:px-0
            md:py-0
            md:shadow-none
            ${menuOpen ? "block" : "hidden md:block"}
          `}
        >
          <div className="flex flex-col gap-1 md:flex-row md:items-center md:gap-2">

            <NavigationItem
              href="/"
              onClick={closeMenu}
            >
              Home
            </NavigationItem>

            <NavigationItem
              href="/heritage"
              onClick={closeMenu}
            >
              Heritage
            </NavigationItem>

            <NavigationItem
              href="/about"
              onClick={closeMenu}
            >
              About
            </NavigationItem>

          </div>
        </nav>

      </div>
    </header>
  );
}