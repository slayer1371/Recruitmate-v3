'use client'

import quf from '../public/quf.png';
import nd from '../public/notredamef.png';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Logoclouds()
{
    return (
      <>
        <motion.div 
          className="relative bg-linear-to-br from-neutral-900 via-neutral-800 to-neutral-900 py-20 sm:py-28 lg:py-40 overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Decorative background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl"></div>
          </div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.h2 
              className="text-center text-xl sm:text-2xl font-semibold text-white uppercase tracking-widest mb-4"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Learn From Top Mentors
            </motion.h2>
            <motion.h3
              className="text-center text-5xl sm:text-6xl md:text-6xl font-black text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Prestigious University Mentors
            </motion.h3>
            <motion.p
              className="text-center text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-16 font-light"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Our mentors are college athletes from the nation&apos;s top programs, ready to guide your journey
            </motion.p>
            
            <div className="mx-auto grid max-w-5xl grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 sm:gap-12 items-center justify-items-center">
              {[
                "https://img1.wsimg.com/isteam/ip/8b8fcb7f-dd76-4fdf-b62a-52d8cc7e8443/Incarnate-Word-Cardinals-Baseball-Logo-a9ae0fb.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:356,h:200,cg:true",
                "https://img1.wsimg.com/isteam/ip/8b8fcb7f-dd76-4fdf-b62a-52d8cc7e8443/logo-vertical-stacked-black-text-77be3fe.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:271,h:200,cg:true",
                "https://img1.wsimg.com/isteam/ip/8b8fcb7f-dd76-4fdf-b62a-52d8cc7e8443/Southalabama_jaguars_logo-bf9d3ad.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:276,h:200,cg:true",
                "https://img1.wsimg.com/isteam/ip/8b8fcb7f-dd76-4fdf-b62a-52d8cc7e8443/mississippi-state-university-logo-free-77132b0.png/:/rs=w:320,h:200,cg:true,m/cr=w:320,h:200",
              ].map((src, index) => (
                <motion.div
                  key={index}
                  className="w-full h-20 flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <Image 
                    className="max-h-20 w-full object-contain grayscale-0 hover:scale-110 transition-all duration-300 brightness-100" 
                    src={src} 
                    alt="University logo"
                    width={100}
                    height={80}
                  />
                </motion.div>
              ))}
              
              <motion.div
                className="w-full h-20 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ scale: 1.1 }}
              >
                <Image 
                  className="max-h-20 w-full object-contain grayscale-0 hover:scale-110 transition-all duration-300 brightness-100" 
                  src={quf} 
                  alt="University logo"
                  width={100}
                  height={80}
                />
              </motion.div>
              
              <motion.div
                className="w-full h-20 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.25 }}
                whileHover={{ scale: 1.1 }}
              >
                <Image 
                  className="max-h-20 w-full object-contain grayscale-0 hover:scale-110 transition-all duration-300 brightness-100" 
                  src={nd} 
                  alt="Notre Dame logo"
                  width={100}
                  height={80}
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </>
    );
}