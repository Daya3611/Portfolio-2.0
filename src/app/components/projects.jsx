"use client";
import { useState, useRef, useEffect } from "react";
import { ExternalLink, Github, Globe, ArrowUpRight, Code, Zap, Database, Star, Play, Eye } from "lucide-react";

export const project = [
  {
    title: "URL Shortener",
    description: "A simple app to shorten URLs, built with Next.js and Node.js. It offers customizable links and user engagement analytics.",
    link: "https://miniurl.dayanandgawade.in",
    img: '/projects/miniurl.png',
    tech: ["Next.js", "Node.js", "Analytics"],
    category: "Web App",
    status: "Live",
    color: "blue"
  },
  {
    title: "Tailwind CSS Bg Gradient",
    description: "A plugin for Tailwind CSS to create background gradients.",
    link: "https://tailwind-bg-tawny.vercel.app/",
    img: '/projects/tailwind.png',
    tech: ["Tailwind CSS", "Plugin", "CSS"],
    category: "Tool",
    status: "Open Source",
    color: "purple"
  },
  {
    title: "MusicHub",
    description: "A responsive music app built with React and Node.js. Features include playlist management and a recommendation system.",
    link: "https://musichub.dayanandgawade.in",
    img: '/projects/musichub.png',
    tech: ["React", "Node.js", "Music API"],
    category: "Entertainment",
    status: "Live",
    color: "green"
  },
  {
    title: "Cloud Storage WebApp",
    description: "An app to upload and access files from anywhere.",
    link: "https://skybox.dayanandgawade.in/",
    img: '/projects/skybox.png',
    tech: ["Cloud Storage", "File Upload", "WebApp"],
    category: "Utility",
    status: "Live",
    color: "orange"
  },
];

const categories = ["All", "Web App", "Tool", "Entertainment", "Utility"];

const colorSchemes = {
  blue: "from-blue-500 to-cyan-500",
  purple: "from-purple-500 to-pink-500",
  green: "from-green-500 to-emerald-500",
  orange: "from-orange-500 to-red-500"
};

const ProjectCard = ({ item, index, isActive, onMouseEnter, onMouseLeave, delay }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const handleMouseEnter = () => {
    setIsHovered(true);
    onMouseEnter(index);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    onMouseLeave();
  };

  return (
    <div
      className={`group relative transition-all duration-700 transform ${
        isActive ? 'scale-[1.02] z-20' : 'scale-100'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`absolute -inset-1 bg-gradient-to-r ${colorSchemes[item.color]} rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`}></div>
      
      <div className="relative bg-white dark:bg-gray-900/50 backdrop-blur-xl rounded-3xl overflow-hidden border border-gray-200/50 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-500">
        <div className="relative p-6 pb-0">
          <div className="flex justify-between items-start mb-4">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${colorSchemes[item.color]} text-white text-sm font-semibold shadow-lg`}>
              {item.status === 'Live' ? (
                <>
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  Live
                </>
              ) : (
                <>
                  <Star className="w-3 h-3" />
                  Open Source
                </>
              )}
            </div>
            <div className="text-6xl font-black text-gray-100 dark:text-gray-800/50">
              {String(index + 1).padStart(2, '0')}
            </div>
          </div>
        </div>

        <div className="relative h-56 mx-6 mb-6 rounded-2xl overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-br ${colorSchemes[item.color]} opacity-80`}></div>
          
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.3),transparent_50%)]"></div>
            <div className={`absolute top-4 right-4 w-32 h-32 border-2 border-white/30 rounded-full transform ${isHovered ? 'scale-110 rotate-45' : 'scale-100 rotate-0'} transition-transform duration-700`}></div>
            <div className={`absolute bottom-4 left-4 w-24 h-24 border border-white/20 rounded-lg transform ${isHovered ? 'scale-110 -rotate-12' : 'scale-100 rotate-0'} transition-transform duration-700`}></div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className={`w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center transform ${isHovered ? 'scale-110 rotate-12' : 'scale-100 rotate-0'} transition-transform duration-500`}>
              {item.category === 'Web App' && <Globe className="w-10 h-10 text-white" />}
              {item.category === 'Tool' && <Code className="w-10 h-10 text-white" />}
              {item.category === 'Entertainment' && <Play className="w-10 h-10 text-white" />}
              {item.category === 'Utility' && <Database className="w-10 h-10 text-white" />}
            </div>
          </div>

          <div className={`absolute top-4 left-4 flex gap-2 transform transition-all duration-300 ${isHovered ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`}>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center hover:scale-110 transition-transform group/btn"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="w-4 h-4 text-gray-700" />
            </a>
            <button className="w-10 h-10 bg-black/20 backdrop-blur-sm rounded-xl flex items-center justify-center hover:scale-110 transition-transform">
              <Github className="w-4 h-4 text-white" />
            </button>
          </div>

          <div className={`absolute bottom-4 right-4 flex items-center gap-2 px-3 py-2 bg-black/30 backdrop-blur-sm rounded-full text-white text-sm transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
            <Eye className="w-4 h-4" />
            View Project
          </div>
        </div>

        <div className="px-6 pb-6">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
            {item.title}
          </h3>
          
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 text-sm">
            {item.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {item.tech?.map((tech, techIndex) => (
              <span
                key={techIndex}
                className={`px-3 py-1.5 text-xs font-medium bg-gradient-to-r ${colorSchemes[item.color]} text-white rounded-lg shadow-sm hover:scale-105 transition-transform cursor-default`}
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider">
              {item.category}
            </span>
            <ArrowUpRight className={`w-5 h-5 text-gray-400 transform transition-all duration-300 ${isHovered ? 'translate-x-1 -translate-y-1 text-blue-500' : ''}`} />
          </div>
        </div>

        <div className={`absolute inset-0 border-2 border-transparent rounded-3xl transition-all duration-500 ${isHovered ? `border-gradient-to-r ${colorSchemes[item.color]}` : ''}`}></div>
        
        <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${colorSchemes[item.color]} rounded-b-3xl transform transition-transform duration-500 ${isHovered ? 'scale-x-100' : 'scale-x-0'} origin-left`}></div>
      </div>
    </div>
  );
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredProject, setHoveredProject] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const filteredProjects = activeFilter === "All" 
    ? project 
    : project.filter(p => p.category === activeFilter);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen px-6 md:px-12 lg:px-24 py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/50 dark:from-gray-900 dark:via-gray-800 dark:to-slate-900 overflow-hidden" 
      id="projects"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-pink-400/10 rounded-full blur-3xl transition-transform duration-1000"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            top: '-10%',
            right: '-10%'
          }}
        ></div>
        <div 
          className="absolute w-80 h-80 bg-gradient-to-r from-green-400/10 via-teal-400/10 to-cyan-400/10 rounded-full blur-3xl transition-transform duration-1000"
          style={{
            transform: `translate(${mousePosition.x * -0.03}px, ${mousePosition.y * -0.03}px)`,
            bottom: '-10%',
            left: '-10%'
          }}
        ></div>
      </div>

      <div className="relative z-10">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full border border-gray-200 dark:border-gray-700">
            <div className="relative">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Code className="w-4 h-4 text-white" />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg opacity-20 animate-pulse"></div>
            </div>
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
              Featured Work
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8">
            <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-900 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Crafting digital experiences that merge
            <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> innovation </span>
            with
            <span className="font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> functionality</span>
          </p>
        </div>

        <div className={`flex justify-center mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl p-2 border border-gray-200 dark:border-gray-700">
            <div className="flex gap-2">
              {categories.map((category, index) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`relative px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeFilter === category
                      ? 'text-white shadow-lg'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  {activeFilter === category && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg"></div>
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    {category}
                    {category !== "All" && (
                      <span className="text-xs opacity-70">
                        ({project.filter(p => p.category === category).length})
                      </span>
                    )}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {filteredProjects.map((item, index) => (
              <ProjectCard
                key={`${activeFilter}-${index}`}
                item={item}
                index={index}
                isActive={hoveredProject === index}
                onMouseEnter={(idx) => setHoveredProject(idx)}
                onMouseLeave={() => setHoveredProject(null)}
                delay={index * 100}
              />
            ))}
          </div>
        </div>

        <div className={`mb-20 transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Total Projects", value: project.length, suffix: "+", color: "blue" },
              { label: "Technologies", value: "15", suffix: "+", color: "purple" },
              { label: "Live Applications", value: project.filter(p => p.status === 'Live').length, suffix: "", color: "green" },
              { label: "Open Source", value: project.filter(p => p.status === 'Open Source').length, suffix: "", color: "orange" }
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="relative bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 hover:scale-105 transition-all duration-500 text-center">
                  <div className={`absolute -inset-1 bg-gradient-to-r ${colorSchemes[stat.color]} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`}></div>
                  
                  <div className="relative">
                    <div className={`text-4xl font-black mb-2 bg-gradient-to-r ${colorSchemes[stat.color]} bg-clip-text text-transparent`}>
                      {stat.value}{stat.suffix}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 font-medium uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="relative bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 rounded-3xl p-16 text-white overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full -translate-y-48 translate-x-48 animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-purple-400/10 to-pink-400/10 rounded-full translate-y-40 -translate-x-40 animate-pulse"></div>
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1),transparent_70%)]"></div>
            </div>
            
            <div className="relative z-10 text-center">
              <h3 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                Ready to Create Something Amazing?
              </h3>
              <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
                Let's transform your vision into reality with cutting-edge technology, 
                innovative design, and exceptional user experiences.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-900 rounded-2xl font-bold text-lg overflow-hidden transition-all hover:scale-105" onClick={() => window.location.href = 'https://github.com/Daya3611'}>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Globe className="w-5 h-5 relative z-10 group-hover:text-white transition-colors" />
                  <span className="relative z-10 group-hover:text-white transition-colors">Explore All Work</span>
                </button>
                <button className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-white/50 text-white rounded-2xl font-bold text-lg hover:bg-white hover:text-gray-900 transition-all hover:scale-105" onClick={() => window.location.href = 'https://github.com/Daya3611'}>
                  <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
                  Let's Collaborate
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}