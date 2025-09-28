import ProjectCard from "./Components/ProjectCard";

export const Projects: React.FC = () => {
  const projects = [
    {
      projectName: "PathFinder",
      projectImage: "/PathFinder.png",
      projectImageBgColor: "#aeb9bd",
      briefAbout:
        "An adaptive learning platform that personalizes educational content based on user performance and preferences",
      skillsLearnt: ["React", "PostgreSQL"],
      code: "https://github.com/your-username/pathfinder", // Added code field
    },
    {
      projectName: "DayzOut",
      projectImage: "/Dayzout.png",
      projectImageBgColor: "#aeb9bd",
      briefAbout:
        "A social media platform similar to Reddit, consisting of various communities where users can share and discuss content",
      skillsLearnt: ["React", "Django", "Tailwind"],
      code: "https://github.com/your-username/dayzout", // Added code field
    },
    {
      projectName: "FindU",
      projectImage: "/Findu.png",
      projectImageBgColor: "#aeb9bd",
      briefAbout:
        "GeoProfile Mapper with an admin dashboard for managing user profiles and locations",
      skillsLearnt: ["React", "Node.js", "MongoDB"],
      code: "https://github.com/your-username/findu", // Added code field
    },
    {
      projectName: "FloraVision",
      projectImage: "/Floravision.png",
      projectImageBgColor: "#aeb9bd",
      briefAbout:
        "A plant identification app that uses image recognition to identify plants and provide information about them",
      skillsLearnt: ["React", "Javascript"],
      code: "https://github.com/your-username/floravision", // Added code field
    },
  ];

  return (
    <div className="min-h-screen py-16 px-6" id="projects">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 max-w-1/3 flex items-center space-x-2">
          <h1 className="text-4xl font-bold text-accent mb-2 font-heading whitespace-nowrap">
            #Projects
          </h1>
          <div className="flex-1 h-1 bg-accent"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              projectName={project.projectName}
              projectImage={project.projectImage}
              projectImageBgColor={project.projectImageBgColor}
              briefAbout={project.briefAbout}
              skillsLearnt={project.skillsLearnt}
              code={project.code} // Pass the new code prop
              className="cursor-default" // Prevents the pointer cursor on hover
            />
          ))}
        </div>
      </div>
    </div>
  );
};
