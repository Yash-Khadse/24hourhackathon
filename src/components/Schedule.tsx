import React from 'react';
import { motion } from 'framer-motion';

const scheduleItems = [
  { time: '10:00 AM', day: 'Day 1', event: 'Registration & Check-in' },
  { time: '11:00 AM', day: 'Day 1', event: 'Opening Ceremony' },
  { time: '12:00 PM', day: 'Day 1', event: 'Hackathon Begins' },
  { time: '02:00 PM', day: 'Day 1', event: 'Lunch Break' },
  { time: '05:00 PM', day: 'Day 1', event: 'Flash Mob' },
  { time: '08:00 PM', day: 'Day 1', event: 'Dinner & Campfire' },
  { time: '09:00 AM', day: 'Day 2', event: 'Judging Begins' },
  { time: '12:00 PM', day: 'Day 2', event: 'Prize Distribution' }
];

export default function Schedule() {
  return (
    <section id="schedule" className="py-20 bg-gradient-to-b from-dark to-dark/95">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Event Schedule</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            24 hours of innovation, fun, and endless possibilities
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {scheduleItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative pl-8 pb-8 last:pb-0"
            >
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-primary/30">
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary"></div>
              </div>
              
              <div className="bg-white/5 rounded-lg p-6 ml-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <span className="text-primary font-semibold">{item.time}</span>
                    <span className="text-gray-400 ml-2">| {item.day}</span>
                  </div>
                  <h3 className="text-xl font-medium">{item.event}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}