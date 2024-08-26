// components/HeroSection.tsx
"use client";
import Link from "next/link";

const HeroSection = () => (
  <section className="flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 py-32 text-white">
    <div className="text-center">
      <h1 className="text-4xl font-extrabold sm:text-5xl">
        Welcome to My Portfolio
      </h1>
      <p className="mt-4 text-lg">
        I'm a web designer and developer specializing in creating beautiful and
        functional websites.
      </p>
      <Link
        href="#contact"
        className="mt-6 inline-block rounded-lg bg-white px-6 py-2 text-blue-600 hover:bg-gray-200"
      >
        Get in Touch
      </Link>
    </div>
  </section>
);

export default HeroSection;
