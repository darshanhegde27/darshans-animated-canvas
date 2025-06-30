
import { useState, useEffect } from "react";
import { Building2, Calendar, MapPin, ExternalLink, Briefcase, Code, Zap, ArrowRight } from "lucide-react";

export const Experience = () => {
  const [inView, setInView] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const experiences = [
    {
      company: "VIKI.AI",
      position: "Full Stack Developer",
      duration: "Oct 2024 - Present",
      location: "Bengaluru, Karnataka, India",
      logo: "🤖",
      website: "https://viki.ai/",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30",
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
      bgColor: "bg-emerald-500/10",
      borderColor: "border-emerald-500/30",
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
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30",
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
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById("experience");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Canvas Elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-20 left-1/2 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 mb-8 shadow-2xl shadow-blue-500/25">
            <Briefcase className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Professional Journey
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 mx-auto mb-10 rounded-full"></div>
          <p className="text-slate-600 text-xl max-w-3xl mx-auto leading-relaxed font-medium">
            Building innovative solutions and driving digital transformation across diverse industries
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-300 via-purple-300 to-cyan-300 transform md:-translate-x-0.5"></div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`group relative ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex flex-col md:flex md:items-center ${
                  inView ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
                onMouseEnter={() => setActiveIndex(index)}
              >
                {/* Timeline Dot */}
                <div className={`absolute left-6 md:left-1/2 w-6 h-6 rounded-full bg-gradient-to-r ${exp.color} transform md:-translate-x-3 shadow-lg z-10 group-hover:scale-125 transition-transform duration-300`}>
                  <div className="absolute inset-1 bg-white rounded-full"></div>
                </div>

                {/* Content Card */}
                <div className={`ml-20 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-16' : 'md:ml-auto md:pl-16'}`}>
                  <div className={`bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50 ${exp.bgColor} hover:${exp.borderColor} group-hover:scale-105`}>
                    {/* Company Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${exp.color} flex items-center justify-center text-2xl shadow-lg group-hover:rotate-6 transition-transform duration-300`}>
                          {exp.logo}
                        </div>
                        <div>
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-2xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                              {exp.company}
                            </h3>
                            {exp.website !== "#" && (
                              <a
                                href={exp.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:text-blue-600 transition-colors hover:scale-110 transform"
                              >
                                <ExternalLink className="w-5 h-5" />
                              </a>
                            )}
                          </div>
                          <p className="text-xl font-semibold text-blue-600 mb-3">{exp.position}</p>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
                            <div className="flex items-center space-x-2 bg-slate-100 px-3 py-1 rounded-full">
                              <Calendar className="w-4 h-4" />
                              <span className="font-medium">{exp.duration}</span>
                            </div>
                            <div className="flex items-center space-x-2 bg-slate-100 px-3 py-1 rounded-full">
                              <MapPin className="w-4 h-4" />
                              <span className="font-medium">{exp.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-600 text-lg mb-8 leading-relaxed font-medium">
                      {exp.description}
                    </p>

                    {/* Key Achievements */}
                    <div className="mb-8">
                      <h4 className="text-slate-800 font-bold text-lg mb-4 flex items-center">
                        <Zap className="w-5 h-5 mr-2 text-yellow-500" />
                        Key Achievements
                      </h4>
                      <div className="space-y-3">
                        {exp.achievements.slice(0, 3).map((achievement, achIndex) => (
                          <div
                            key={achIndex}
                            className="flex items-start space-x-3 text-slate-600 hover:text-slate-800 transition-colors group/item"
                          >
                            <ArrowRight className="w-4 h-4 mt-1 text-blue-500 flex-shrink-0 group-hover/item:translate-x-1 transition-transform" />
                            <span className="leading-relaxed font-medium">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-slate-800 font-bold text-lg mb-4 flex items-center">
                        <Code className="w-5 h-5 mr-2 text-green-500" />
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={tech}
                            className={`px-4 py-2 bg-white/80 border-2 ${exp.borderColor} rounded-full text-slate-700 text-sm font-semibold hover:bg-gradient-to-r hover:${exp.color} hover:text-white transition-all duration-300 hover:scale-105 shadow-sm`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 max-w-4xl mx-auto shadow-xl border border-white/50">
            <h3 className="text-3xl font-bold text-slate-800 mb-4">
              Ready to Collaborate?
            </h3>
            <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto font-medium">
              Let's discuss how my experience can contribute to your next project
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Let's Connect
              </a>
              <a
                href="#projects"
                className="bg-white/80 border-2 border-blue-500 text-blue-600 px-8 py-4 rounded-2xl font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 hover:scale-105 shadow-lg"
              >
                View Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
