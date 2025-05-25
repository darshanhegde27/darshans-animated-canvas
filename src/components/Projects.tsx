import { ExternalLink, Github, Star, GitFork, Eye } from "lucide-react";
import { useState, useEffect } from "react";

export const Projects = () => {
  const [inView, setInView] = useState(false);

  const projects = [
    {
      title: "AI-Powered Chat Application",
      description: "Real-time messaging app with AI integration, built using React, Node.js, and WebSocket technology for seamless communication.",
      image: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?auto=format&fit=crop&q=80",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "AI/ML"],
      liveUrl: "https://github.com/darshanhegde27",
      githubUrl: "https://github.com/darshanhegde27",
      featured: true,
      stats: { stars: 127, forks: 34, views: 2800 }
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with modern payment integration, inventory management, and responsive design.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      liveUrl: "https://github.com/darshanhegde27",
      githubUrl: "https://github.com/darshanhegde27",
      featured: true,
      stats: { stars: 89, forks: 23, views: 1900 }
    },
    {
      title: "Real-time Analytics Dashboard",
      description: "Interactive dashboard for data visualization with real-time updates and responsive charts for business intelligence.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
      technologies: ["React", "D3.js", "Express", "Redis", "Chart.js"],
      liveUrl: "https://github.com/darshanhegde27",
      githubUrl: "https://github.com/darshanhegde27",
      featured: false,
      stats: { stars: 64, forks: 15, views: 1200 }
    },
    {
      title: "Task Management System",
      description: "Collaborative project management tool with real-time updates, file sharing, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io", "AWS"],
      liveUrl: "https://github.com/darshanhegde27",
      githubUrl: "https://github.com/darshanhegde27",
      featured: false,
      stats: { stars: 45, forks: 12, views: 890 }
    },
    {
      title: "Weather Forecast App",
      description: "Modern weather application with location-based forecasting, interactive maps, and detailed weather analytics.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&q=80",
      technologies: ["React", "TypeScript", "Weather API", "Maps API", "PWA"],
      liveUrl: "https://github.com/darshanhegde27",
      githubUrl: "https://github.com/darshanhegde27",
      featured: false,
      stats: { stars: 38, forks: 8, views: 750 }
    },
    {
      title: "Portfolio Website",
      description: "Responsive portfolio website with modern animations, dark mode, and optimized performance.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite", "TypeScript"],
      liveUrl: "https://github.com/darshanhegde27",
      githubUrl: "https://github.com/darshanhegde27",
      featured: false,
      stats: { stars: 92, forks: 28, views: 2100 }
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("projects");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1),transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 mb-6 animate-pulse">
            <Star className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-6">
            Featured Projects
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Innovative solutions crafted with cutting-edge technologies and modern design principles
          </p>
        </div>

        <div className="grid gap-8">
          {/* Featured Projects */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {projects.filter(p => p.featured).map((project, index) => (
              <div
                key={index}
                className={`group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-3xl backdrop-blur-xl border border-slate-700/50 overflow-hidden transition-all duration-700 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20 transform-gpu ${
                  inView ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{
                  animationDelay: `${index * 200}ms`,
                  transform: `perspective(1000px) rotateX(${index % 2 === 0 ? '2deg' : '-2deg'}) rotateY(${index % 2 === 0 ? '-1deg' : '1deg'})`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative overflow-hidden h-64 rounded-t-3xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                  
                  {/* Project Stats Overlay */}
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <div className="flex items-center space-x-1 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1">
                      <Star className="w-3 h-3 text-yellow-400" />
                      <span className="text-white text-xs font-medium">{project.stats.stars}</span>
                    </div>
                    <div className="flex items-center space-x-1 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1">
                      <GitFork className="w-3 h-3 text-blue-400" />
                      <span className="text-white text-xs font-medium">{project.stats.forks}</span>
                    </div>
                    <div className="flex items-center space-x-1 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1">
                      <Eye className="w-3 h-3 text-green-400" />
                      <span className="text-white text-xs font-medium">{project.stats.views}</span>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium hover:bg-purple-500/30 transition-all duration-300 hover:scale-105"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-6 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-gray-300 font-medium hover:bg-slate-600/50 hover:text-white transition-all duration-300 hover:scale-105"
                    >
                      <Github size={16} />
                      <span>Source Code</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Other Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {projects.filter(p => !p.featured).map((project, index) => (
              <div
                key={index}
                className={`group relative bg-gradient-to-br from-slate-800/60 to-slate-900/80 rounded-2xl backdrop-blur-xl border border-slate-700/50 overflow-hidden transition-all duration-500 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/10 transform-gpu hover:-translate-y-2 ${
                  inView ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{
                  animationDelay: `${600 + (index * 150)}ms`,
                  transform: `perspective(1000px) rotateX(${Math.sin(index) * 3}deg) rotateY(${Math.cos(index) * 2}deg)`
                }}
              >
                <div className="relative overflow-hidden h-40">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent"></div>
                  
                  <div className="absolute top-2 right-2 flex space-x-1">
                    <div className="flex items-center space-x-1 bg-black/60 backdrop-blur-sm rounded-full px-2 py-1">
                      <Star className="w-3 h-3 text-yellow-400" />
                      <span className="text-white text-xs">{project.stats.stars}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-gradient-to-r from-purple-600/15 to-blue-600/15 border border-purple-500/20 rounded-lg text-purple-300 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-purple-300 text-xs font-medium">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex space-x-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium"
                    >
                      <ExternalLink size={14} />
                      <span>Demo</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-gray-400 hover:text-gray-300 transition-colors text-sm font-medium"
                    >
                      <Github size={14} />
                      <span>Code</span>
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
