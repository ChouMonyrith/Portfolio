"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface ProjectImageSliderProps {
  images: string[];
  title: string;
}

export default function ProjectImageSlider({ images, title }: ProjectImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const totalImages = images.length;

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalImages);
  }, [totalImages]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalImages) % totalImages);
  }, [totalImages]);

  // Keyboard navigation for the lightbox
  useEffect(() => {
    if (!isLightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "Escape") {
        setIsLightboxOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen, handleNext, handlePrev]);

  if (!images || totalImages === 0) {
    return (
      <div className="w-full aspect-video border-2 border-black bg-[#f5f5f5] flex items-center justify-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <p className="font-bold text-gray-500 uppercase tracking-widest text-xs md:text-sm">
          No preview images available
        </p>
      </div>
    );
  }

  const activeImage = images[currentIndex];

  return (
    <div className="flex flex-col gap-4 w-full">
      {/* ── Main Viewport ── */}
      <div className="w-full aspect-video border-2 border-black bg-[#f5f5f5] overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative group select-none">
        
        {/* Clickable Image Container (opens Lightbox) */}
        <div
          onClick={() => setIsLightboxOpen(true)}
          className="w-full h-full cursor-zoom-in relative"
          title="Click to view fullscreen"
        >
          <Image
            src={activeImage}
            alt={`${title} Preview Screenshot ${currentIndex + 1}`}
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            priority
            className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-[1.01]"
          />
        </div>

        {/* ── Next/Prev Overlays (Visible on Hover/Desktop, Always Interactive) ── */}
        {totalImages > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              aria-label="Previous Slide"
              className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-white text-black border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-black hover:text-white hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all cursor-pointer z-10 opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              aria-label="Next Slide"
              className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-white text-black border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-black hover:text-white hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all cursor-pointer z-10 opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </>
        )}

        {/* ── Slide Index Counter Badge ── */}
        <div className="absolute bottom-4 right-4 bg-black text-white font-mono font-black text-xs md:text-sm px-3 py-1.5 border border-black shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] z-10 pointer-events-none">
          {String(currentIndex + 1).padStart(2, "0")} / {String(totalImages).padStart(2, "0")}
        </div>
      </div>

      {/* ── Scrollable Thumbnail Rail ── */}
      {totalImages > 1 && (
        <div className="w-full flex gap-3 overflow-x-auto py-2.5 px-0.5 scrollbar-thin scrollbar-thumb-black scrollbar-track-gray-100">
          {images.map((img, index) => {
            const isActive = index === currentIndex;
            return (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-28 md:w-36 aspect-video shrink-0 relative border-2 overflow-hidden cursor-pointer transition-all duration-200 focus:outline-none ${
                  isActive
                    ? "border-black scale-[1.02] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-10"
                    : "border-black/20 opacity-60 hover:opacity-100 hover:border-black/50"
                }`}
              >
                <Image
                  src={img}
                  alt={`${title} Thumbnail ${index + 1}`}
                  fill
                  sizes="150px"
                  className="object-contain w-full h-full bg-[#fafafa]"
                />
              </button>
            );
          })}
        </div>
      )}

      {/* ── Fullscreen Lightbox Modal ── */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 md:p-8 animate-fade-in select-none">
          {/* Modal Header */}
          <div className="w-full flex items-center justify-between border-b border-white/20 pb-4">
            <div>
              <h2 className="text-white text-lg md:text-xl font-extrabold uppercase tracking-wider">
                {title}
              </h2>
              <p className="text-gray-400 text-xs md:text-sm mt-0.5">
                Screenshot {currentIndex + 1} of {totalImages}
              </p>
            </div>
            
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="bg-white text-black border-2 border-black px-4 py-2 font-bold uppercase tracking-wider text-xs md:text-sm shadow-[3px_3px_0px_0px_rgba(255,255,255,0.4)] hover:bg-black hover:text-white hover:border-white hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all cursor-pointer"
            >
              Close [Esc]
            </button>
          </div>

          {/* Modal Viewport (Large Image Viewer) */}
          <div className="relative flex-1 w-full max-h-[72vh] flex items-center justify-center my-auto px-4 md:px-12">
            
            {/* Modal Image Wrapper */}
            <div className="relative w-full h-full max-w-5xl flex items-center justify-center">
              <Image
                src={activeImage}
                alt={`${title} Preview Fullscreen ${currentIndex + 1}`}
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-contain w-full h-full"
                priority
              />
            </div>

            {/* Modal Next/Prev Controls */}
            {totalImages > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  aria-label="Previous Slide"
                  className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white text-black border-2 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-black hover:text-white hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all cursor-pointer z-10"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next Slide"
                  className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white text-black border-2 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-black hover:text-white hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all cursor-pointer z-10"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </>
            )}
          </div>

          {/* Modal Footer / Navigation Instructions */}
          <div className="w-full flex flex-col md:flex-row items-center justify-between border-t border-white/20 pt-4 text-center md:text-left gap-2">
            <span className="text-gray-400 text-xs md:text-sm font-medium tracking-wide">
              Tip: Use Left / Right arrow keys to navigate slides.
            </span>
            <div className="bg-white text-black font-mono font-black text-xs md:text-sm px-3.5 py-1.5 border-2 border-black shadow-[3px_3px_0px_0px_rgba(255,255,255,0.4)]">
              {String(currentIndex + 1).padStart(2, "0")} / {String(totalImages).padStart(2, "0")}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
