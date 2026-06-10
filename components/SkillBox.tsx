"use client";
import Image from "next/image";
import FadeUp from "./FadeUp";
import { useState } from "react";
import type Skill from "@/type/Skill";
import { SKILLS } from "@/data/Skills";

export default function SkillBox() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 border-l border-t border-black bg-white">
      <div className="border-r border-b border-black p-8 md:p-12 flex flex-col justify-center">
        <FadeUp delay={100}>
          <h2 className="text-3xl md:text-5xl font-extrabold uppercase text-black">
            My Skills
          </h2>
        </FadeUp>

        <FadeUp delay={200}>
          <p className="mt-4 text-sm md:text-base text-gray-600 max-w-xs">
            A list of tools, frameworks, and technologies I work with to build
            high-performance web products.
          </p>
        </FadeUp>
      </div>

      <div className="lg:col-span-2 grid grid-cols-2 lg:grid-cols-4">
        {SKILLS.map((skill, index) => (
          <SkillCard key={skill.id} skill={skill} index={index} />
        ))}
      </div>
    </div>
  );
}

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div
      className="
        group
        flex flex-col items-center justify-center
        p-8
        border-r border-b border-black
        bg-white text-black
        hover:bg-black hover:text-white
        transition-all duration-300
      "
    >
      <FadeUp delay={100 + index * 50}>
        <div className="flex flex-col items-center">
          {!imageError && (
            <div className="relative w-12 h-12">
              <Image
                src={skill.icon}
                alt={skill.label}
                fill
                className="
                  object-contain
                  transition-all duration-300
                  group-hover:scale-110
                  group-hover:invert
                "
                onError={() => setImageError(true)}
              />
            </div>
          )}

          <span className="mt-4 font-bold text-sm md:text-base uppercase tracking-tight">
            {skill.label}
          </span>
        </div>
      </FadeUp>
    </div>
  );
}
