'use client'

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Lisa M.",
    role: "Parent from Texas",
    content: "Before using RecruitMate, we had no clue how to help our son. He's always loved sports, but he was still figuring things out and didn't know how to get better. His mentor really connected with him — gave him tips, encouraged him, and kept him motivated. Now, he's more confident, working harder, and loving it even more.",
    rating: 5
  },
  {
    name: "Marcus J.",
    role: "College Athlete",
    content: "RecruitMate helped me get noticed by coaches I never thought would recruit from my area. The strategies they teach really work, and having access to alumni who made it gave me real confidence.",
    rating: 5
  },
  {
    name: "Sarah K.",
    role: "Parent from California",
    content: "The training plans are game-changers. My daughter went from being overlooked to getting recruited by multiple Division 1 programs. The mentorship and guidance were exactly what she needed.",
    rating: 5
  },
];

export default function Testimonials() {
  return (
    <>
      <section className="relative py-20 sm:py-28 lg:py-40 bg-linear-to-br from-neutral-900 via-neutral-800 to-neutral-900 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl translate-y-1/2"></div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg sm:text-xl font-semibold text-white uppercase tracking-widest mb-4">
              Success Stories
            </p>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-white mb-6 leading-tight drop-shadow-lg">
              Trusted by Athletes & Parents
            </h2>
            <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto font-light">
              See how RecruitMate has transformed the lives of young athletes across the country and helped them reach their dreams
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="relative group bg-white/5 backdrop-blur-md border border-white/10 hover:border-primary-400/50 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Gradient accent on hover */}
                <div className="absolute inset-0 bg-linear-to-br from-primary-500/10 to-accent-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>

                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.svg 
                      key={i} 
                      className="w-5 h-5 text-amber-400" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.2 + i * 0.05 }}
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </motion.svg>
                  ))}
                </div>

                <p className="text-white/90 leading-relaxed mb-8 text-base font-light">
                  &quot;{testimonial.content}&quot;
                </p>

                <div className="border-t border-white/10 pt-6">
                  <p className="font-semibold text-white text-lg">{testimonial.name}</p>
                  <p className="text-sm text-white font-medium">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}