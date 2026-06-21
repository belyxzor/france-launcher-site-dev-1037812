import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { Features } from './sections/Features';
import { Community } from './sections/Community';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-dark-bg">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Community />
      </main>
      <Footer />
    </div>
  );
}

export default App;