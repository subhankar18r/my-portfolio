import { headers } from "next/headers";

interface Project {
  name: string;
  description: string;
  techStack: string[];
  image: string;
  visitUrl: string;
  sourceUrl: string;
}

async function getProjects(): Promise<Project[]> {
  const headersList = await headers();
  const host = headersList.get("host");
  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";

  const res = await fetch(`${protocol}://${host}/projects`);

  if (!res.ok) {
    throw new Error("Failed to fetch projects");
  }

  return res.json();
}

export default async function Projects() {
  const projects = await getProjects();

  return (
    <section id="projects" className="scroll-mt-16 py-4">
      <h2 className="mb-6 text-center text-4xl font-bold">Projects</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="max-w-80 rounded-lg bg-gray-800 p-4 shadow-md"
          >
            <img
              src={project.image}
              alt={project.name}
              className="mb-4 h-48 w-full rounded-md object-cover"
            />
            <h3 className="text-xl font-semibold">{project.name}</h3>
            <p className="text-gray-400">{project.description}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.techStack.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="rounded-md bg-gray-700 px-2 py-1 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-4 flex gap-4">
              <a
                href={project.visitUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300"
              >
                Visit Site
              </a>
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300"
              >
                Source Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
