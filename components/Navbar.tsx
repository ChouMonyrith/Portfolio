"use client";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 text-black bg-white border-b border-black px-6 py-4 md:px-12 flex justify-between items-center">
      <a href="#" className="font-extrabold text-md tracking-tight">
        CHOUMONYRITH - DEV
      </a>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8 font-medium">
        <a
          href="#about"
          className="text-black hover:underline hover:decoration-2 hover:underline-offset-4 transition-all"
        >
          About Me
        </a>
        <a
          href="#skills"
          className="text-black hover:underline hover:decoration-2 hover:underline-offset-4 transition-all"
        >
          Skills
        </a>
        <a
          href="#experiences"
          className="text-black hover:underline hover:decoration-2 hover:underline-offset-4 transition-all"
        >
          Experiences
        </a>
        <a
          href="#projects"
          className="text-black hover:underline hover:decoration-2 hover:underline-offset-4 transition-all"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="text-black hover:underline hover:decoration-2 hover:underline-offset-4 transition-all"
        >
          Contact Me
        </a>
      </div>

      <a
        href="#"
        className="bg-black text-white px-5 py-2 hover:bg-gray-800 transition-colors duration-200 font-semibold"
      >
        Resume
      </a>

      {/* Mobile Burger Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden flex flex-col gap-1.5 z-50"
        aria-label="Toggle Menu"
      >
        <span
          className={`w-6 h-0.5 bg-black transition-transform ${isOpen ? "rotate-45 translate-y-2" : ""}`}
        />
        <span
          className={`w-6 h-0.5 bg-black transition-opacity ${isOpen ? "opacity-0" : ""}`}
        />
        <span
          className={`w-6 h-0.5 bg-black transition-transform ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
        />
      </button>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="fixed inset-0 bg-white flex flex-col items-center justify-center gap-8 text-2xl font-bold md:hidden z-40">
          <a href="#about" onClick={() => setIsOpen(false)}>
            About Me
          </a>
          <a href="#skills" onClick={() => setIsOpen(false)}>
            Skills
          </a>
          <a href="#experiences" onClick={() => setIsOpen(false)}>
            Experiences
          </a>
          <a href="#projects" onClick={() => setIsOpen(false)}>
            Projects
          </a>
          <a href="#contact" onClick={() => setIsOpen(false)}>
            Contact Me
          </a>
          <a href="#" className="bg-black text-white px-8 py-3 text-lg mt-4">
            Resume
          </a>
        </div>
      )}
    </nav>
  );
}
