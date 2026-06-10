import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import MySkills from "@/components/MySkills";
import Project from "@/components/Project";
import ScrollHandler from "@/components/ScrollHandler";

export default function Home() {
  return (
    <div className="bg-white">
      <ScrollHandler />
      <Hero />
      <MySkills />
      <Experience />
      <Project />
    </div>
  );
}
