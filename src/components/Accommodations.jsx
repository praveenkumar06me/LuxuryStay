import { motion } from 'framer-motion';

const rooms = [
  {
    title: "Royal Presidential Suite",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3",
    description: "600 sq.m of pure luxury with private terrace and butler service",
    price: "From $5,000 per night"
  },
  {
    title: "Ocean View Suite",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3",
    description: "Panoramic ocean views with private balcony",
    price: "From $2,500 per night"
  },
  {
    title: "Penthouse Sky Suite",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3",
    description: "Exclusive top-floor suite with infinity pool and skyline views",
    price: "From $4,500 per night"
  }
];

const Accommodations = () => {
  return (
    <section id="accommodations" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl mb-4">Luxurious Accommodations</h2>
          <div className="w-20 h-1 bg-gold mx-auto"/>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={room.image} 
                  alt={room.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-2xl mb-2">{room.title}</h3>
                <p className="text-gray-600 mb-4">{room.description}</p>
                <p className="text-gold font-semibold">{room.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accommodations;