import { useState, useRef, useEffect } from "react";

import {
  FaBarsStaggered,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { AnimatePresence, motion } from "framer-motion";

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

const Index = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  const menuRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setToggle(false);
        console.log(menuRef.current);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <section>
      <div className=" m-4 flex gap-4 max-md:flex-wrap">
        <div className="flex flex-col gap-y-4">
          <div className="flex gap-x-4">
            <div className="p-5 grow bg-zinc-800 rounded-lg flex items-center justify-center">
              <img src="https://picsum.photos/600/150" alt="" />
            </div>
            <div ref={menuRef} className="flex grow flex-col gap-y-4 ">
              <div className="p-5 grow bg-zinc-800 rounded-lg flex items-center justify-center">
                <div
                  onClick={handleToggle}
                  className="duration-300 hover:text-cyan-500 hidden max-md:block"
                >
                  <FaBarsStaggered />
                </div>
                <div className="flex w-full justify-evenly gap-2 max-lg:text-xs max-md:hidden">
                  <a className="duration-300 hover:text-cyan-500" href="">
                    Home
                  </a>
                  <a className="duration-300 hover:text-cyan-500" href="">
                    Portfolio
                  </a>
                  <a className="duration-300 hover:text-cyan-500" href="">
                    Contact
                  </a>
                </div>
                <AnimatePresence>
                  {toggle && (
                    <motion.div
                      variants={boxVariants}
                      initial="initial"
                      animate="animate"
                      exit="initial"
                      className={
                        "fixed inset-y-0 right-0 flex flex-col justify-center space-y-6 bg-zinc-950 p-24"
                      }
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
              </div>
              <div className="p-5 grow max-sm:flex-col text-lg bg-zinc-800 rounded-lg flex items-center justify-evenly gap-4">
                <a className="duration-300 hover:text-cyan-500" href="">
                  <FaInstagram />
                </a>
                <a className="duration-300 hover:text-cyan-500" href="">
                  <FaFacebook />
                </a>
                <a className="duration-300 hover:text-cyan-500" href="">
                  <FaTwitter />
                </a>
                <a className="duration-300 hover:text-cyan-500" href="">
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>
          <div className="p-5 bg-zinc-800 rounded-lg grow flex flex-col justify-center">
            <h1 className="text-5xl font-bold">Lorem ipsum dolor sit amet.</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Praesentium nulla, consectetur laboriosam delectus tempora
              voluptatibus!
            </p>
          </div>
        </div>
        <div className="p-4 bg-zinc-800 rounded-lg">
          <img src="https://picsum.photos/600/750" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Index;
