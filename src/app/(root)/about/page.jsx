"use client";
import { useState, useEffect } from "react";

const highlights = [
  { text: "Self-taught", color: "from-blue-500 to-purple-600" },
  { text: "Full-stack Developer", color: "from-green-500 to-teal-600" },
  { text: "Information Technology", color: "from-orange-500 to-red-600" },
  { text: "Agency", color: "from-purple-500 to-pink-600" },
  { text: "Open-source", color: "from-indigo-500 to-blue-600" }
];

const stats = [
  { label: "Years Learning", value: "3+", icon: "📚" },
  { label: "Technologies", value: "15+", icon: "⚡" },
  { label: "Projects", value: "50+", icon: "🚀" },
  { label: "Open Source", value: "Active", icon: "💡" }
];

const journey = [
  {
    phase: "Discovery",
    title: "Self-taught Journey Begins",
    description: "Started my coding adventure with curiosity and determination",
    year: "2021",
    color: "from-blue-400 to-blue-600"
  },
  {
    phase: "Growth",
    title: "Full-stack Development",
    description: "Mastered both frontend and backend technologies",
    year: "2022",
    color: "from-green-400 to-green-600"
  },
  {
    phase: "Education",
    title: "B.Sc. Information Technology",
    description: "Pursuing formal education to complement practical skills",
    year: "2023",
    color: "from-purple-400 to-purple-600"
  },
  {
    phase: "Innovation",
    title: "Agency Launch",
    description: "Building a web development agency for custom solutions",
    year: "2024",
    color: "from-orange-400 to-orange-600"
  }
];

export default function AboutPage() {
  const [activeJourneyStep, setActiveJourneyStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-slate-800">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 dark:from-blue-500/20 dark:to-purple-500/20"></div>
        <div className="relative mx-8 md:mx-20 lg:mx-24 pt-16 pb-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
              <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent mb-6">
                About Me
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mb-8 rounded-full"></div>
              
              <div className="space-y-6">
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                  Hi, I'm{" "}
                  <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-2xl">
                    Dayanand Gawade
                  </span>
                </p>
                
                <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                  A passionate developer who believes in the power of continuous learning 
                  and turning innovative ideas into reality through code.
                </p>
              </div>
            </div>

            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700 group"
                  >
                    <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-8 md:mx-20 lg:mx-24 py-16">
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200 dark:border-gray-700">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            My Story
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
            <p className="text-lg leading-relaxed mb-6">
              I'm a{" "}
              <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                self-taught
              </span>{" "}
              full-stack developer with a deep passion for building robust, scalable web applications. 
              My journey began with curiosity and has evolved into expertise across the entire development spectrum. 
              With a strong foundation in{" "}
              <span className="font-semibold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                Information Technology
              </span>
              , I'm currently pursuing my B.Sc. degree while constantly expanding my skills in both frontend and backend development.
            </p>

            <div className="grid md:grid-cols-3 gap-6 my-12">
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">💻</span>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Frontend Excellence</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Crafting seamless user experiences with modern frameworks</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Backend Power</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Implementing efficient server-side logic and architecture</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Full Solutions</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Turning ideas into functional, high-performing applications</p>
              </div>
            </div>

            <p className="text-lg leading-relaxed mb-6">
              I'm currently in the exciting phase of launching my own web development{" "}
              <span className="font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                agency
              </span>
              , where I aim to deliver customized, client-focused solutions that truly stand out in the digital landscape. 
              My approach combines technical excellence with creative problem-solving to create digital experiences that matter.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              When I'm not immersed in code, you'll find me exploring cutting-edge technologies, contributing to{" "}
              <span className="font-semibold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                open-source
              </span>{" "}
              projects on GitHub, and connecting with the developer community. I believe in giving back to the ecosystem that has taught me so much.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-8 md:mx-20 lg:mx-24 py-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          My Journey
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {journey.map((step, index) => (
            <div
              key={index}
              className={`group cursor-pointer transition-all duration-300 ${
                activeJourneyStep === index ? 'scale-105' : 'hover:scale-105'
              }`}
              onClick={() => setActiveJourneyStep(activeJourneyStep === index ? -1 : index)}
            >
              <div className={`bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700 relative overflow-hidden ${
                activeJourneyStep === index ? 'ring-4 ring-blue-500/20' : ''
              }`}>
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${step.color} opacity-10 rounded-full -translate-y-16 translate-x-16`}></div>
                
                <div className="relative z-10">
                  <div className={`inline-block px-3 py-1 bg-gradient-to-r ${step.color} text-white text-xs font-semibold rounded-full mb-3`}>
                    {step.phase}
                  </div>
                  
                  <div className="text-right mb-4">
                    <span className="text-2xl font-bold text-gray-400 dark:text-gray-600">
                      {step.year}
                    </span>
                  </div>
                  
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-8 md:mx-20 lg:mx-24 py-16">
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-3xl p-12 text-white text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-48 translate-x-48"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-32 -translate-x-32"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Let's Create Something Amazing</h2>
            <div className="w-16 h-1 bg-white/50 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              I'm always open to new opportunities, exciting collaborations, and innovative projects. 
              Whether you have a groundbreaking idea or need a reliable development partner, 
              I'd love to hear from you and explore how we can work together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors hover:scale-105 transform">
                Get In Touch
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all hover:scale-105 transform">
                View Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}