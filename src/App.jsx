import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Amenities from './components/Amenities';
import Accommodations from './components/Accommodations';
import Dining from './components/Dining';
import Spa from './components/Spa';
import Experiences from './components/Experiences';
import Contact from './components/Contact';

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen"
    >
      <Navbar />
      <Hero />
      <Amenities />
      <Accommodations />
      <Dining />
      <Spa />
      <Experiences />
      <Contact />
    </motion.div>
  );
}

export default App;