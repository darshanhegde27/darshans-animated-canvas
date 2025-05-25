
import { Calendar, MapPin } from "lucide-react";
import { useState, useEffect } from "react";

export const Experience = () => {
  const [loadedItems, setLoadedItems] = useState<number[]>([]);

  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Current Position",
      period: "Oct 2024 - Present",
      location: "Remote",
      description: [
        "Developed and maintained full-stack web applications using advanced tech stacks (React, React Native)",
        "Implemented RESTful APIs, microservices architecture, and database optimization for improved performance",
        "Collaborated with cross-functional teams to design and implement user-friendly interfaces",
        "Applied industry best practices for coding standards, version control, and project management"
      ],
      technologies: ["React", "React Native", "Node.js", "MongoDB", "Express.js"],
      isLoading: true
    },
    {
      title: "Associate System Engineer",
      company: "Tata Consultancy Services (TCS)",
      period: "Oct 2021 - Apr 2023",
      location: "India",
      description: [
        "Specialized in analyzing business requirements and translating them into technical solutions",
        "Utilized cloud services such as AWS and Google for enterprise application development processes",
        "Implemented HTML/CSS/JS for responsive, communication between front- and and back- and solutions",
        "Designed and developed cloud-first data processing systems that supported machine intelligence"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "AWS", "Google Cloud"],
      isLoading: true
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setTimeout(() => {
              setLoadedItems(prev => [...prev, index]);
            }, index * 500);
          }
        });
      },
      { threshold: 0.3 }
    );

    experiences.forEach((_, index) => {
      const element = document.querySelector(`[data-index="${index}"]`);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const LoadingAnimation = () => (
    <div className="animate-pulse">
      <div className="flex space-x-4">
        <div className="rounded-full bg-blue-300 h-10 w-10"></div>
        <div className="flex-1 space-y-2 py-1">
          <div className="h-4 bg-blue-300 rounded w-3/4"></div>
          <div className="space-y-2">
            <div className="h-4 bg-blue-300 rounded"></div>
            <div className="h-4 bg-blue-300 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-8"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-cyan-600"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                data-index={index}
                className="relative flex items-start group"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full border-4 border-slate-900 group-hover:scale-125 transition-transform duration-300"></div>

                {/* Content */}
                <div className="ml-16 bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-xl backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 w-full group-hover:scale-105">
                  {!loadedItems.includes(index) ? (
                    <LoadingAnimation />
                  ) : (
                    <div className="animate-fade-in">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <h3 className="text-xl font-bold text-white mb-2 sm:mb-0">
                          {exp.title}
                        </h3>
                        <div className="flex items-center text-blue-400 text-sm">
                          <Calendar size={16} className="mr-2" />
                          {exp.period}
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <h4 className="text-lg font-semibold text-blue-300 mb-2 sm:mb-0">
                          {exp.company}
                        </h4>
                        <div className="flex items-center text-gray-400 text-sm">
                          <MapPin size={16} className="mr-2" />
                          {exp.location}
                        </div>
                      </div>

                      <ul className="space-y-2 mb-4">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-gray-300 flex items-start">
                            <span className="text-blue-400 mr-2">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-full text-blue-300 text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
