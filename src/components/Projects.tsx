import { ExternalLink, Github } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with modern payment integration, inventory management, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Cloud Infrastructure Automation",
      description: "Terraform modules and CI/CD pipelines for automated cloud infrastructure deployment and management.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80",
      technologies: ["Terraform", "AWS", "Docker", "Kubernetes", "Jenkins"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Real-time Analytics Dashboard",
      description: "Interactive dashboard for real-time data visualization with WebSocket connections and responsive charts.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
      technologies: ["React", "D3.js", "Socket.io", "Express", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Microservices API Gateway",
      description: "Scalable API gateway with rate limiting, authentication, and service discovery for microservices architecture.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80",
      technologies: ["Node.js", "Kong", "Docker", "Redis", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Mobile-First PWA",
      description: "Progressive web application with offline capabilities, push notifications, and native-like experience.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80",
      technologies: ["React", "PWA", "Service Workers", "IndexedDB", "Firebase"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "DevOps Monitoring Suite",
      description: "Comprehensive monitoring solution with alerting, log aggregation, and performance metrics visualization.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
      technologies: ["Grafana", "Prometheus", "ELK Stack", "Docker", "Kubernetes"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are some of the projects I've worked on recently
          </p>
        </div>

        <div className="grid gap-8">
          {/* Featured Projects */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {projects.filter(p => p.featured).map((project, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 overflow-hidden hover:scale-105"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-full text-purple-300 text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.liveUrl}
                      className="flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex items-center text-gray-400 hover:text-gray-300 transition-colors"
                    >
                      <Github size={16} className="mr-2" />
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Other Projects */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(p => !p.featured).map((project, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 overflow-hidden hover:scale-105"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-3 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-full text-purple-300 text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-purple-300 text-xs">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  <div className="flex space-x-3">
                    <a
                      href={project.liveUrl}
                      className="flex items-center text-purple-400 hover:text-purple-300 transition-colors text-sm"
                    >
                      <ExternalLink size={14} className="mr-1" />
                      Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex items-center text-gray-400 hover:text-gray-300 transition-colors text-sm"
                    >
                      <Github size={14} className="mr-1" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
