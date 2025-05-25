
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
      title: "Cloud Engineering",
      description: "AWS and Google Cloud certified with enterprise experience"
    },
    {
      icon: Server,
      title: "System Engineering",
      description: "Microservices architecture and scalable solutions"
    },
    {
      icon: Database,
      title: "Database Design",
      description: "MongoDB and SQL database optimization and design"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate Full Stack Developer with expertise in modern web technologies 
              and cloud platforms. Currently working as a Full Stack Developer, I specialize 
              in React, Node.js, and building scalable web applications.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              My experience includes working with Tata Consultancy Services as an Associate 
              System Engineer, where I specialized in cloud services like AWS and Google Cloud, 
              developing enterprise applications and implementing responsive solutions.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm passionate about creating user-friendly interfaces, optimizing database 
              performance, and implementing industry best practices in software development.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-xl backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
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
