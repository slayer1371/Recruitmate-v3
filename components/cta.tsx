'use client'

import Image from "next/image";
import dash from "../public/mobile1.jpg"
import { motion } from "framer-motion"
import { Ctaprops } from "@/types/cta";

export default function Cta(props : Ctaprops){
    return (
      <>
        <motion.div 
          className="relative bg-linear-to-br from-neutral-900 via-neutral-800 to-neutral-900 overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Decorative background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl translate-y-1/2"></div>
          </div>

          <div className="mx-auto max-w-7xl py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              className="relative isolate overflow-hidden bg-linear-to-br from-primary-600 via-primary-500 to-accent-600 px-6 py-20 rounded-3xl shadow-2xl sm:rounded-4xl sm:px-16 md:py-32 lg:flex lg:gap-x-16 lg:px-20 lg:py-0 backdrop-blur-xl border border-white/10"
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <svg viewBox="0 0 1024 1024" className="absolute top-1/2 left-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0" aria-hidden="true">
                <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.15" />
                <defs>
                  <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                    <stop stopColor="#ffffff" />
                    <stop offset="1" stopColor="#ffffff" />
                  </radialGradient>
                </defs>
              </svg>
              <motion.div 
                className="mx-auto max-w-xl text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white drop-shadow-lg mb-4 leading-tight">
                  {(props.heading == "") ? "Say the Right Thing. Empower Your Future." : props.heading}
                </h2>
                <p className="mt-8 text-lg sm:text-xl text-white/90 leading-relaxed font-light max-w-xl">
                  {(props.text == "") ? "For high school athletes looking to compete at the next level, we show your athlete exactly where to start, what to say to coaches, and how to get noticed. Our step-by-step lessons, proven email templates, and mentorship ensure your child has a clear plan to reach their goals." : props.text}
                </p>
                <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 lg:justify-start">
                  <motion.a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    onClick={(e)=>{
                      e.preventDefault();
                      window.open("https://buy.stripe.com/7sI8wGc70azfcGQ8wx", "_blank");
                    }} 
                    className="group relative px-8 py-3.5 rounded-xl font-semibold text-white bg-white/20 hover:bg-white/30 border border-white/40 hover:border-white/60 transition-all duration-300 transform hover:scale-105 backdrop-blur-md flex items-center gap-2 shadow-xl"
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Get Started Today</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </motion.a>
                  <a href="#" className="text-base font-semibold text-white hover:text-white/80 transition-colors inline-flex items-center gap-2">
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </div>
              </motion.div>
              <motion.div 
                className="relative mt-16 h-96 lg:mt-0 lg:h-auto w-full lg:w-1/2 shrink-0 flex items-center justify-center"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="relative w-full h-full">
                  <Image 
                    src={dash}
                    alt="Football player"
                    fill
                    priority
                    className="object-contain object-center"
                  />
                </div>
              </motion.div>

            </motion.div>
          </div>
        </motion.div>
      </>
    );
}