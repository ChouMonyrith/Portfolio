import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import MySkills from "@/components/MySkills";
import Project from "@/components/Project";

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <MySkills />
      <Experience />
      <Project />
    </div>
  );
}
