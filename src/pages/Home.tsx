import React from 'react';
import Hero from '../components/Hero';
import Tracks from '../components/Tracks';
import Schedule from '../components/Schedule';
import Highlights from '../components/Highlights';
import Sponsors from '../components/Sponsors';

export default function Home() {
  return (
    <main>
      <Hero />
      <Tracks />
      <Highlights />
      <Schedule />
      <Sponsors/>
    </main>
  );
}