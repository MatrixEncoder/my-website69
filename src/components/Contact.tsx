import React from 'react';
import { Mail, Github, Linkedin, Twitter, Phone, Instagram } from 'lucide-react'; // Import Instagram icon
import { SectionTitle } from './ui/SectionTitle';
import { IconButton } from './ui/IconButton';

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Get in Touch</SectionTitle>
        
        <div className="max-w-3xl mx-auto bg-gray-900/50 p-8 rounded-xl border border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
              <div className="space-y-4">
                {/* Email */}
                <a
                  href="mailto:dhawalsri77@gmail.com"
                  className="flex items-center space-x-3 text-gray-400 hover:text-cyan-500 transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  <span>dhawalsri77@gmail.com</span>
                </a>

                {/* Phone Number */}
                <a
                  href="tel:+919125916986"
                  className="flex items-center space-x-3 text-gray-400 hover:text-cyan-500 transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  <span>+91-9125916986</span>
                </a>

                {/* Social Links */}
                <div className="flex space-x-4">
                  <IconButton icon={Github} href="https://github.com/MatrixEncoder" />
                  <IconButton icon={Linkedin} href="https://www.linkedin.com/in/suryansh-srivastava-746113292" color="purple" />
                  <IconButton icon={Twitter} href="https://twitter.com" />
                  {/* Instagram Icon Added */}
                  <IconButton icon={Instagram} href="https://www.instagram.com/illusionist__666" color="pink" />
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-2 bg-black/50 border border-gray-800 rounded-lg focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-gray-300"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 bg-black/50 border border-gray-800 rounded-lg focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-gray-300"
              />
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full px-4 py-2 bg-black/50 border border-gray-800 rounded-lg focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-gray-300"
              />
              <button
                type="submit"
                className="w-full py-2 px-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
