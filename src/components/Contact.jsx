import { motion } from 'framer-motion';
import { RiMapPin2Line, RiPhoneLine, RiMailLine } from 'react-icons/ri';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl mb-4">Contact Us</h2>
          <div className="w-20 h-1 bg-gold mx-auto"/>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="font-serif text-2xl mb-6">Get in Touch</h3>
            <div className="flex items-center gap-4">
              <RiMapPin2Line className="text-gold text-2xl"/>
              <p>1234 Luxury Avenue, Paradise Island</p>
            </div>
            <div className="flex items-center gap-4">
              <RiPhoneLine className="text-gold text-2xl"/>
              <p>+1 (555) 123-4567</p>
            </div>
            <div className="flex items-center gap-4">
              <RiMailLine className="text-gold text-2xl"/>
              <p>reservations@imperialpalace.com</p>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gold"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gold"
              />
            </div>
            <div>
              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gold"
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gold text-white py-3 rounded-lg font-sans tracking-wider uppercase text-sm"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;