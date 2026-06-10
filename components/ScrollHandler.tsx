"use client";

import React, { useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

function ScrollHandlerComponent() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const section = searchParams.get("section");
    if (section) {
      const element = document.getElementById(section);
      if (element) {
        // Slight delay to ensure DOM has fully painted
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
          window.history.replaceState(null, "", window.location.pathname);
        }, 150);
        return () => clearTimeout(timer);
      }
    }
  }, [searchParams]);

  return null;
}

export default function ScrollHandler() {
  return (
    <Suspense fallback={null}>
      <ScrollHandlerComponent />
    </Suspense>
  );
}
