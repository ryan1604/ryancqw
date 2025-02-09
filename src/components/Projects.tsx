import projectData from "@/data/projects.json";
import ProjectCard from "@/components/ProjectCard";

type Props = {
  featured?: boolean;
};

const Projects = ({ featured }: Props) => {
  let projects = projectData.projects;
  if (featured) {
    projects = projects.filter((project) => project.featured);
  }

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {projects.map((project, i) => (
        <ProjectCard key={i} project={project} />
      ))}
    </section>
  );
};

export default Projects;
