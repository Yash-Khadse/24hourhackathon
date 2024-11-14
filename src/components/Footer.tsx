import React from 'react';
import { Brain, Github, Instagram, Linkedin, MessageCircleIcon } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark/50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Brain className="h-8 w-8 text-primary" />
            <span className="font-bold text-xl">CORTEX24</span>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://www.instagram.com/atharvadsc?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a
              href="https://www.whatsapp.com/channel/0029VaEgcvJ4yltKPdkwOd26"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <MessageCircleIcon className="h-6 w-6" />
            </a>
            <a
              href="https://in.linkedin.com/company/atharva-data-science-community"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-gray-400">Email: contact@cortex24.com</p>
              <p className="text-gray-400">Phone: +91 6304764805</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Address</h3>
              <p className="text-gray-400">Malla Reddy Engineering College</p>
              <p className="text-gray-400">Hyderabad, India</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Organized by</h3>
              <p className="text-gray-400">Atharva Data Science Community</p>
              <p className="text-gray-400">MREC</p>
            </div>
          </div>

          <div className="text-center mt-8 text-gray-400">
            <p>© 2024 ADSC. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}