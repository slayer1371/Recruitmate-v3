'use client'

import { motion } from "framer-motion";

export default function Newsletter(props : {heading: string, subheader: string}) {
    return (
      <>
        <motion.div 
          className="relative isolate overflow-hidden bg-linear-to-br from-neutral-900 via-neutral-800 to-neutral-900 py-20 sm:py-28 lg:py-40"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Decorative background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl translate-y-1/2"></div>
          </div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              className="mx-auto grid max-w-3xl grid-cols-1 gap-y-12"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="max-w-3xl text-center mx-auto">
                <h2 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-white drop-shadow-lg mb-6 leading-tight">
                  {props.heading}
                </h2>
                <p className="mt-8 text-lg sm:text-xl text-white/85 drop-shadow-md font-light leading-relaxed">
                  {props.subheader}
                </p>
                <div className="mt-12 flex flex-col sm:flex-row max-w-lg gap-3 mx-auto">
                  <label htmlFor="email-address" className="sr-only">Email address</label>
                  <input 
                    id="email-address" 
                    name="email" 
                    type="email" 
                    autoComplete="email" 
                    required 
                    className="flex-1 rounded-xl bg-white/10 px-5 py-3.5 text-base text-white placeholder:text-white/60 border-2 border-white/20 hover:border-white/40 focus:border-white/60 focus:ring-2 focus:ring-white/50 transition-all backdrop-blur-sm font-medium" 
                    placeholder="Enter your email" 
                  />
                  <motion.button 
                    onClick={(e)=>{
                      e.preventDefault(); 
                      window.open("/info","_blank");
                    }} 
                    type="submit" 
                    className="rounded-xl bg-linear-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white px-8 py-3.5 text-base font-semibold shadow-lg hover:shadow-xl hover:shadow-primary-500/50 transition-all transform hover:scale-105 whitespace-nowrap"
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Subscribe
                  </motion.button>
                </div>
                <p className="mt-4 text-sm text-white/60">
                  No spam, just exclusive insights delivered to your inbox.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Decorative gradient background */}
          <div className="absolute top-0 right-0 -z-10 blur-3xl opacity-20">
            <div className="aspect-[1155/678] w-[36.125rem] bg-linear-to-tr from-primary-400 to-accent-400" 
              style={{
                clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}>
            </div>
          </div>
        </motion.div>
      </>
    );
}