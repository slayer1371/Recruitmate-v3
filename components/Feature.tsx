'use client'

import { FeatureProps } from "@/types/features";
import { motion } from "framer-motion";

export default function Feature(props: FeatureProps)
{
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.2,
          delayChildren: 0.1,
        },
      },
    };

    return (
      <>
        <motion.div 
          id="features" 
          className="relative bg-linear-to-br from-neutral-900 via-neutral-800 to-neutral-900 py-16 sm:py-24 md:py-32 lg:py-40 overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Decorative background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl translate-y-1/2"></div>
          </div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div className="mx-auto max-w-3xl lg:text-center" >
              {props.subheader && (
                <div className="inline-block mb-6 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-400/30 backdrop-blur-md">
                  <p className="text-sm font-semibold text-primary-300 uppercase tracking-widest">
                    {props.subheader}
                  </p>
                </div>
              )}
              <h2 className="mt-6 text-5xl sm:text-6xl md:text-7xl font-black text-white leading-tight drop-shadow-lg">
                {props.header}
              </h2>
              <p className="mt-8 text-lg sm:text-xl text-neutral-300 leading-relaxed max-w-3xl mx-auto font-light">
                {props.content}
              </p>
            </motion.div>

            {/* Feature grid would go here if needed */}
          </div>
        </motion.div>
        </>
    )
}