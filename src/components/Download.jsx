import { Element } from 'react-scroll';
import { Marker } from '../elemenst/Marker';
import { links, logos } from '../constants/index.jsx';
import { motion } from 'framer-motion';

const Download = () => {
  return (
    <section>
      <Element name="download" className="g7 relative pb-32 pt-24 max-lg:pb-24 max-md:py-16">
        <div className="container">
          <div className="flex items-center">

            {/* Left Column */}
            <motion.div
              className="relative mr-6 flex-540 max-xl:flex-280 max-lg:flex-256 max-md:flex-100"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: false }}
            >
              <div className="mb-10">
                <img src="/images/xora.svg" width={160} height={55} alt="xora" />
              </div>
              <p className="body-1 mb-10 max-w-md">
                Try it now for free on iOS, Android, PC, Web - whatever your flavor, we've got you covered.
              </p>

              {/* Animated Links */}
              <motion.ul
                className="flex flex-wrap items-center gap-6"
                initial="hidden"
                whileInView="show"
                viewport={{ once: false }}
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}
              >
                {links.map(({ id, url, icon }) => (
                  <motion.li
                    key={id}
                    variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className="download_tech-link download_tech-link_last_before download_tech-link_last-after"
                  >
                    <a
                      className="size-22 download_tech-icon_before relative flex items-center justify-center rounded-half border-2 border-s3 bg-s1 transition-borderColor duration-500"
                      href={url}
                    >
                      <span className="absolute -top-2 rotate-90">
                        <Marker />
                      </span>
                      <img
                        src="/images/lines.svg"
                        alt="lines"
                        className="absolute size-13/20 object-contain"
                      />
                      <span className="download_tech-icon">{icon}</span>
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            {/* Right Column Preview Image */}
            <motion.div
              className="mb-10 max-md:hidden"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: false }}
            >
              <div className="download_preview-before download_preview-after rounded-40 relative w-[955px] border-2 border-s5 py-6">
                <div className="relative rounded-3xl bg-s1 px-6 pb-6 pt-14">
                  <span className="download_preview-dot left-6 bg-p2" />
                  <span className="download_preview-dot left-11 bg-p3" />
                  <span className="download_preview-dot left-16 bg-p1/15" />
                  <img
                    src="/images/screen.jpg"
                    alt="screen"
                    width={855}
                    height={655}
                    className="rounded-xl"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Logos Section */}
          <motion.ul
            className="mt-24 flex justify-center max-lg:hidden"
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          >
            {logos.map(({ id, url, width, height, title }) => (
              <motion.li
                key={id}
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="mx-10"
              >
                <img src={url} alt={title} width={width} height={height} />
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </Element>
    </section>
  );
};

export default Download;


