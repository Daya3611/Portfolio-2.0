"use client";
import { useState } from "react";

// Mock data for projects - replace with your actual import
const project = [
  {
    title: "E-commerce Platform",
    description: "Built a full-stack e-commerce solution with React, Node.js, and MongoDB featuring real-time inventory management and payment integration"
  },
  {
    title: "Task Management App",
    description: "Developed a collaborative task management application with real-time updates using WebSocket, featuring drag-and-drop functionality"
  },
  {
    title: "Analytics Dashboard",
    description: "Created a comprehensive analytics dashboard with interactive charts and data visualization using D3.js and React"
  }
];

const skills = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"],
    color: "from-blue-500 to-purple-600"
  },
  {
    category: "Backend", 
    items: ["Node.js", "Express", "Python", "RESTful APIs"],
    color: "from-green-500 to-teal-600"
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL", "MySQL"],
    color: "from-orange-500 to-red-600"
  },
  {
    category: "DevOps",
    items: ["AWS", "Docker", "CI/CD pipelines"],
    color: "from-purple-500 to-pink-600"
  },
  {
    category: "Tools & Frameworks",
    items: ["Git", "GitHub", "Figma", "VSCode"],
    color: "from-indigo-500 to-blue-600"
  },
  {
    category: "Security",
    items: ["Encryption", "Authentication", "Authorization"],
    color: "from-red-500 to-orange-600"
  }
];

export default function ExperiencePage() {
  const [activeSkillSet, setActiveSkillSet] = useState(0);
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-slate-800">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 dark:from-blue-500/20 dark:to-purple-500/20"></div>
        <div className="relative mx-8 md:mx-20 lg:mx-24 pt-16 pb-20">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent mb-6 animate-pulse">
              Experience
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              As a full-stack developer, I transform ideas into powerful digital experiences. 
              My GitHub portfolio demonstrates expertise across the entire development spectrum, 
              from intuitive user interfaces to robust backend architectures.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-8 md:mx-20 lg:mx-24 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto mb-8 rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {project.map((item, index) => (
            <div
              key={index}
              className={`group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700 cursor-pointer ${
                hoveredProject === index ? 'ring-4 ring-blue-500/20' : ''
              }`}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-60 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold text-lg">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                {item.description}
              </p>
              
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-b-2xl"></div>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-8 md:mx-20 lg:mx-24 py-16 bg-white/50 dark:bg-gray-800/50 rounded-3xl backdrop-blur-sm">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Arsenal
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto mb-8 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillSet, index) => (
            <div
              key={index}
              className={`group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-200 dark:border-gray-700 ${
                activeSkillSet === index ? 'ring-4 ring-blue-500/20 scale-105' : 'hover:scale-105'
              }`}
              onClick={() => setActiveSkillSet(activeSkillSet === index ? -1 : index)}
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${skillSet.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <span className="text-white font-bold text-sm">
                  {skillSet.category.slice(0, 2).toUpperCase()}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all">
                {skillSet.category}
              </h3>
              
              <div className={`space-y-2 transition-all duration-300 ${
                activeSkillSet === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
              }`}>
                {skillSet.items.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center space-x-3 bg-gray-50 dark:bg-gray-700 rounded-lg p-3 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                  >
                    <div className={`w-2 h-2 bg-gradient-to-r ${skillSet.color} rounded-full`}></div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
              
              {activeSkillSet !== index && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {skillSet.items.slice(0, 3).map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-3 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                  {skillSet.items.length > 3 && (
                    <span className="text-xs bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full">
                      +{skillSet.items.length - 3}
                    </span>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mx-8 md:mx-20 lg:mx-24 py-16">
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-3xl p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-48 translate-x-48"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-32 -translate-x-32"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-6">Freelance Excellence</h2>
            <div className="w-16 h-1 bg-white/50 mb-8 rounded-full"></div>
            <p className="text-xl leading-relaxed text-blue-100 max-w-4xl">
              Beyond personal projects, I've partnered with clients across diverse industries to deliver 
              exceptional digital solutions. From scalable e-commerce platforms to sophisticated content 
              management systems, I bring technical excellence and creative problem-solving to every project. 
              My freelance journey spans performance optimization, responsive design mastery, and delivering 
              results that exceed expectations.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">50+</div>
                <div className="text-blue-200">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">15+</div>
                <div className="text-blue-200">Industries Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">100%</div>
                <div className="text-blue-200">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}