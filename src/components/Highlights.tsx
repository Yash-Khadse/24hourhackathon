import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Gift, Coffee, Gamepad } from 'lucide-react';

const highlights = [
  {
    icon: Trophy,
    title: '₹50,000 Prize Pool',
    description: 'Win big with our extensive prize pool across all tracks'
  },
  {
    icon: Gift,
    title: 'Swag & Goodies',
    description: 'Amazing swag bags and goodies for all participants'
  },
  {
    icon: Coffee,
    title: 'Food & Refreshments',
    description: 'Keep your energy high with meals and refreshments throughout the event'
  },
  {
    icon: Gamepad,
    title: 'Fun Activities',
    description: 'Enjoy quizzes, flash mobs, campfire, and VR experiences'
  }
];

export default function Highlights() {
  return (
    <section className="py-20 bg-gradient-to-b from-dark/95 to-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Event Highlights</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            More than just a hackathon - an unforgettable experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6"
            >
              <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}