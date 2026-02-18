'use client'

import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useState, useMemo } from "react";
import { Search, Filter } from "lucide-react";

// Define simpler types matching the Prisma result to avoid complex imports if not needed, 
// or just use 'any' if strictly prototyping, but let's be decent.
// We expect the data passed from the server.

type School = {
  id: string;
  name: string;
  img: string;
  city: string;
  state: string;
  recruitQuestionnaire: string | null;
  questionnaireMen: string | null;
  questionnaireWomen: string | null;
};

type Conference = {
  id: string;
  name: string;
  schools: School[];
};

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

export default function ConferenceList({ conferences }: { conferences: Conference[] }) {
  const { status } = useSession();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedConference, setSelectedConference] = useState("All");

  // Filter logic
  const filteredConferences = useMemo(() => {
    // First filter by selected conference
    const conferenceFiltered = selectedConference === "All" 
      ? conferences 
      : conferences.filter(c => c.name === selectedConference);

    const query = searchQuery.toLowerCase().trim();
    
    // If no search query, return the conference filtered list directly
    if (!query) {
      return conferenceFiltered;
    }

    // Otherwise filter schools
    return conferenceFiltered
      .map((conf) => ({
        ...conf,
        schools: conf.schools.filter((school: School) => {
           const schoolName = school.name?.toLowerCase() || "";
           const schoolCity = school.city?.toLowerCase() || "";
           const schoolState = school.state?.toLowerCase() || "";
           
           return (
            schoolName.includes(query) ||
            schoolCity.includes(query) ||
            schoolState.includes(query)
          );
        }),
      }))
      .filter((conf) => conf.schools.length > 0);
  }, [searchQuery, selectedConference, conferences]);
  
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
    <section className="relative bg-linear-to-b from-neutral-950 via-neutral-900 to-neutral-950 py-20 sm:py-28 lg:py-40 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-screen">
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
            className="text-center mb-16"
          >
            <p className="text-lg sm:text-xl font-semibold text-white uppercase tracking-widest mb-4">
              Exclusive Access
            </p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white mb-6 leading-tight drop-shadow-lg">
              Recruiting Resources
            </h1>
            <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto font-light">
              Explore top universities and their recruiting information across multiple conferences.
            </p>
          </motion.div>

          {/* Search and Filters */}
          <div className="mb-20 max-w-4xl mx-auto">
            <motion.div 
              className="flex flex-col md:flex-row gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search by university, city, or state..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-primary-500/50 focus:bg-white/10 transition-all"
                />
              </div>
              
              <div className="relative md:w-64">
                <Filter className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 w-5 h-5" />
                <select
                  value={selectedConference}
                  onChange={(e) => setSelectedConference(e.target.value)}
                  className="w-full pl-12 pr-10 py-3 bg-white/5 border border-white/10 rounded-xl text-white appearance-none focus:outline-none focus:border-primary-500/50 focus:bg-white/10 transition-all cursor-pointer"
                >
                  <option value="All" className="bg-neutral-900 text-white">All Conferences</option>
                  {conferences.map((conf) => (
                    <option key={conf.name} value={conf.name} className="bg-neutral-900 text-white">{conf.name}</option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-4 h-4 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Results State */}
          {filteredConferences.length === 0 ? (
             <motion.div 
               initial={{ opacity: 0 }} 
               animate={{ opacity: 1 }}
               className="text-center py-20"
             >
               <p className="text-white/50 text-xl">No universities found matching your search.</p>
               <button 
                 onClick={() => { setSearchQuery(""); setSelectedConference("All"); }}
                 className="mt-4 text-primary-400 hover:text-primary-300 font-semibold transition-colors"
               >
                 Clear filters
               </button>
             </motion.div>
          ) : (
            <div>
              {/* Conferences */}
              {filteredConferences.map((conf, index) => (
                <motion.div
                  key={`${conf.name}-${searchQuery}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="mb-24"
                >
                  {/* Conference Title */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-10 px-2"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="h-8 w-1.5 bg-linear-to-b from-primary-500 to-accent-500 rounded-full"></div>
                      <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                        {conf.name}
                      </h2>
                      <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-semibold text-white/70">
                        {conf.schools.length} {conf.schools.length === 1 ? 'School' : 'Schools'}
                      </span>
                    </div>
                  </motion.div>

                  {/* Schools Grid */} 
                  <motion.div
                    key={`${conf.name}-${searchQuery}-${selectedConference}`}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {conf.schools.map((school, idx) => (
                      <motion.div
                        key={`${conf.name}-${school.name}-${idx}`}
                        variants={itemVariants}
                        className="group h-full"
                      >
                        <motion.div 
                          className="relative overflow-hidden rounded-xl bg-neutral-900 border border-white/10 hover:border-primary-500/30 transition-all duration-300 h-full flex flex-col hover:shadow-2xl hover:shadow-black/50"
                          whileHover={{ y: -4 }}
                        >
                          {/* Image Container */}
                          <div className="relative aspect-[16/9] overflow-hidden">
                            <Image
                              src={school.img}
                              alt={school.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              fill
                              unoptimized
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-neutral-900 via-neutral-900/20 to-transparent opacity-80"></div>
                            <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                              <p className="text-xs font-medium text-white">{school.state}</p>
                            </div>
                          </div>

                          {/* Content */}
                          <div className="flex-1 p-6 flex flex-col">
                            <div className="mb-auto">
                              <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-primary-400 transition-colors">
                                {school.name}
                              </h3>
                              <div className="flex items-center gap-2 text-white/50 text-sm mb-4">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                {school.city}
                              </div>
                            </div>

                            <motion.a
                              href={school.recruitQuestionnaire || school.questionnaireMen || school.questionnaireWomen || '#'}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              className="mt-4 w-full flex items-center justify-center gap-2 py-3 px-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-medium rounded-lg transition-all duration-200 group-hover:bg-linear-to-r group-hover:from-primary-600 group-hover:to-accent-600 group-hover:border-transparent group-hover:shadow-lg group-hover:shadow-primary-900/50"
                            >
                              <span>Recruit Questionnaire</span>
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                            </motion.a>
                          </div>
                        </motion.div>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
    </section>
  );
}
