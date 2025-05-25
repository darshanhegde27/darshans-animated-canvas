
import { useState, useEffect } from "react";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

export const Hero = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
  const titles = [
    "Full Stack Developer",
    "Cloud Engineer",
    "DevOps Specialist",
    "Software Architect"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="text-center z-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Darshan Hegde
            </span>
          </h1>
          
          <div className="h-16 flex items-center justify-center mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-gray-300 font-light">
              <span className="animate-fade-in" key={currentTitle}>
                {titles[currentTitle]}
              </span>
            </h2>
          </div>

          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about building scalable applications and cloud infrastructure. 
            Experienced in modern technologies and DevOps practices.
          </p>

          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://www.linkedin.com/in/darshan-hegde-8957b6135/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 rounded-full hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-purple-500/25"
            >
              <Linkedin size={24} className="text-white" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-gray-800 to-gray-900 p-4 rounded-full hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-gray-500/25"
            >
              <Github size={24} className="text-white" />
            </a>
            <a
              href="mailto:darshan@email.com"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 p-4 rounded-full hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-blue-500/25"
            >
              <Mail size={24} className="text-white" />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-purple-500/25"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-full font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-purple-400" />
      </div>
    </section>
  );
};
