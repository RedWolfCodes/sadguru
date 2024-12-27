"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import hospitalPic from "@/public/hospital.jpg";

export function WelcomeSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-[#FFD700] ps-10 rounded-xl mt-10 flex flex-col md:flex-row md:items-center md:h-72 m-4"
    >
      {/* Left Text Section */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="md:w-2/3 space-y-4 pe-10"
      >
        <h2 className="text-xl md:text-2xl font-bold">Welcome to</h2>
        <h3 className="text-lg md:text-xl font-semibold">
          Sadguru College of Nursing & <br /> Allied Medical Science
        </h3>
        <p className="text-black/80 leading-relaxed text-sm md:text-base ">
        At Sadguru College of Allied Medical Sciences (SCAMS) and Sadguru College of Nursing (SCN), Jagatpur, Cuttack, we are dedicated in shaping the future of healthcare education. Established in 2023, our mission is to provide top-quality nursing and allied medical sciences training to prepare skilled professionals who are committed to serve the community. With a team of highly qualified faculty from renowned institutions, we ensure excellence in teaching and learning. Our student-friendly environment fosters growth, innovation, and hands-on experience, making us one of the best choices for nursing and paramedical education in Cuttack. Join us in our journey to create a healthier tomorrow.
          <a
            href="#learn-more"
            className="text-black font-semibold underline ml-2"
          >
            LEARN MORE
          </a>
        </p>
      </motion.div>

      {/* Right Image Section */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative h-48 md:h-full md:w-1/3 rounded-xl overflow-hidden mt-6 md:mt-0"
      >
        <Image
          src={hospitalPic}
          alt="Sadguru Hospital"
          fill
          className="object-cover"
        />
      </motion.div>
    </motion.section>
  );
}
