import Image from "next/image";
import FadeUp from "./FadeUp";
import IllustrateImage from "./IllustrateImage";
import Link from "next/link";
import { SOCIALS } from "@/data/Social";

export default function Hero() {
  return (
    <section
      id="about"
      className="py-8 px-12 md:py-12 max-w-8xl mx-auto grid md:grid-cols-2 gap-4 md:gap-8 items-center w-full min-h-[calc(100vh-65px)] md:h-[calc(100vh-65px)] text-black scroll-mt-24"
    >
      <div className="flex pb-16 sm:pb-4 md:pb-24 flex-col gap-4 md:gap-6">
        <FadeUp delay={100}>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-none text-black">
            Software Developer
            <br />
            <span className="decoration-1 underline-offset-8">building</span>
            <br />
            clean and responsive UI
            <br />
            based in phnom penh
          </h1>
        </FadeUp>

        <FadeUp delay={200}>
          <p className="text-gray-600 text-base md:text-xl max-w-lg leading-relaxed">
            Junior developer focused on building responsive web interfaces with
            React and modern frontend tools. I enjoy turning designs into
            simple, functional, and scalable applications.
          </p>
        </FadeUp>

        <FadeUp delay={300}>
          <div className="flex gap-4">
            {SOCIALS.map((platform) => (
              <Link
                key={platform.id}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 border border-black flex items-center justify-center font-bold hover:bg-black hover:text-white transition-colors duration-200 relative"
              >
                <span className="sr-only">{platform.label}</span>
                <Image
                  src={platform.icon}
                  alt={platform.label}
                  width={24}
                  height={24}
                  className="object-contain transition-all duration-200 group-hover:invert"
                />
              </Link>
            ))}
          </div>
        </FadeUp>
      </div>
      <FadeUp delay={400}>
        <div className="h-1/2">
          <IllustrateImage />
        </div>
      </FadeUp>
    </section>
  );
}
