import Image from "next/image";

interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  vercel: string;
  image: string;
  index?: number; // pass 0 for the featured (inverted) card
}

export function ProjectCard({ project }: { project: Project }) {
  const isFeatured = project.index === 0;

  return (
    <div
      className={[
        // layout
        "flex flex-col relative overflow-hidden",
        "border-2 border-black last:border-r-0",
        "px-9 pt-9 pb-10",
        // transition
        "transition-colors duration-200",
        // colours — featured starts inverted, plain starts white
        isFeatured
          ? "bg-black hover:bg-[#111]"
          : "bg-white hover:bg-black group",
      ].join(" ")}
    >
      {/* ── Index label ── */}
      <p
        className={[
          "text-[0.65rem] font-bold tracking-[0.18em] uppercase mb-5",
          isFeatured ? "text-[#aaa]" : "text-[#aaa] group-hover:text-[#666]",
        ].join(" ")}
      >
        {String((project.index ?? 0) + 1).padStart(2, "0")}
        {isFeatured && " — Featured"}
      </p>

      {/* ── Image thumbnail ── */}
      <div
        className={[
          "w-full aspect-video mb-6 overflow-hidden flex items-center justify-center",
          isFeatured
            ? "border border-[#2a2a2a] bg-[#1a1a1a]"
            : "border border-[#e0e0e0] bg-[#f5f5f5] group-hover:border-[#2a2a2a] group-hover:bg-[#1a1a1a]",
        ].join(" ")}
      >
        <Image
          src={project.image}
          alt={project.title}
          width={600}
          height={338}
          className="object-cover w-full h-full"
        />
      </div>

      {/* ── Title ── */}
      <h3
        className={[
          "text-[1.15rem] font-extrabold tracking-[-0.03em] leading-tight mb-0",
          isFeatured ? "text-white" : "text-black group-hover:text-white",
        ].join(" ")}
      >
        {project.title}
      </h3>

      {/* ── Divider ── */}
      <div
        className={[
          "w-full h-px my-3.5",
          isFeatured ? "bg-[#333]" : "bg-[#e0e0e0] group-hover:bg-[#444]",
        ].join(" ")}
      />

      {/* ── Description ── */}
      <p
        className={[
          "text-[0.825rem] font-normal leading-[1.7] flex-1 mb-5",
          isFeatured ? "text-[#999]" : "text-[#555] group-hover:text-[#aaa]",
        ].join(" ")}
      >
        {project.description}
      </p>

      {/* ── Tags ── */}
      <div className="flex flex-wrap gap-1.5 mb-6">
        {project.tags.map((tag, i) => (
          <span
            key={i}
            className={[
              "text-[0.6rem] font-bold tracking-[0.1em] uppercase px-2 py-0.5 border",
              isFeatured
                ? "border-[#444] text-[#aaa]"
                : "border-[#e0e0e0] text-[#777] group-hover:border-[#444] group-hover:text-[#aaa]",
            ].join(" ")}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* ── CTA buttons ── */}
      <div className="flex gap-2 mt-auto">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className={[
            "inline-flex items-center gap-1.5 text-[0.72rem] font-bold tracking-[0.08em] uppercase",
            "border px-4 py-2 transition-colors duration-150",
            isFeatured
              ? "border-[#555] text-white hover:bg-white hover:text-black hover:border-white"
              : "border-black text-black group-hover:border-[#555] group-hover:text-white hover:!bg-white hover:!text-black",
          ].join(" ")}
        >
          {/* GitHub icon */}
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
          </svg>
          GitHub
        </a>

        <a
          href={project.vercel}
          target="_blank"
          rel="noopener noreferrer"
          className={[
            "inline-flex items-center gap-1.5 text-[0.72rem] font-bold tracking-[0.08em] uppercase",
            "border px-4 py-2 transition-colors duration-150",
            isFeatured
              ? "border-[#555] text-white hover:bg-white hover:text-black hover:border-white"
              : "border-black text-black group-hover:border-[#555] group-hover:text-white hover:!bg-white hover:!text-black",
          ].join(" ")}
        >
          {/* Vercel / deploy icon */}
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 19.5h20L12 2z" />
          </svg>
          Live
        </a>
      </div>
    </div>
  );
}
