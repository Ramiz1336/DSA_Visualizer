import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import Modal from "../components/Modal";
import { sections } from "../data/sections";

const MotionLink = motion(Link);

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const Home = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const openModal = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedItem(null);
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 py-10 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <header className="text-center mb-14">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-indigo-700 mb-4 drop-shadow">
          DSA Visualizer
        </h1>
        <p className="max-w-4xl mx-auto text-lg sm:text-xl text-gray-700">
          Master algorithms through interactive animation. From sorting to graph traversals — it's all visual.
        </p>
      </header>

      <main className="max-w-6xl mx-auto space-y-20">
        {sections.map((section, idx) => (
          <motion.section
            key={idx}
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            <div className="flex flex-col sm:flex-row items-center gap-4 px-4 mb-6">
              <Lottie
                animationData={section.animation}
                className="w-24 h-24"
                loop={true}
              />
              <h2 className="text-3xl font-bold text-gray-800 text-center sm:text-left">
                {section.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
              {section.items.map((item) => (
                <motion.div
                  key={item.label}
                  variants={cardVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <div
                    className={`block rounded-xl shadow-xl bg-gradient-to-br ${item.fromColor} ${item.toColor} text-white px-6 py-6 relative group transition-all duration-300 hover:shadow-2xl`}
                  >
                    <div className="text-xl font-semibold mb-2">
                      {item.label}
                    </div>
                    <p className="text-sm opacity-90 mb-4 group-hover:opacity-100 transition duration-300">
                      {item.desc}
                    </p>

                    <div className="flex gap-3 justify-start mt-2">
                      <MotionLink
                        to={item.to}
                        whileHover={{ scale: 1.08 }}
                        className="bg-white text-indigo-700 font-semibold px-4 py-1 rounded shadow hover:bg-indigo-100 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
                      >
                        Try it Live
                      </MotionLink>
                      <motion.button
                        onClick={() => openModal(item)}
                        whileHover={{ scale: 1.08 }}
                        className="bg-white text-gray-800 font-medium px-4 py-1 rounded shadow hover:bg-gray-100 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
                      >
                        Docs
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        ))}
      </main>

      <Modal
        show={showModal}
        onClose={closeModal}
        content={selectedItem || {}}
      />
    </motion.div>
  );
};

export default Home;
