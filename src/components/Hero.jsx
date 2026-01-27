import React from 'react'
import { Element, Link as LinkScroll } from 'react-scroll'
import Button from '../elemenst/Button'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div className=' relative  pt-60 pb-40 max-Lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32' >
      <Element name='hero' className='' >
        <div className='container ' >

            {/* LEFT CONTENT */}
            <div className='z-2 relative max-w-512 max-lg:max-w-388' >

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className='caption small-2 uppercase text-p3'
                >
                  Video Editing
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                  className='mb-6 h1 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12'
                >
                  Amazingly simple
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.75, ease: "easeOut", delay: 0.2 }}
                  className='max-w-440 mb-14 body-1 max-md:mb-10'
                >
                  we designed XORA AI Video Editor to be an easy to use, quick to learn, and surprisingly powerful.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
                >
                  <LinkScroll to='features' offset={-100} spy smooth >
                    <Button icon='/images/zap.svg'> Try it now </Button>
                  </LinkScroll>
                </motion.div>

            </div>

            {/* HERO IMAGE */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease: "easeOut", delay: 0.15 }}
              className='absolute -top-32 left-[calc(50%-340px)] pointer-events-none w-[1230px] hero-img_res'
            >
              <motion.img
                src="/images/hero.png"
                className='size-1230 max-lg:h-auto'
                alt="hero"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>

        </div>

      </Element>
    </div>
  )
}

export default Hero
