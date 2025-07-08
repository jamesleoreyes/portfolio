import Link from "next/link";
import { resumeData } from "../data";
import { ExternalLink } from "lucide-react";
import { GitHub } from "@/components/icons";

function ProjectCard({ project }: { project: typeof resumeData.projects[0] }) {
  return (
    <div className="border p-6 space-y-4 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <h3 className="text-lg font-semibold">{project.name}</h3>
        <div className="flex gap-2">
          {project.url && (
            <Link
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary"
            >
              <ExternalLink className="w-4 h-4" />
            </Link>
          )}
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary"
            >
              <GitHub className="w-4 h-4" />
            </Link>
          )}
        </div>
      </div>

      <p className="text-muted-foreground text-sm leading-relaxed">
        {project.description}
      </p>

      <div>
        <h4 className="font-semibold mb-2 text-sm">Key Highlights:</h4>
        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
          {project.highlights.map((highlight, idx) => (
            <li key={idx}>{highlight}</li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-semibold mb-2 text-sm">Technologies:</h4>
        <div className="flex flex-wrap gap-1">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="bg-muted text-muted-foreground px-2 py-1 text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6 text-primary border-b pb-2">Featured Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {resumeData.projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}