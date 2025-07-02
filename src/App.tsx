import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Story from './components/Story';
import Gallery from './components/Gallery';
import RSVP from './components/RSVP';
import PracticalInfo from './components/PracticalInfo';
import Registry from './components/Registry';
import FOMO from './components/FOMO';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Story />
      <Gallery />
      <RSVP />
      <PracticalInfo />
      <Registry />
      <FOMO />
      <Footer />
    </div>
  );
}

export default App;