import { details, features } from "../constants";
import { Element } from "react-scroll";
import Button from "../elemenst/Button";
import { motion } from "framer-motion";

const Features = () => {
  return (
    <section>
      <Element name="features">
        <div className="container">
          {/* WRAPPER */}
          <div className="relative flex md:flex-wrap flex-nowrap border-2 border-s3 rounded-7xl md:overflow-hidden max-md:flex-col feature-after md:g7 max-md:border-none max-md:rounded-none max-md:gap-3">
            {/* FEATURE CARDS */}
            {features.map(({ id, icon, caption, title, text, button }, i) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: i * 0.15 }}
                className="relative z-2 md:px-10 px-5 md:pb-10 pb-5 flex-50 max-md:g7 max-md:border-2 max-md:border-s3 max-md:rounded-3xl max-md:flex-320"
              >
                <div className="w-full flex justify-start items-start">
                  <div className="-ml-3 mb-12 flex items-center justify-center flex-col">
                    <div className="w-0.5 h-16 bg-s3" />
                    <motion.img
                      src={icon}
                      className="size-28 object-contain"
                      alt={title}
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      viewport={{ once: false }}
                    />
                  </div>
                </div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                  viewport={{ once: false }}
                  className="caption mb-5 max-md:mb-6 max-md:h-5"
                >
                  {caption}
                </motion.p>

                <motion.h2
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, ease: "easeOut", delay: 0.15 }}
                  viewport={{ once: false }}
                  className="max-w-400 mb-7 h3 text-p4 max-md:mb-6 max-md:h5"
                >
                  {title}
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                  viewport={{ once: false }}
                  className="mb-11 body-1 max-md:mb-8 max-md:body-3"
                >
                  {text}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
                  viewport={{ once: false }}
                >
                  <Button icon={button.icon}>{button.title}</Button>
                </motion.div>
              </motion.div>
            ))}

            {/* DETAILS LIST - FIXED */}
            <motion.ul
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              variants={{
                hidden: {},
                show: {
                  transition: { staggerChildren: 0.15 },
                },
              }}
              className="flex flex-col md:flex-row relative justify-around flex-grow px-[5%] border-2 border-s3 rounded-7xl mx-md:hidden"
            >
              <div className="absolute bg-s3/20 top-[38%] left-0 right-0 w-full h-[1px] z-10" />

              {details.map(({ id, icon, title }) => (
                <motion.li
                  key={id}
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    show: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="w-full md:w-auto relative pt-16 px-4 pb-14 group"
                >
                  <div className="absolute top-0 bottom-0 left-1/2 bg-s3/20 w-[1px] h-full z-10" />
                  <div className="relative">
                    {/* GLOW EFFECT FIX */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
                    
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className="relative flex items-center justify-center mx-auto mb-3 border-2 border-s2 rounded-full hover:border-s4 transition-all duration-500 shadow-500 size-20 bg-white dark:bg-gray-900 z-10 overflow-visible"
                    >
                      <img
                        src={icon}
                        alt={title}
                        className="size-45/20 object-contain z-20"
                      />
                    </motion.div>
                  </div>

                  <h3 className="relative z-2 max-w-36 mx-auto my-0 base-small text-center uppercase">
                    {title}
                  </h3>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Features;