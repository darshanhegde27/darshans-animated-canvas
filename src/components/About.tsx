
import { Code, Server, Cloud, Database } from "lucide-react";

export const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Full Stack Development",
      description: "Expert in React, Node.js, and modern web technologies"
    },
    {
      icon: Cloud,
      title: "Cloud Architecture",
      description: "AWS and Azure certified with extensive cloud experience"
    },
    {
      icon: Server,
      title: "DevOps & Infrastructure",
      description: "CI/CD pipelines, containerization, and automation"
    },
    {
      icon: Database,
      title: "Database Design",
      description: "SQL and NoSQL database optimization and design"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate software engineer with over 8 years of experience in building 
              scalable web applications and cloud infrastructure. My journey has taken me 
              through various roles, from full-stack development to DevOps engineering.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Currently working as a Senior Software Engineer, I specialize in modern 
              JavaScript frameworks, cloud technologies, and automated deployment pipelines. 
              I'm always eager to learn new technologies and solve complex problems.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing 
              to open-source projects, or sharing knowledge with the developer community.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-xl backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
