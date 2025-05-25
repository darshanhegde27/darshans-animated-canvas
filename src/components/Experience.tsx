
import { Calendar, MapPin } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      location: "Remote",
      description: [
        "Led development of microservices architecture serving 1M+ users",
        "Implemented CI/CD pipelines reducing deployment time by 70%",
        "Mentored junior developers and conducted technical interviews",
        "Architected cloud infrastructure on AWS with 99.9% uptime"
      ],
      technologies: ["React", "Node.js", "AWS", "Docker", "PostgreSQL"]
    },
    {
      title: "Full Stack Developer",
      company: "Digital Innovations Ltd.",
      period: "2020 - 2022",
      location: "Bangalore, India",
      description: [
        "Developed and maintained multiple client-facing web applications",
        "Integrated third-party APIs and payment gateways",
        "Optimized database queries improving performance by 40%",
        "Collaborated with cross-functional teams in Agile environment"
      ],
      technologies: ["React", "Express.js", "MongoDB", "Azure", "JavaScript"]
    },
    {
      title: "Software Developer",
      company: "StartupTech Solutions",
      period: "2018 - 2020",
      location: "Mumbai, India",
      description: [
        "Built responsive web applications from ground up",
        "Implemented automated testing reducing bugs by 60%",
        "Worked closely with designers to create pixel-perfect UIs",
        "Participated in code reviews and knowledge sharing sessions"
      ],
      technologies: ["JavaScript", "React", "Node.js", "MySQL", "Git"]
    },
    {
      title: "Junior Developer",
      company: "WebSoft Technologies",
      period: "2016 - 2018",
      location: "Pune, India",
      description: [
        "Assisted in development of e-commerce platforms",
        "Fixed bugs and implemented new features",
        "Learned best practices in software development",
        "Contributed to documentation and testing processes"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 to-pink-600"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative flex items-start group"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full border-4 border-slate-900 group-hover:scale-125 transition-transform duration-300"></div>

                {/* Content */}
                <div className="ml-16 bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-xl backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 w-full group-hover:scale-105">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <h3 className="text-xl font-bold text-white mb-2 sm:mb-0">
                      {exp.title}
                    </h3>
                    <div className="flex items-center text-purple-400 text-sm">
                      <Calendar size={16} className="mr-2" />
                      {exp.period}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <h4 className="text-lg font-semibold text-purple-300 mb-2 sm:mb-0">
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
                        <span className="text-purple-400 mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-full text-purple-300 text-sm"
                      >
                        {tech}
                      </span>
                    ))}
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
