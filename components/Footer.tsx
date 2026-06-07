import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="border-t border-black bg-white px-6 py-4 md:px-12 text-black">
      <div className="max-w-8xl mx-auto flex justify-between items-center">
        <div className="font-medium text-xs md:text-sm">
          © 2025 Rith.Dev — All rights reserved
        </div>
        <Link
          href="/#about"
          className="text-black text-xs md:text-sm font-bold hover:bg-black hover:text-white transition-colors duration-200 px-5 py-2"
        >
          ↑ BACK TO TOP
        </Link>
      </div>
    </footer>
  );
}
export default Footer;
