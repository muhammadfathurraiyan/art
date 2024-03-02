import React from "react";
import {
  FaBarsStaggered,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";

const Contact = () => {
  return (
    <section id="contact">
      <div className="m-4 flex flex-col flex-wrap">
        <div className="flex gap-4 w-full max-sm:flex-wrap">
          <div className="flex flex-col w-full gap-4">
            <div className="h-[25vh] grow max-sm:hidden">
              <img
                className="rounded-lg object-cover max-h-full min-w-full align-bottom max-sm:w-full max-sm:max-h-[40vh] max-sm:min-w-0"
                src="https://picsum.photos/300"
                alt=""
              />
            </div>
            <footer className="grow p-5 flex items-center justify-center flex-col bg-zinc-800 rounded-lg space-y-4 max-sm:h-[25vh]">
              <div className="text-lg flex items-center justify-center gap-8">
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
              <div className="flex items-center justify-center gap-8">
                <a className="duration-300 hover:text-cyan-500" href="#home">
                  Home
                </a>
                <a
                  className="duration-300 hover:text-cyan-500"
                  href="#portfolio"
                >
                  Portfolio
                </a>
                <a className="duration-300 hover:text-cyan-500" href="#contact">
                  Contact
                </a>
              </div>
              <p className="text-sm text-center">
                &copy; Art. All right reserved. Site design by:{" "}
                <a
                  className="font-semibold duration-300 hover:text-cyan-500"
                  target="_blank"
                  href="https://muhammadfathurraiyan.site/"
                >
                  Raiyan
                </a>
              </p>
            </footer>
          </div>
          <form
            className="bg-zinc-800 grow p-5 rounded-lg w-full flex justify-center flex-col gap-4 max-sm:-order-1"
            action=""
          >
            <div className="flex gap-4 w-full max-sm:flex-wrap max-sm:mb-7">
              <div className="flex flex-col max-sm:grow gap-4">
                <div className="">
                  <label for="name" className="block mb-2 text-sm">
                    Your name
                  </label>
                  <input
                    type="name"
                    id="name"
                    className="bg-zinc-900 text-sm rounded-lg focus:ring-0 focus:border-0 block w-full p-2.5"
                    required
                  />
                </div>
                <div className="">
                  <label for="email" className="block mb-2 text-sm">
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="bg-zinc-900 text-sm rounded-lg focus:ring-0 focus:border-0 block w-full p-2.5"
                    required
                  />
                </div>
                <div className="">
                  <label for="phone" className="block mb-2 text-sm">
                    Your number
                  </label>
                  <input
                    type="phone"
                    id="phone"
                    className="bg-zinc-900 text-sm rounded-lg focus:ring-0 focus:border-0 block w-full p-2.5"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col grow">
                <div className="">
                  <label for="text-area" className="block mb-2 text-sm">
                    Your messages
                  </label>
                  <textarea
                    id="message"
                    rows="8"
                    className="h-full bg-zinc-900 text-sm rounded-lg focus:ring-0 focus:border-0 block w-full p-2.5"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="">
              <button
                type="submit"
                className="float-right bg-cyan-700 hover:bg-cyan-800 rounded-lg text-zinc-100 duration-300 text-sm px-5 py-2.5 text-center"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
