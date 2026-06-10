import { notFound } from "next/navigation";
import Link from "next/link";
import Projects from "@/data/Projects/Project";
import React from "react";
import ProjectImageSlider from "@/components/ProjectImageSlider";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const project = Projects.find((p) => p.id === id);

  if (!project) {
    return {
      title: "Project Not Found | Chou Monyrith Portfolio",
      description: "The requested project details could not be found.",
    };
  }

  return {
    title: `${project.title} | Chou Monyrith Portfolio`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Chou Monyrith Portfolio`,
      description: project.description,
      url: `https://github.com/ChouMonyrith/Portfolio/projects/${id}`,
      siteName: "Chou Monyrith Portfolio",
      images: [
        {
          url: project.image[0],
          width: 1200,
          height: 630,
          alt: `${project.title} Project Preview Screenshot`
        }
      ],
      type: "article"
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Chou Monyrith Portfolio`,
      description: project.description,
      images: [project.image[0]]
    }
  };
}

export async function generateStaticParams() {
  return Projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { id } = await params;
  const project = Projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white text-black py-16 px-6 md:px-12 max-w-8xl mx-auto">
      {/* Back Button */}
      <div className="mb-10">
        <Link
          id="back-to-projects-btn"
          href="/?section=projects"
          className="inline-flex items-center gap-2 text-sm font-bold tracking-[0.08em] uppercase border border-black px-5 py-2.5 hover:bg-black hover:text-white transition-colors duration-200"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          Back to Projects
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 items-start">
        {/* Main Content (Title, Hero Image, Descriptions, Features) */}
        <section className="lg:col-span-2 flex flex-col gap-8">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight leading-none text-black mb-4">
              {project.title}
            </h1>
            <p className="text-gray-600 text-lg md:text-xl font-medium leading-relaxed border-l-4 border-black pl-4">
              {project.description}
            </p>
          </div>

          {/* Interactive Image Slider Showcase */}
          <ProjectImageSlider images={project.image} title={project.title} />

          {/* Detailed Narrative */}
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-black border-b border-black pb-2">
              Project Overview
            </h2>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed whitespace-pre-line">
              {project.longDescription || project.description}
            </p>
          </div>

          {/* Key Features */}
          {project.features && project.features.length > 0 && (
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-black border-b border-black pb-2">
                Key Features
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                {project.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex gap-3 items-start border border-black/10 bg-gray-50/50 p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
                  >
                    <span className="flex items-center justify-center w-6 h-6 rounded-none bg-black text-white text-xs font-bold shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-gray-700 text-sm md:text-base font-medium">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>

        {/* Sidebar Info & CTAs */}
        <aside className="flex flex-col gap-6 lg:sticky lg:top-28">
          <div className="border-2 border-black p-6 bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="text-xl font-black uppercase tracking-wider text-black mb-6 border-b-2 border-black pb-2">
              Project Specifications
            </h3>

            <div className="flex flex-col gap-5 mb-8">
              {project.role && (
                <div>
                  <h4 className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-1">
                    My Role
                  </h4>
                  <p className="font-extrabold text-black text-base md:text-lg uppercase">
                    {project.role}
                  </p>
                </div>
              )}

              {project.timeline && (
                <div>
                  <h4 className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-1">
                    Timeline
                  </h4>
                  <p className="font-extrabold text-black text-base md:text-lg uppercase">
                    {project.timeline}
                  </p>
                </div>
              )}

              <div>
                <h4 className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-2">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs font-bold tracking-wider uppercase px-2.5 py-1 border border-black bg-white text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Actions */}
            <div className="flex flex-col gap-3">
              {project.vercel && project.vercel !== "" && (
                <a
                  id={`live-demo-${project.id}`}
                  href={project.vercel}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 font-bold tracking-[0.08em] uppercase border-2 border-black bg-black text-white py-3 hover:bg-white hover:text-black transition-colors duration-200 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="shrink-0"
                  >
                    <path d="M12 2L2 19.5h20L12 2z" />
                  </svg>
                  Visit Live Site
                </a>
              )}

              <a
                id={`github-repo-${project.id}`}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 font-bold tracking-[0.08em] uppercase border-2 border-black bg-white text-black py-3 hover:bg-black hover:text-white transition-colors duration-200 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
                View Repository
              </a>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
