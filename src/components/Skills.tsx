
import { useState, useEffect } from "react";
import { Code2, Database, Cloud, Globe, Cpu, Shield } from "lucide-react";

export const Skills = () => {
  const [inView, setInView] = useState(false);

  const skillCategories = [
    {
      category: "Frontend Development",
      icon: Globe,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React.js", level: 95, color: "bg-blue-500" },
        { name: "JavaScript/TypeScript", level: 92, color: "bg-cyan-500" },
        { name: "HTML5 & CSS3", level: 90, color: "bg-blue-400" },
        { name: "React Native", level: 85, color: "bg-sky-500" },
        { name: "Tailwind CSS", level: 88, color: "bg-blue-600" }
      ]
    },
    {
      category: "Backend Development",
      icon: Code2,
      color: "from-purple-500 to-indigo-500",
      skills: [
        { name: "Node.js", level: 88, color: "bg-purple-500" },
        { name: "Express.js", level: 85, color: "bg-indigo-500" },
        { name: "Python", level: 82, color: "bg-purple-400" },
        { name: "REST APIs", level: 90, color: "bg-indigo-400" },
        { name: "GraphQL", level: 78, color: "bg-purple-600" }
      ]
    },
    {
      category: "Cloud & DevOps",
      icon: Cloud,
      color: "from-emerald-500 to-teal-500",
      skills: [
        { name: "AWS", level: 85, color: "bg-emerald-500" },
        { name: "Google Cloud", level: 80, color: "bg-teal-500" },
        { name: "Docker", level: 75, color: "bg-emerald-400" },
        { name: "Kubernetes", level: 72, color: "bg-teal-400" },
        { name: "CI/CD", level: 78, color: "bg-emerald-600" }
      ]
    },
    {
      category: "Database & AI",
      icon: Database,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "MongoDB", level: 85, color: "bg-orange-500" },
        { name: "PostgreSQL", level: 80, color: "bg-red-500" },
        { name: "Redis", level: 75, color: "bg-orange-400" },
        { name: "Machine Learning", level: 70, color: "bg-red-400" },
        { name: "Vector Databases", level: 72, color: "bg-orange-600" }
      ]
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

    const element = document.getElementById("skills");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1),transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 mb-6 animate-pulse">
            <Cpu className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6">
            Skills & Expertise
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Cutting-edge technologies and frameworks I use to build exceptional digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <div
                key={categoryIndex}
                className={`group relative bg-gradient-to-br from-slate-800/60 to-slate-900/80 p-8 rounded-2xl backdrop-blur-xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 ${
                  inView ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{
                  animationDelay: `${categoryIndex * 200}ms`
                }}
              >
                {/* Category header */}
                <div className="text-center mb-8">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r ${category.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {category.category}
                  </h3>
                  <div className={`w-12 h-0.5 bg-gradient-to-r ${category.color} mx-auto rounded-full`}></div>
                </div>

                {/* Skills list */}
                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group/skill">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-gray-200 text-sm font-medium group-hover/skill:text-white transition-colors">
                          {skill.name}
                        </span>
                        <div className="flex items-center space-x-2">
                          <span className="text-blue-400 text-xs font-bold bg-blue-500/10 px-2 py-1 rounded-full">
                            {skill.level}%
                          </span>
                        </div>
                      </div>
                      <div className="relative">
                        <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
                          <div
                            className={`${skill.color} h-2 rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                            style={{
                              width: inView ? `${skill.level}%` : "0%",
                              transitionDelay: `${(categoryIndex * 200) + (skillIndex * 150)}ms`
                            }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            );
          })}
        </div>

        {/* Additional skills showcase */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap gap-3 justify-center">
            {[
              "React", "TypeScript", "Node.js", "Python", "AWS", "Docker", "MongoDB", "Redis",
              "GraphQL", "Kubernetes", "Machine Learning", "Vector DB", "Microservices", "CI/CD"
            ].map((tech, index) => (
              <span
                key={tech}
                className={`px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-blue-300 text-sm font-medium hover:bg-blue-500/20 transition-all duration-300 hover:scale-105 ${
                  inView ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{
                  animationDelay: `${800 + (index * 100)}ms`
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
