import React from 'react';
import { motion } from 'framer-motion';
import { Sprout, Brain, Heart, Leaf, Cpu } from 'lucide-react';

const tracks = [
  {
    icon: Brain,
    title: 'Open Innovation',
    description: 'Unleash your creativity with no bounds. Build solutions that push the boundaries of technology.'
  },
  {
    icon: Sprout,
    title: 'Agrotech',
    description: 'Revolutionize agriculture through technology. Create solutions for sustainable farming and food security.'
  },
  {
    icon: Heart,
    title: 'Medtech',
    description: 'Innovation in healthcare technology. Develop solutions that can save lives and improve patient care.'
  },
  {
    icon: Leaf,
    title: 'Sustainable Development',
    description: 'Create eco-friendly solutions. Address environmental challenges through innovative technology.'
  },
  {
    icon: Cpu,
    title: 'Smart Automation',
    description: 'Build the future of automation. Develop intelligent systems that make life easier and more efficient.'
  }
];

export default function Tracks() {
  return (
    <section id="tracks" className="py-20 bg-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Event Tracks</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose your innovation path from our carefully curated tracks, each designed to address real-world challenges
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tracks.map((track, index) => (
            <motion.div
              key={track.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-colors"
            >
              <track.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{track.title}</h3>
              <p className="text-gray-400">{track.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}