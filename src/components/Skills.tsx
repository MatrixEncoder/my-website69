import React from 'react';
import { 
  Shield, Brain, Lock, Terminal, Code, Database,
  Server, Network, Cpu, Cloud, Bot, LineChart
} from 'lucide-react';
import { SectionTitle } from './ui/SectionTitle';

const skills = [
  { name: "Cybersecurity", icon: Shield, color: "cyan" },
  { name: "Machine Learning", icon: Brain, color: "purple" },
  { name: "Cryptography", icon: Lock, color: "cyan" },
  { name: "Network Security", icon: Network, color: "purple" },
  { name: "Cloud Security", icon: Cloud, color: "cyan" },
  { name: "Data Analysis", icon: LineChart, color: "purple" },
  { name: "System Architecture", icon: Server, color: "cyan" },
  { name: "AI Development", icon: Bot, color: "purple" },
  { name: "Penetration Testing", icon: Terminal, color: "cyan" },
  { name: "Secure Coding", icon: Code, color: "purple" },
  { name: "Database Security", icon: Database, color: "cyan" },
  { name: "Hardware Security", icon: Cpu, color: "purple" }
] as const;

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 bg-black/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Technical Skills</SectionTitle>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group flex flex-col items-center p-6 bg-gray-900/50 rounded-xl hover:bg-gray-800/50 transition-all duration-300"
            >
              <skill.icon className={`h-10 w-10 mb-4 text-${skill.color}-500 group-hover:animate-pulse`} />
              <span className="text-gray-300 text-center">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}