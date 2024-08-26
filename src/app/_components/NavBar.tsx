"use client";
import { NAVBAR_LINKS } from "@/constant";
import { FC, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Hamburger from "./Hamburger"; // Import the updated Hamburger component

export const NavBar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      className="fixed left-0 right-0 top-0 z-50 select-none bg-white backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.8 }}
      transition={{ duration: 0.4 }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-between sm:items-stretch sm:justify-center">
            <div className="hidden sm:ml-6 sm:block">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, type: "spring", stiffness: 80 }}
                className="flex space-x-6"
              >
                {NAVBAR_LINKS.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="rounded-md px-4 py-2 text-sm font-medium"
                    style={{ opacity: 0.8 }}
                  >
                    {link.text}
                  </Link>
                ))}
              </motion.div>
            </div>
          </div>
          <div className="flex sm:hidden">
            <Hamburger
              menuOpen={isOpen}
              setMenuOpen={setIsOpen}
              mouseOver={false}
            />
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="sm:hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="flex flex-col place-content-center items-center justify-center space-y-1 bg-white px-4 py-3"
            >
              {NAVBAR_LINKS.map((link, index) => (
                <motion.div key={index} className="relative rounded-md py-2">
                  <motion.div
                    className="relative text-lg font-medium text-gray-800"
                    whileHover={{ scale: 1.1 }} // Scale text on hover
                  >
                    <Link
                      href={link.href}
                      className="relative block"
                      onClick={() => setIsOpen(false)} // Close the menu when a link is clicked
                    >
                      {link.text}
                    </Link>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
