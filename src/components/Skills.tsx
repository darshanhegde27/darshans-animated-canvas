
import { useState, useEffect } from "react";

export const Skills = () => {
  const [inView, setInView] = useState(false);

  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "React", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "HTML/CSS", level: 90 },
        { name: "React Native", level: 85 },
        { name: "Responsive Design", level: 88 }
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Express.js", level: 85 },
        { name: "Python", level: 80 },
        { name: "REST APIs", level: 90 },
        { name: "Microservices", level: 82 }
      ]
    },
    {
      category: "Cloud & DevOps",
      skills: [
        { name: "AWS", level: 85 },
        { name: "Google Cloud", level: 80 },
        { name: "Docker", level: 75 },
        { name: "CI/CD", level: 78 },
        { name: "System Engineering", level: 80 }
      ]
    },
    {
      category: "Database & Tools",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "SQL", level: 80 },
        { name: "Git", level: 90 },
        { name: "Database Design", level: 82 },
        { name: "Data Analytics", level: 75 }
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
      { threshold: 0.3 }
    );

    const element = document.getElementById("skills");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are some of the technologies and tools I work with regularly
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-xl backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-6 text-center">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 text-sm font-medium">
                        {skill.name}
                      </span>
                      <span className="text-blue-400 text-sm font-medium">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-600 to-cyan-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: inView ? `${skill.level}%` : "0%",
                          transitionDelay: `${(categoryIndex * 100) + (skillIndex * 100)}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
