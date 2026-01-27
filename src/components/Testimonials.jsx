import { testimonials } from '../constants';
import TestimonialItem from '../elemenst/TestimonialItem.jsx';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const halfLength = Math.floor(testimonials.length / 2);

  return (
    <section className="relative z-2 py-24 md:py-28 lg:py-40">
      <div className="container block lg:flex">

        {/* Animated Header */}
        <motion.div
          className="testimonials_head-res relative z-2 mr-20 flex-300"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: false }}
        >
          <p className="caption mb-5 max-md:mb-2.5">Wall of Love</p>
          <h3 className="h3 max-md:h5 text-p4">Words from our fans</h3>
        </motion.div>

        <div className="testimonials_inner-after testimonials_inner-before relative -my-12 -mr-3 flex items-start max-lg:static max-md:block">

          {/* Left Column Testimonials */}
          <motion.div
            className="testimonials_group-after flex-50"
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.15 } },
            }}
          >
            {testimonials.slice(0, halfLength).map((testimonial) => (
              <motion.div
                key={testimonial.id}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
              >
                <TestimonialItem
                  item={testimonial}
                  containerClassName="last:after:hidden last:after:max-md:block"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Right Column Testimonials */}
          <motion.div
            className="flex-50"
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.15 } },
            }}
           >
            {testimonials.slice(halfLength).map((testimonial) => (
              <motion.div
                key={testimonial.id}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
              >
                <TestimonialItem
                  item={testimonial}
                  containerClassName="last:after:hidden after:right-auto after:left-0 after:max-md:-left-4 px-12"
                />
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
