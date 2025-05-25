
import { useState, useEffect } from "react";
import { Building2, Calendar, MapPin, ExternalLink, Briefcase, Code, Zap } from "lucide-react";

export const Experience = () => {
  const [inView, setInView] = useState(false);
  const [loadingStates, setLoadingStates] = useState([false, false, false]);

  const experiences = [
    {
      company: "VIKI.AI",
      position: "Full Stack Developer",
      duration: "Oct 2024 - Present",
      location: "Bengaluru, Karnataka, India",
      logo: "🤖",
      website: "https://viki.ai/",
      color: "from-blue-500 to-cyan-500",
      description: "Leading full-stack development for AI-powered solutions, building scalable web applications with React and Node.js.",
      achievements: [
        "Developed and maintained full-stack web applications using JavaScript, React, and Node.js",
        "Collaborated with cross-functional teams to design scalable solutions for complex software issues",
        "Led a project to migrate legacy systems to modern web technologies, improving performance by 30%",
        "Implemented RESTful APIs to streamline communication between front-end and back-end services",
        "Conducted code reviews and mentored junior developers, fostering a culture of collaboration and knowledge sharing",
        "Utilized cloud services and tools such as AWS and Docker to enhance application deployment processes"
      ],
      technologies: ["React.js", "Node.js", "JavaScript", "AWS", "Docker", "RESTful APIs", "Git"]
    },
    {
      company: "Sarany Technologies",
      position: "Software Developer",
      duration: "Mar 2023 - Nov 2024",
      location: "Bangalore, Karnataka, India",
      logo: "💻",
      website: "#",
      color: "from-emerald-500 to-teal-500",
      description: "Focused on developing scalable software solutions and real-time data processing systems for enhanced business intelligence.",
      achievements: [
        "Implemented RESTful APIs to streamline communication between front-end and back-end services",
        "Conducted code reviews and mentored junior developers, fostering a culture of collaboration and knowledge sharing",
        "Designed and developed a real-time data processing system that supported business intelligence operations",
        "Achieved a 50% increase in analytical efficiency through optimized data processing solutions",
        "Collaborated with cross-functional teams to deliver high-quality software products"
      ],
      technologies: ["JavaScript", "React", "Node.js", "REST APIs", "Real-time Processing", "Business Intelligence"]
    },
    {
      company: "Tata Consultancy Services",
      position: "Associate System Engineer",
      duration: "Oct 2021 - Mar 2023",
      location: "Bangalore Urban, Karnataka, India",
      logo: "🏢",
      website: "https://tcs.com/",
      color: "from-purple-500 to-indigo-500",
      description: "Specialized in system engineering and enterprise application development with focus on scalable solutions.",
      achievements: [
        "Developed and maintained enterprise-level applications using modern web technologies",
        "Implemented cloud solutions and optimized system performance",
        "Collaborated with teams to deliver scalable software solutions",
        "Gained expertise in system architecture and enterprise-level development",
        "Contributed to various client projects with high-quality deliverables"
      ],
      technologies: ["Java", "Spring Boot", "System Design", "Enterprise Applications", "Cloud Computing"]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          experiences.forEach((_, index) => {
            setTimeout(() => {
              setLoadingStates(prev => {
                const newStates = [...prev];
                newStates[index] = true;
                return newStates;
              });
            }, index * 500);
          });
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById("experience");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-800 via-slate-900 to-blue-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(147,51,234,0.1),transparent_50%)]"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 mb-6 animate-pulse">
            <Briefcase className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6">
            Professional Journey
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Building innovative solutions and driving digital transformation across diverse industries
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br from-slate-800/60 to-slate-900/80 rounded-2xl backdrop-blur-xl border border-slate-700/50 overflow-hidden transition-all duration-700 hover:border-blue-500/50 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/20 ${
                inView ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{
                animationDelay: `${index * 300}ms`
              }}
            >
              {!loadingStates[index] && (
                <div className="absolute inset-0 bg-slate-900/90 flex items-center justify-center z-10">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin"></div>
                    <span className="text-blue-400 font-medium">Loading experience...</span>
                  </div>
                </div>
              )}

              <div className="p-8 lg:p-10">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8">
                  <div className="flex items-start space-x-4 mb-6 lg:mb-0">
                    <div className={`flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${exp.color} text-2xl font-bold text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {exp.logo}
                    </div>
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
                          {exp.company}
                        </h3>
                        {exp.website !== "#" && (
                          <a
                            href={exp.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 transition-colors"
                          >
                            <ExternalLink className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                      <p className="text-xl font-semibold text-blue-400 mb-2">{exp.position}</p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  {exp.description}
                </p>

                <div className="mb-8">
                  <h4 className="text-white font-semibold mb-4 flex items-center">
                    <Zap className="w-5 h-5 mr-2 text-yellow-400" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li
                        key={achIndex}
                        className={`flex items-start space-x-3 text-gray-300 ${
                          loadingStates[index] ? 'animate-fade-in' : 'opacity-0'
                        }`}
                        style={{
                          animationDelay: `${(index * 300) + (achIndex * 100)}ms`
                        }}
                      >
                        <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-4 flex items-center">
                    <Code className="w-5 h-5 mr-2 text-green-400" />
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 bg-gradient-to-r ${exp.color}/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium hover:bg-blue-500/30 transition-all duration-300 hover:scale-105 ${
                          loadingStates[index] ? 'animate-scale-in' : 'opacity-0'
                        }`}
                        style={{
                          animationDelay: `${(index * 300) + (techIndex * 50)}ms`
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
