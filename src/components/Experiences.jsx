import { motion } from 'framer-motion';

const experiences = [
  {
    title: "Private Yacht Tour",
    image: "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?ixlib=rb-4.0.3",
    description: "Explore crystal-clear waters on our luxury yacht"
  },
  {
    title: "Helicopter Tour",
    image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?ixlib=rb-4.0.3",
    description: "Aerial views of the coastline and city"
  },
  {
    title: "Wine Tasting",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3",
    description: "Exclusive wine cellar experience with sommelier"
  },
  {
    title: "Cultural Tours",
    image: "https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-4.0.3",
    description: "Guided tours to local heritage sites"
  }
];

const Experiences = () => {
  return (
    <section id="experiences" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl mb-4">Curated Experiences</h2>
          <div className="w-20 h-1 bg-gold mx-auto"/>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative group cursor-pointer"
            >
              <div className="h-80 overflow-hidden rounded-lg">
                <img 
                  src={experience.image} 
                  alt={experience.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-colors duration-300"/>
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                  <h3 className="font-serif text-2xl mb-2">{experience.title}</h3>
                  <p className="text-gray-200 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition duration-300">
                    {experience.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;