"use client"

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Nav from "./Nav";
import { HeroProps } from "@/types/hero";

export default function Hero(props : HeroProps) {
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = props.start_time || 0;
    }
  }, [props.start_time]);

  return (
    <>
      <Nav resourcesPath={props.res} />
      <div className="bg-white">
        <div className="relative isolate px-4 sm:px-6 lg:px-8 pt-32 pb-20 sm:pb-32 lg:pb-40">
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover -z-10"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={props.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/30 to-black/50 -z-5"></div>

          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-primary-400 to-accent-500 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            ></div>
          </div>
            <div className="mx-auto max-w-3xl py-12 sm:py-20 lg:py-28">
              <motion.div className="text-center">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="inline-block mb-6 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md"
                >
                  <span className="text-sm font-semibold bg-linear-to-r from-primary-300 to-accent-300 bg-clip-text text-white">✨ Your Path to Excellence</span>
                </motion.div>
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-zinc-300 drop-shadow-xl mb-6 leading-tight"
                >
                  {props.heading}
                </motion.h1>
                {/* <p className="text-lg sm:text-xl text-white/85 drop-shadow-md mb-8 max-w-2xl mx-auto leading-relaxed font-light">
                  Your path to athletic excellence starts here. Get noticed by top college coaches and take your game to the next level.
                </p> */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
                >
                  <a
                    href="#"
                    onClick={(e)=>{
                      e.preventDefault();
                      router.push("https://buy.stripe.com/7sI8wGc70azfcGQ8wx");
                    }}
                    className="group relative px-8 py-3.5 rounded-xl font-semibold text-white bg-linear-to-r from-primary-600 via-primary-500 to-accent-600 hover:from-primary-700 hover:via-primary-600 hover:to-accent-700 transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-2xl hover:shadow-primary-500/50 flex items-center gap-2 backdrop-blur-sm"
                  >
                    <span>Get Started</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </a>
                  <a
                    href="#features"
                    className="px-8 py-3.5 rounded-xl font-semibold text-white border-2 border-white/40 hover:border-white/80 hover:bg-white/10 backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
                  >
                    Learn More
                    </a>
                </motion.div>
              </motion.div>
            </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-primary-400 to-accent-500 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}
