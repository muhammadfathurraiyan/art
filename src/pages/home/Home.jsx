import { useState, useRef, useEffect } from "react";
import {
  FaBarsStaggered,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { AnimatePresence, motion } from "framer-motion";
import Arief from "/arief.jpeg";

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

const Home = () => {
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
    <section id="home">
      <div className=" m-4 flex gap-4 max-md:flex-wrap">
        <div className="flex flex-col gap-y-4">
          <div className="flex gap-x-4">
            <div className="h-[25vh] w-full grow max-sm:h-full">
              <img
                className="rounded-lg object-cover max-h-full min-w-full align-bottom max-sm:w-full max-sm:max-h-[40vh] max-sm:min-w-0"
                src="https://picsum.photos/600"
                alt=""
              />
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
                  <a className="duration-300 hover:text-cyan-500" href="#home">
                    Home
                  </a>
                  <a
                    className="duration-300 hover:text-cyan-500"
                    href="#portfolio"
                  >
                    Portfolio
                  </a>
                  <a
                    className="duration-300 hover:text-cyan-500"
                    href="#contact"
                  >
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
                      <a
                        className="duration-300 hover:text-cyan-500"
                        href="#home"
                        onClick={() => setToggle(false)}
                      >
                        Home
                      </a>
                      <a
                        className="duration-300 hover:text-cyan-500"
                        href="#portfolio"
                        onClick={() => setToggle(false)}
                      >
                        Portfolio
                      </a>
                      <a
                        className="duration-300 hover:text-cyan-500"
                        href="#contact"
                        onClick={() => setToggle(false)}
                      >
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
            <h1 className="text-5xl font-bold">Teuku Arief Rahmansyah</h1>
            <p>
              Hello everyone meet me Arief, welcome to my portfolio, i am a
              artist, i love painting, i do a lot of paintings, this is my
              passion this is my live.
            </p>
          </div>
        </div>
        <div className="flex grow ">
          <img
            className="rounded-lg w-[900px] object-cover max-h-full min-w-full align-bottom"
            src={Arief}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
