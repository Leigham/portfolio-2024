"use client";
import { NAVBAR_LINKS } from "@/constant";
import { FC, useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import { motion, AnimatePresence } from "framer-motion";

export const NavBar: FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => setIsOpen(!isOpen);

    return (
        <>
            {/* Fixed Navbar */}
            <nav className="fixed top-0 left-0 right-0 backdrop-blur-md bg-opacity-20 z-50 shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between h-16">
                        <div className="flex-1 flex items-center justify-between sm:items-stretch sm:justify-start">
                            <div className="flex-shrink-0 flex items-center">
                                <img
                                    className="block lg:hidden h-8 w-auto"
                                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                                    alt="Workflow"
                                />
                            </div>
                            <div className="hidden sm:block sm:ml-6">
                                <div className="flex space-x-4">
                                    {NAVBAR_LINKS.map((link, index) => (
                                        <Link
                                            key={index}
                                            href={link.href}
                                            className="text-gray-800 hover:bg-gray-300 px-3 py-2 rounded-md text-sm font-medium"
                                        >
                                            {link.text}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="flex sm:hidden">
                            {/* Hamburger menu button */}
                            <button
                                onClick={handleToggle}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-white hover:bg-gray-300 focus:outline-none"
                            >
                                {isOpen ? (
                                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                ) : (
                                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="select-none sm:hidden opacity-20"
                        >
                            <div className="px-2 pt-2 pb-3 space-y-1">
                                {NAVBAR_LINKS.map((link, index) => (
                                    <Link
                                        key={index}
                                        href={link.href}
                                        className="block px-3 py-2 rounded-md text-base font-medium text-offwhite-100 hover:bg-gray-300"
                                        onClick={() => setIsOpen(false)} // Close the menu when a link is clicked
                                    >
                                        {link.text}
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

        </>
    );
};
