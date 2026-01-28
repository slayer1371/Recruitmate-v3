'use client'

import rmlogo from "../public/rmf.png";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useSession } from "next-auth/react";
import Link from "next/link";

interface NavProps {
  resourcesPath: string;
  featuresPath?: string;
}

export default function Nav({ resourcesPath, featuresPath }: NavProps) {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);

  // Variants for mobile menu animations
  const menuVariants = {
    open: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
    closed: {
      opacity: 0,
      x: '100%',
      transition: { duration: 0.3 },
    },
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <nav className="flex items-center justify-between px-4 sm:px-6 lg:px-8 h-20 bg-black/20 backdrop-blur-xl border-b border-white/10 shadow-xl" aria-label="Global">
        <div className="flex lg:flex-1 items-center gap-3">
          {/* <a href="/" className="flex items-center gap-2 hover:opacity-85 transition-opacity group" > */}
            <Link href="/" className="flex items-center gap-2 hover:opacity-85 transition-opacity group">
            <span className="sr-only">RecruitMate</span>
            <Image className="h-10 w-10 object-contain shrink-0" src={rmlogo} alt="RecruitMate" />
            <span className="hidden sm:inline font-bold text-lg bg-linear-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">RecruitMate</span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              setMenuOpen(!menuOpen);
            }}
            className="inline-flex items-center justify-center rounded-lg p-2.5 text-white hover:bg-white/10 active:bg-white/20 transition-all"
            aria-label="Open menu"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="size-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8 lg:items-center">
          <Link href={featuresPath || "#features"} className="text-sm font-semibold text-white/80 hover:text-white relative group transition-colors duration-300">
            Features
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-primary-400 to-accent-400 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            href="#"
            onClick={(e) => {
              e.preventDefault();
              router.push(resourcesPath);
            }}
            className="text-sm font-semibold text-white/80 hover:text-white relative group transition-colors duration-300"
          >
            Resources
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-primary-400 to-accent-400 group-hover:w-full transition-all duration-300"></span>
          </Link>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-4" suppressHydrationWarning>
          {status === "loading" ? (
            <div className="px-6 py-2.5 rounded-lg font-semibold text-sm text-white/60">Loading...</div>
          ) : session ? (
            <>
              <span className="text-sm font-semibold text-white/80">{session.user?.email}</span>
              <Link href="#" onClick={(e) => {
                e.preventDefault();
                router.push("/api/auth/signout");
              }} className="px-6 py-2.5 rounded-lg font-semibold text-sm bg-white/10 text-white hover:bg-white/20 border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-105 backdrop-blur-md">
                Sign Out
              </Link>
            </>
          ) : (
            <Link href="#" onClick={(e) => {
              e.preventDefault();
              router.push("/login");
            }} className="px-6 py-2.5 rounded-lg font-semibold text-sm bg-white/10 text-white hover:bg-white/20 border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-105 backdrop-blur-md">
              Login
            </Link>
          )}
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 z-40 pt-20"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            role="dialog"
            aria-modal="true"
          >
            <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black/60 backdrop-blur-xl px-4 py-6 sm:max-w-sm border-b border-white/10 shadow-2xl">
              <div className="flex items-center justify-between mb-8">
                <Link href="/" className="flex items-center gap-2 group">
                  <span className="sr-only">RecruitMate</span>
                  <Image className="h-10 w-10 object-contain shrink-0" src={rmlogo} alt="RecruitMate" />
                  <span className="font-bold text-lg bg-linear-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">RecruitMate</span>
                </Link>
                <button
                  type="button"
                  className="rounded-lg p-2.5 text-white hover:bg-white/10 active:bg-white/20 transition-all"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <span className="sr-only">Close menu</span>
                  <svg
                    className="size-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex flex-col space-y-2">
                <Link
                  href="#features"
                  className="block rounded-lg px-4 py-3 text-base font-semibold text-white/80 hover:text-white hover:bg-white/10 active:bg-white/20 transition-all"
                  onClick={() => setMenuOpen(false)}
                >
                  Features
                </Link>
                <Link
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    router.push(resourcesPath);
                    setMenuOpen(false);
                  }}
                  className="block rounded-lg px-4 py-3 text-base font-semibold text-white/80 hover:text-white hover:bg-white/10 active:bg-white/20 transition-all"
                >
                  Resources
                </Link>

                <div className="border-t border-white/10 pt-4 mt-4" suppressHydrationWarning>
                  {status === "loading" ? (
                    <div className="block rounded-lg px-4 py-3 text-base font-semibold text-white/60 text-center">Loading...</div>
                  ) : session ? (
                    <>
                      <p className="text-sm font-semibold text-white/80 px-4 py-2 text-center">{session.user?.email}</p>
                      <Link
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          router.push("/api/auth/signout");
                          setMenuOpen(false);
                        }}
                        className="block rounded-lg px-4 py-3 text-base font-semibold bg-white/10 text-white hover:bg-white/20 border border-white/20 hover:border-white/40 transition-all text-center backdrop-blur-md mt-2"
                      >
                        Sign Out
                      </Link>
                    </>
                  ) : (
                    <Link
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        router.push("/login");
                        setMenuOpen(false);
                      }}
                      className="block rounded-lg px-4 py-3 text-base font-semibold bg-white/10 text-white hover:bg-white/20 border border-white/20 hover:border-white/40 transition-all text-center backdrop-blur-md"
                    >
                      Login
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
