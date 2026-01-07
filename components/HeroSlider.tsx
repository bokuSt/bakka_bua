"use client";
import { motion } from "framer-motion";

const slides = [
  { title: "Next-Gen Gaming Hub", subtitle: "Play. Trade. Earn.", image: "/Dicedbaseball.webp" },
  { title: "Digital Marketplace", subtitle: "Premium Tech & Merch", image: "/chess-1.jpg" },
  { title: "Creator Clips", subtitle: "Watch & Discover", image: "/penny DohKey.jpg" }
];

export default function HeroSlider() {
  return (
    <section className="relative h-[75vh] overflow-hidden">
      {slides.map((slide, i) => (
        <motion.div
          key={i}
          className="absolute inset-0 bg-cover bg-center flex items-center justify-center text-center"
          style={{ backgroundImage: `url(${slide.image})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: i * 2, duration: 1 }}
        >
          <div className="bg-black/50 p-10 rounded-3xl text-white max-w-xl">
            <h1 className="text-5xl font-bold mb-4">{slide.title}</h1>
            <p className="text-xl">{slide.subtitle}</p>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
