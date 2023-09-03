import React, { useState } from "react";
import { GiSharkBite } from "react-icons/gi";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";

const logoVariants = {
  initial: {
    color: "rgb(34 211 238)",
  },
  animate: {
    textShadow: "0 0 30px rgb(6 182 212)",
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  },
};

const sharkVariants = {
  initial: {
    x: "-100vw",
    scale: 1,
  },
  animate: {
    x: 10,
    y: -5,
    scale: 2,
    transition: {
      type: "spring",
      ease: "easeInOut",
      stiffness: 50,
    },
  },
};

const navbarVariants = {
  initial: {
    y: "25%",
    opacity: 0,
    transition: {
      type: "spring",
      bounce: 0.1,
    },
  },
  animate: {
    y: "0%",
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.1,
    },
  },
  whileHover: {
    color: "rgb(34 211 238)",
    textShadow: "0 0 20px rgb(6 182 212)",
  },
};

const boxVariants = {
  initial: {
    x: "100%",
    transition: {
      type: "spring",
      bounce: 0.1,
      when: "afterChildren",
      staggerChildren: 0.25,
    },
  },
  animate: {
    x: "0%",
    transition: {
      type: "spring",
      bounce: 0.1,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
};

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <header>
      <nav className="px-24 py-5 flex items-center justify-between border-b border-zinc-500 max-sm:px-8">
        <motion.div
          variants={logoVariants}
          initial="initial"
          animate="animate"
          className="flex items-baseline"
        >
          <h1 className="text-xl font-medium">Shark</h1>
          <motion.div variants={sharkVariants}>
            <GiSharkBite />
          </motion.div>
        </motion.div>

        <div
          onClick={handleToggle}
          className="duration-300 hover:text-cyan-500 hidden max-sm:block relative z-10"
        >
          {toggle ? <FaTimes /> : <FaBarsStaggered />}
        </div>

        <motion.div className="space-x-6 max-sm:hidden">
          <a className="duration-300 hover:text-cyan-500" href="">
            Home
          </a>
          <a className="duration-300 hover:text-cyan-500" href="">
            Portfolio
          </a>
          <a className="duration-300 hover:text-cyan-500" href="">
            Contact
          </a>
        </motion.div>

        <AnimatePresence>
          {toggle && (
            <motion.div
              variants={boxVariants}
              initial="initial"
              animate="animate"
              exit="initial"
              className={"fixed inset-y-0 right-0 flex flex-col justify-center space-y-6 bg-zinc-950 p-24"}
            >
              <a className="duration-300 hover:text-cyan-500" href="">
                Home
              </a>
              <a className="duration-300 hover:text-cyan-500" href="">
                Portfolio
              </a>
              <a className="duration-300 hover:text-cyan-500" href="">
                Contact
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
