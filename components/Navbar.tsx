"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    e.preventDefault();
    if (pathname === "/") {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push(`/?section=${targetId}`);
    }
    setIsOpen(false);
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push("/");
    }
  };

  return (
    <nav className="sticky top-0 z-50 text-black bg-white border-b border-black px-6 py-4 md:px-12 flex justify-between items-center">
      <Link
        href="/"
        onClick={handleLogoClick}
        className="font-extrabold text-md tracking-tight"
      >
        CHOUMONYRITH - OPEN TO WORK
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8 font-medium">
        <Link
          href="/#about"
          onClick={(e) => handleNavClick(e, "about")}
          className="text-black hover:underline hover:decoration-2 hover:underline-offset-4 transition-all"
        >
          About Me
        </Link>
        <Link
          href="/#skills"
          onClick={(e) => handleNavClick(e, "skills")}
          className="text-black hover:underline hover:decoration-2 hover:underline-offset-4 transition-all"
        >
          Skills
        </Link>
        <Link
          href="/#experiences"
          onClick={(e) => handleNavClick(e, "experiences")}
          className="text-black hover:underline hover:decoration-2 hover:underline-offset-4 transition-all"
        >
          Experiences
        </Link>
        <Link
          href="/#projects"
          onClick={(e) => handleNavClick(e, "projects")}
          className="text-black hover:underline hover:decoration-2 hover:underline-offset-4 transition-all"
        >
          Projects
        </Link>
        <Link
          href="/#contact"
          onClick={(e) => handleNavClick(e, "contact")}
          className="text-black hover:underline hover:decoration-2 hover:underline-offset-4 transition-all"
        >
          Contact Me
        </Link>
      </div>

      <a
        href="/resume/MONYRITHCHOU-CV.pdf"
        download="MONYRITHCHOU-CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
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
          <Link href="/#about" onClick={(e) => handleNavClick(e, "about")}>
            About Me
          </Link>
          <Link href="/#skills" onClick={(e) => handleNavClick(e, "skills")}>
            Skills
          </Link>
          <Link
            href="/#experiences"
            onClick={(e) => handleNavClick(e, "experiences")}
          >
            Experiences
          </Link>
          <Link
            href="/#projects"
            onClick={(e) => handleNavClick(e, "projects")}
          >
            Projects
          </Link>
          <Link href="/#contact" onClick={(e) => handleNavClick(e, "contact")}>
            Contact Me
          </Link>
          <a
            href="/resume/MONYRITHCHOU-CV.pdf"
            download="MONYRITHCHOU-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-8 py-3 text-lg mt-4"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
}
