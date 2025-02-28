import { motion } from 'framer-motion';

const treatments = [
  {
    title: "Royal Gold Treatment",
    duration: "180 minutes",
    description: "24k gold facial, full body massage, and private spa suite",
    price: "$800"
  },
  {
    title: "Diamond Radiance",
    duration: "120 minutes",
    description: "Diamond dust exfoliation and crystal healing therapy",
    price: "$600"
  },
  {
    title: "Couples Retreat",
    duration: "240 minutes",
    description: "Private spa suite, champagne, and synchronized treatments",
    price: "$1,200"
  }
];

const Spa = () => {
  return (
    <section id="spa" className="py-24 bg-[url('https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?ixlib=rb-4.0.3')] bg-cover bg-center relative">
      <div className="absolute inset-0 bg-black/40"/>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl mb-4">Wellness Sanctuary</h2>
          <div className="w-20 h-1 bg-gold mx-auto"/>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {treatments.map((treatment, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="backdrop-blur-sm bg-white/10 p-8 rounded-lg"
            >
              <h3 className="font-serif text-2xl mb-2">{treatment.title}</h3>
              <p className="text-gold mb-2">{treatment.duration}</p>
              <p className="text-gray-200 mb-4">{treatment.description}</p>
              <p className="text-2xl font-serif">{treatment.price}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Spa;