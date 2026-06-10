"use client";

import React from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

function Footer() {
  const router = useRouter();
  const pathname = usePathname();

  const handleBackToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push("/?section=about");
    }
  };

  return (
    <footer className="border-t border-black bg-white px-6 py-4 md:px-12 text-black">
      <div className="max-w-8xl mx-auto flex justify-between items-center">
        <div className="font-medium text-xs md:text-sm">
          © 2026 Rith.Dev — All rights reserved
        </div>
        <Link
          href="/#about"
          onClick={handleBackToTop}
          className="text-black text-xs md:text-sm font-bold hover:bg-black hover:text-white transition-colors duration-200 px-5 py-2 cursor-pointer"
        >
          ↑ BACK TO TOP
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
