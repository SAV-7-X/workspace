import React, { useState } from 'react';
import { Code, Palette, Database, Server, Globe, Lightbulb } from 'lucide-react';

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');
  
  const skillCategories = {
    frontend: {
      icon: <Code className="w-6 h-6" />,
      title: "Frontend Development",
      skills: [
        { name: "React", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "HTML/CSS", level: 95 },
        { name: "Tailwind", level: 88 },
      ]
    },
    design: {
      icon: <Palette className="w-6 h-6" />,
      title: "UI/UX Design",
      skills: [
        { name: "Figma", level: 85 },
        { name: "Adobe XD", level: 75 },
        { name: "User Research", level: 70 },
        { name: "Prototyping", level: 80 },
        { name: "Design Systems", level: 85 },
      ]
    },
    backend: {
      icon: <Server className="w-6 h-6" />,
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Python", level: 80 },
        { name: "PHP", level: 75 },
        { name: "RESTful APIs", level: 90 },
        { name: "GraphQL", level: 75 },
      ]
    },
    database: {
      icon: <Database className="w-6 h-6" />,
      title: "Database",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "MySQL", level: 80 },
        { name: "PostgreSQL", level: 75 },
        { name: "Redis", level: 70 },
        { name: "Firebase", level: 85 },
      ]
    },
    other: {
      icon: <Globe className="w-6 h-6" />,
      title: "Other Skills",
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 70 },
        { name: "CI/CD", level: 80 },
        { name: "Testing", level: 85 },
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-blue-900 to-gray-900 py-20 px-4 md:px-8">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-16 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-pulse">
          My Skills
        </h2>
        <p className="text-blue-300 text-lg md:text-xl max-w-2xl mx-auto">
          A comprehensive overview of my technical expertise and professional capabilities
        </p>
      </div>

      {/* Skills Container */}
      <div className="max-w-6xl mx-auto">
        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(skillCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105
                ${activeCategory === key 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/50' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
            >
              {category.icon}
              <span>{category.title}</span>
            </button>
          ))}
        </div>

        {/* Skills Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 bg-gray-900/50 rounded-2xl backdrop-blur-sm">
          {skillCategories[activeCategory].skills.map((skill, index) => (
            <div
              key={skill.name}
              className="transform hover:scale-105 transition-all duration-300"
              style={{
                animation: `fadeIn 0.5s ease-out ${index * 0.1}s both`
              }}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-white font-medium">{skill.name}</span>
                <span className="text-blue-400">{skill.level}%</span>
              </div>
              <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: `${skill.level}%`,
                    animation: `slideRight 1s ease-out ${index * 0.1}s both`
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full mix-blend-screen animate-float opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 200 + 50}px`,
                height: `${Math.random() * 200 + 50}px`,
                background: `radial-gradient(circle at center, 
                  ${['#60A5FA', '#3B82F6', '#2563EB'][Math.floor(Math.random() * 3)]}33, 
                  transparent)`,
                animation: `float ${Math.random() * 10 + 10}s infinite linear`,
                animationDelay: `-${Math.random() * 10}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Add required styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideRight {
          from { width: 0; }
          to { width: 100%; }
        }
        
        @keyframes float {
          0% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(20px, 20px) rotate(180deg); }
          100% { transform: translate(0, 0) rotate(360deg); }
        }
        
        .animate-float {
          animation: float 20s infinite linear;
        }
      `}</style>
    </div>
  );
};

export default SkillsSection;