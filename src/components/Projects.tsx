
const projects = [
  {
    title: "Learning Management system",
    description: "Designed an e-learning platform with multimedia content, automated grading, instant feedback, and interactive discussion forums. Implemented secure user authentication for personalized access.",
    tech: ["React", "Django", "Tailwind CSS"],
    image: "/LearnCS.png",
    github: "https://github.com/maruf-shahriar/LearnCS-Frontend",
    demo: "https://learncs-app.web.app/",
  },
  {
    title: "Interview Preparation Website",
    description: "A social media platform where users create accounts, share interview experiences and tips, and engage by commenting and liking posts.",
    tech: ["React", "Django Rest framework", "Tailwind CSS"],
    image: "/InterviewApp.png",
    github: "https://github.com/maruf-shahriar/InterviewPrepApp-Frontend",
    demo: "https://interviewprep-app.web.app/",
  },
  {
    title: "Public key Infrastructure Implementation",
    description: "Built a web and DNS server to host multiple websites. Configured SSL certificates for secure connections and implemented robust security measures to protect the server from potential attacks.",
    tech: ["Ubuntu", "Apache Web Serve", "Bind9", "Snort"],
    image: "/PublicKey.png",
    github: "https://github.com/maruf-shahriar/Public-Key-Infrastructure-Implementation",
    demo: "#",
  },
];

const Projects = () => {
  return (
    <section className="py-20 " id="projects">
      <div className="container px-4">
        <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-xl backdrop-blur-xl bg-white/5 border border-white/10 overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="h-48 overflow-hidden">
  <img
    src={project.image}
    alt={project.title}
    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
  />
</div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-sm bg-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="text-sm text-blue-400 hover:text-blue-300"
                  >
                    GitHub →
                  </a>
                  <a
                    href={project.demo}
                    className="text-sm text-blue-400 hover:text-blue-300"
                  >
                    Live Demo →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
