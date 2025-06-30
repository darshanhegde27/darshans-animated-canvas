
import { Code, Server, Cloud, Database, User, Briefcase, Trophy, Target } from "lucide-react";

export const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Full Stack Development",
      description: "Expert in React, Node.js, and modern web technologies",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Cloud,
      title: "Cloud Engineering",
      description: "AWS and Google Cloud certified with enterprise experience",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: Server,
      title: "System Engineering",
      description: "Microservices architecture and scalable solutions",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Database,
      title: "Database Design",
      description: "MongoDB and SQL database optimization and design",
      color: "from-orange-500 to-red-500"
    }
  ];

  const stats = [
    { icon: Briefcase, number: "3+", label: "Years Experience", color: "text-blue-400" },
    { icon: Trophy, number: "50+", label: "Projects Completed", color: "text-green-400" },
    { icon: Target, number: "100%", label: "Client Satisfaction", color: "text-purple-400" },
    { icon: User, number: "10+", label: "Team Members Led", color: "text-orange-400" }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1),transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 mb-6">
            <User className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6">
            About Me
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Passionate Full Stack Developer crafting innovative digital solutions with cutting-edge technologies
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/80 rounded-2xl p-8 backdrop-blur-xl border border-slate-700/50">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <Code className="w-6 h-6 mr-3 text-blue-400" />
                  My Journey
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  I'm a passionate Full Stack Developer with expertise in modern web technologies 
                  and cloud platforms. Currently working at <span className="text-blue-400 font-semibold">VIKI.AI</span>, 
                  I specialize in React, Node.js, and building scalable web applications that drive business growth.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  My journey includes valuable experience at <span className="text-purple-400 font-semibold">Tata Consultancy Services</span> 
                  and <span className="text-emerald-400 font-semibold">Sarany Technologies</span>, where I specialized in 
                  cloud services like AWS and Google Cloud, developing enterprise applications and implementing responsive solutions.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  I'm passionate about creating user-friendly interfaces, optimizing database 
                  performance, and implementing industry best practices in software development to deliver 
                  exceptional digital experiences.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-800/60 to-slate-900/80 rounded-xl p-6 backdrop-blur-xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 text-center"
                >
                  <div className="flex justify-center mb-3">
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  <div className={`text-3xl font-bold ${stat.color} mb-1`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Skills Grid */}
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-4">
                Core Expertise
              </h3>
              <p className="text-gray-400">
                Technologies and skills I use to bring ideas to life
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="group bg-gradient-to-br from-slate-800/60 to-slate-900/80 p-8 rounded-2xl backdrop-blur-xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
                  >
                    <div className={`bg-gradient-to-r ${item.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon size={32} className="text-white" />
                    </div>
                    <h3 className="text-white font-bold text-xl mb-3 group-hover:text-blue-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/80 rounded-2xl p-8 backdrop-blur-xl border border-slate-700/50 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
              Ready to transform your ideas into powerful digital solutions? 
              Let's collaborate and create something extraordinary.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="bg-transparent border-2 border-blue-500 text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 hover:scale-105"
              >
                View My Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
