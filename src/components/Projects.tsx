import React from 'react';
import { Shield, Brain, Lock, Bot } from 'lucide-react';
import { SectionTitle } from './ui/SectionTitle';

const projects = [
  {
    title: "AI-Powered Threat Detection",
    description: "Machine learning system for real-time cyber threat detection and response",
    icon: Shield,
    color: "cyan"
  },
  {
    title: "Neural Network Security",
    description: "Advanced security framework for protecting machine learning models",
    icon: Brain,
    color: "purple"
  },
  {
    title: "Quantum Encryption System",
    description: "Next-generation encryption using quantum computing principles",
    icon: Lock,
    color: "cyan"
  },
  {
    title: "Autonomous Security Bot",
    description: "AI-driven security bot for automated vulnerability scanning",
    icon: Bot,
    color: "purple"
  }
] as const;

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Featured Projects</SectionTitle>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
              <project.icon className={`h-12 w-12 mb-4 text-${project.color}-500`} />
              <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-gray-400">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}