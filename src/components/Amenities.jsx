import { motion } from 'framer-motion';
import { RiSparklingLine, RiGobletLine, RiHeartPulseLine } from 'react-icons/ri';

const amenities = [
  {
    icon: <RiSparklingLine size={40} />,
    title: "Private Beach Access",
    description: "Exclusive access to pristine shorelines"
  },
  {
    icon: <RiGobletLine size={40} />,
    title: "Michelin-Starred Dining",
    description: "Culinary excellence at your service"
  },
  {
    icon: <RiHeartPulseLine size={40} />,
    title: "Luxury Spa",
    description: "World-class wellness treatments"
  }
];

const Amenities = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl mb-4">Exceptional Amenities</h2>
          <div className="w-20 h-1 bg-gold mx-auto"/>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {amenities.map((amenity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="text-center"
            >
              <div className="text-gold mb-4">{amenity.icon}</div>
              <h3 className="font-serif text-2xl mb-2">{amenity.title}</h3>
              <p className="text-gray-600">{amenity.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;