'use client'

import { motion } from "framer-motion";
import { conference } from "../../data/conferenceData";
import { useSession } from "next-auth/react";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function ConferenceList() {
  const { status } = useSession();
  
  if(status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-linear-to-b from-neutral-950 via-neutral-900 to-neutral-950">
        <motion.p 
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white/60 text-lg"
        >
          Loading...
        </motion.p>
      </div>
    );
  }

  if(status !== "authenticated") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-linear-to-b from-neutral-950 via-neutral-900 to-neutral-950 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-white/80 text-xl mb-6">Access Denied. Please log in to view this page.</p>
          <motion.a
            href="/login"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-linear-to-r from-primary-600 to-accent-600 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-primary-500/30 transition-all duration-300"
          >
            Sign In
          </motion.a>
        </motion.div>
      </div>
    );
  }

  return (
    <section className="relative bg-linear-to-b from-neutral-950 via-neutral-900 to-neutral-950 py-20 sm:py-28 lg:py-40 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Decorative gradient orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <p className="text-lg sm:text-xl font-semibold text-white uppercase tracking-widest mb-4">
              Exclusive Access!
            </p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white mb-6 leading-tight drop-shadow-lg">
              Recruiting Resources
            </h1>
            <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto font-light">
              Explore top universities and their recruiting information across multiple conferences.
            </p>
          </motion.div>

          {/* Conferences */}
          {conference.conferences.map((conf, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-24"
            >
              {/* Conference Title */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-12"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-1 w-16 bg-linear-to-r from-primary-500 to-accent-500 rounded-full"></div>
                  <h2 className="text-4xl sm:text-5xl font-black text-white">
                    {conf.name}
                  </h2>
                </div>
              </motion.div>

              {/* Schools Grid */} 
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {conf.schools.map((school, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="group h-full"
                  >
                    <motion.div 
                      className="relative overflow-hidden rounded-2xl bg-white/8 backdrop-blur-md border border-white/15 hover:border-primary-400/50 transition-all duration-300 h-full flex flex-col hover:shadow-xl hover:shadow-primary-500/20"
                      whileHover={{ y: -5 }}
                    >
                      {/* Gradient accent on hover */}
                      <div className="absolute inset-0 bg-linear-to-br from-primary-500/10 to-accent-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>

                      {/* Image Container */}
                      <div className="relative overflow-hidden h-48 bg-linear-to-br from-primary-600/20 to-accent-600/20">
                        <Image
                          src={school.img}
                          alt={school.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent"></div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 p-6 flex flex-col justify-between">
                        <div>
                          <h3 className="text-xl sm:text-2xl font-black text-white mb-2 line-clamp-2">
                            {school.name}
                          </h3>
                          <p className="text-primary-300 text-sm font-semibold uppercase tracking-widest mb-3">
                            {school.city}, {school.state}
                          </p>
                          <p className="text-white/70 text-sm font-light leading-relaxed">
                            Access recruiting questionnaire and contact information
                          </p>
                        </div>

                        <motion.a
                          href={typeof school.recruit_questionnaire === 'string' ? school.recruit_questionnaire : school.recruit_questionnaire?.men || school.recruit_questionnaire?.women || '#'}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="mt-6 w-full text-center py-3 px-4 bg-linear-to-r from-primary-600 to-accent-600 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/30"
                        >
                          View Questionnaire
                        </motion.a>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>
  );
}

