import { motion } from 'framer-motion';
import { RiStarFill } from 'react-icons/ri';

const restaurants = [
  {
    name: "Le Ciel",
    cuisine: "French Fine Dining",
    description: "3 Michelin-starred restaurant offering exquisite French cuisine",
    image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?ixlib=rb-4.0.3"
  },
  {
    name: "Sakura",
    cuisine: "Japanese",
    description: "Traditional Japanese omakase experience",
    image: "https://images.unsplash.com/photo-1579027989536-b7b1f875659b?ixlib=rb-4.0.3"
  }
];

const Dining = () => {
  return (
    <section id="dining" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl mb-4">Culinary Excellence</h2>
          <div className="w-20 h-1 bg-gold mx-auto"/>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {restaurants.map((restaurant, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="h-96 overflow-hidden">
                <img 
                  src={restaurant.image} 
                  alt={restaurant.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-serif text-2xl mb-2">{restaurant.name}</h3>
                <p className="text-gold flex items-center gap-1 mb-2">
                  {restaurant.cuisine}
                  <RiStarFill className="inline"/>
                </p>
                <p className="text-gray-300">{restaurant.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dining;