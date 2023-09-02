import React, { useState } from "react";
import { GiSharkBite } from "react-icons/gi";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

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
  whileHover: {
    color: "rgb(34 211 238)",
    textShadow: "0 0 20px rgb(6 182 212)",
  },
};

const boxVariants = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      // duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.5,
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

        <div onClick={handleToggle} className="hidden max-sm:block">
          <FaBarsStaggered />
        </div>

        <div className="gap-8 flex max-sm:w-0 max-sm:hidden">
          <motion.a variants={navbarVariants} whileHover="whileHover" href="">
            Home
          </motion.a>
          <motion.a variants={navbarVariants} whileHover="whileHover" href="">
            Portofolio
          </motion.a>
          <motion.a variants={navbarVariants} whileHover="whileHover" href="">
            Contact
          </motion.a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

import { useState } from "react";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";

export default function Navbar() {
	const [mobileNav, setMobileNav] = useState(false);

	const toggleMobileNav = () => {
		setMobileNav(!mobileNav);
	};

	return (
		<header className="sticky top-0 inset-x-0 p-6 bg-black/30">
			<nav className="container mx-auto">
				<motion.button
					initial="hide"
					animate={mobileNav ? "show" : "hide"}
					onClick={toggleMobileNav}
					className="flex flex-col space-y-1 relative z-10"
				>
					<motion.span
						variants={{
							hide: {
								rotate: 0,
							},
							show: {
								rotate: 45,
								y: 5,
							},
						}}
						className="w-6 bg-white h-px block"
					></motion.span>
					<motion.span
						variants={{
							hide: {
								opacity: 1,
							},
							show: {
								opacity: 0,
							},
						}}
						className="w-6 bg-white h-px block"
					></motion.span>
					<motion.span
						variants={{
							hide: {
								rotate: 0,
							},
							show: {
								rotate: -45,
								y: -5,
							},
						}}
						className="w-6 bg-white h-px block"
					></motion.span>
				</motion.button>
				<AnimatePresence>
					{mobileNav && (
						<MotionConfig
							transition={{
								type: "spring",
								bounce: 0.1,
							}}
						>
							<motion.div
								key="mobile-nav"
								variants={{
									hide: {
										x: "-100%",
										transition: {
											type: "spring",
											bounce: 0.1,
											when: "afterChildren",
											staggerChildren: 0.25,
										},
									},
									show: {
										x: "0%",
										transition: {
											type: "spring",
											bounce: 0.1,
											when: "beforeChildren",
											staggerChildren: 0.25,
										},
									},
								}}
								initial="hide"
								animate="show"
								exit="hide"
								className="fixed inset-0 bg-blue-600 p-6 flex flex-col justify-center space-y-10 lg:hidden"
							>
								<motion.ul
									variants={{
										hide: {
											y: "25%",
											opacity: 0,
										},
										show: {
											y: "0%",
											opacity: 1,
										},
									}}
									className="list-none space-y-6"
								>
									<li>
										<a href="#" className="text-5xl font-semibold text-white">
											Link #1
										</a>
									</li>
									<li>
										<a href="#" className="text-5xl font-semibold text-white">
											Link #2
										</a>
									</li>
									<li>
										<a href="#" className="text-5xl font-semibold text-white">
											Link #3
										</a>
									</li>
								</motion.ul>
								<motion.div
									variants={{
										hide: {
											y: "25%",
											opacity: 0,
										},
										show: {
											y: "0%",
											opacity: 1,
										},
									}}
									className="w-full h-px bg-white/30"
								></motion.div>
								<motion.ul
									variants={{
										hide: {
											y: "25%",
											opacity: 0,
										},
										show: {
											y: "0%",
											opacity: 1,
										},
									}}
									className="list-none flex justify-center gap-x-4"
								>
									<li>
										<div className="bg-white rounded-lg w-8 h-8"></div>
									</li>
									<li>
										<div className="bg-white rounded-lg w-8 h-8"></div>
									</li>
									<li>
										<div className="bg-white rounded-lg w-8 h-8"></div>
									</li>
								</motion.ul>
							</motion.div>
						</MotionConfig>
					)}
				</AnimatePresence>
			</nav>
		</header>
	);
}
