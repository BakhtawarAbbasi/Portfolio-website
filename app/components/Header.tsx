"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FiDownload } from "react-icons/fi";

// Navigation links — single source of truth for desktop + mobile menus.
// `id` must match the id of the section it scrolls to.
const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const Header: React.FC = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false); // true once the user has scrolled down
  const [activeId, setActiveId] = useState("home"); // section currently on screen

  const toggleNav = () => setNavOpen((prev) => !prev);
  const closeNav = () => setNavOpen(false);

  // Add a glass blur + border once the user scrolls past the top
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Highlight the nav link of the section that is in the middle of the screen
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    links.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeNav();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = navOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [navOpen]);

  return (
    <>
      <header
  className={`sticky top-0 z-50 border-b px-4 py-2 font-body text-white transition-all duration-300 md:px-8 md:py-4 ${
    scrolled
      ? "border-teal-400/30 bg-[#00383b]/85 shadow-[0_6px_24px_rgba(0,0,0,0.45)] backdrop-blur-md"
      : "border-teal-400/20 bg-[#00383b] shadow-[0_4px_16px_rgba(0,0,0,0.3)]"
  }`}
>
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#home" aria-label="Go to top" className="relative w-32 shrink-0 md:w-40">
            <Image
              src="/logo.png"
              alt="Bakhtawar Abdul Kareem Logo"
              width={160}
              height={96}
              priority // logo is above the fold — load it eagerly
              className="h-auto w-full bg-transparent"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="ml-auto hidden items-center space-x-4 md:flex lg:space-x-7" aria-label="Main navigation">
            {links.map(({ id, label }) => {
              const isActive = activeId === id;
              return (
                <a
                  key={id}
                  href={`#${id}`}
                  aria-current={isActive ? "location" : undefined}
                  // Text link with an underline that grows on hover and stays on the active section
                  className={`relative py-1 font-body text-sm font-medium transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:rounded-full after:bg-teal-300 after:transition-all after:duration-300 after:content-[''] hover:text-teal-300 hover:after:w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-300 lg:text-base ${
                    isActive ? "text-teal-300 after:w-full" : "text-white/90 after:w-0"
                  }`}
                >
                  {label}
                </a>
              );
            })}
          </nav>

          {/* Download CV — outlined pill with a soft teal glow */}
          <a
            href="/Bakhtawar_Abdul_Kareem_CV.pdf"
            download="Bakhtawar_Abdul_Kareem_CV.pdf"
            className="hidden shrink-0 items-center gap-2 rounded-full border border-teal-400/50 bg-[#00383b] px-4 py-2 font-body text-sm font-medium text-white shadow-[0_0_18px_rgba(45,212,191,0.15)] transition duration-300 hover:border-teal-300 hover:bg-teal-300 hover:text-[#00383b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300 md:inline-flex lg:px-5 lg:text-base"
          >
            Download CV
            <FiDownload aria-hidden="true" />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="rounded-lg p-2 text-3xl text-white transition-colors duration-300 hover:text-teal-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-300 md:hidden"
            onClick={toggleNav}
            aria-label={navOpen ? "Close menu" : "Open menu"}
            aria-expanded={navOpen}
            aria-controls="mobile-menu"
          >
            {navOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
      </header>

      {/* The overlay and drawer live outside <header> on purpose: the header's blur effect
          would otherwise break `position: fixed` for anything inside it. */}

      {/* Dark overlay behind the drawer — clicking it closes the menu */}
      <div
        onClick={closeNav}
        aria-hidden="true"
        className={`fixed inset-0 z-[55] bg-black/60 transition-opacity duration-300 md:hidden ${
          navOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Mobile Navigation — drawer sliding in from the right.
          `invisible` when closed keeps its links out of keyboard tab order. */}
      <nav
        id="mobile-menu"
        aria-label="Mobile navigation"
        className={`fixed inset-y-0 right-0 z-[60] flex w-64 max-w-[80%] flex-col gap-1 border-l border-teal-700/40 bg-[#00383b] px-6 pt-20 font-body text-white shadow-2xl transition-[transform,visibility] duration-300 ease-in-out md:hidden ${
          navOpen ? "visible translate-x-0" : "invisible translate-x-full"
        }`}
      >
        {/* Close button inside the drawer for quick access */}
        <button
          type="button"
          onClick={closeNav}
          aria-label="Close menu"
          className="absolute right-4 top-4 rounded-lg p-2 text-3xl text-white transition-colors duration-300 hover:text-teal-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-300"
        >
          <AiOutlineClose />
        </button>

        {links.map(({ id, label }) => {
          const isActive = activeId === id;
          return (
            <a
              key={id}
              href={`#${id}`}
              onClick={closeNav}
              aria-current={isActive ? "location" : undefined}
              className={`rounded-lg px-3 py-3 text-lg font-medium transition-colors duration-300 hover:bg-white/5 hover:text-teal-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-300 ${
                isActive ? "bg-white/5 text-teal-300" : "text-white/90"
              }`}
            >
              {label}
            </a>
          );
        })}

        {/* Download CV inside the drawer too */}
        <a
          href="/Bakhtawar_Abdul_Kareem_CV.pdf"
          download="Bakhtawar_Abdul_Kareem_CV.pdf"
          onClick={closeNav}
          className="mt-4 flex items-center justify-center gap-2 rounded-full border border-teal-400/50 bg-[#00383b] px-5 py-3 text-center font-medium text-white shadow-[0_0_18px_rgba(45,212,191,0.15)] transition duration-300 hover:border-teal-300 hover:bg-teal-300 hover:text-[#00383b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300"
        >
          Download CV
          <FiDownload aria-hidden="true" />
        </a>
      </nav>
    </>
  );
};

export default Header;