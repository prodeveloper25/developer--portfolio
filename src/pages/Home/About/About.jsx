import Lottie from "lottie-react";
import { FaTelegramPlane } from "react-icons/fa";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import homeImage from "../../../assets/animation/homeImage.json";

const About = () => {
  const [typeEffect] = useTypewriter({
    words: ["Nahid", "Developer"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 50,
  });
  return (
    <div className="lg:mt-12 md:mt-10 mt-7">
      <div className="flex items-center gap-2 lg:mb-6 md:mb-5 mb-3">
        <h2>------</h2>
        <div className="bg-[#bdf8b5] text-[#14a800] px-3 rounded py-1">
          About
        </div>
      </div>
      <div className="lg:flex md:flex items-center lg:gap-40">
        <div className="lg:w-1/2 md:w-1/2 w-full">
          <div>
            <h1 className="lg:mb-4 md:mb-3 mb-1 lg:text-5xl md:text-4xl text-3xl">
              Hey,
            </h1>
            <h1 className="lg:text-5xl md:text-4xl text-3xl">
              I am{" "}
              <span className="text-[#14a800]">
                {typeEffect} <Cursor />
              </span>
            </h1>
          </div>
          <h4 className="lg:text-xl text-lg lg:mt-3 md:mt-2 mt-1">
            Web Developer With High Level Of Experience
          </h4>
          <p className="lg:mt-4 md:mt-3 mt-3 lg:mb-16 md:mb-10 mb-10">
            I love to visualize ideas and make them come alive on a website. If
            you looking for a Developer to build your Brand And Grow Your
            Business? Let`s shake hands with Nahid Hasan.
          </p>
          <a href="https://www.fiverr.com/pro_developer25" target="blank">
            <button className="bg-[#fc3a40]  flex gap-2 items-center lg:mt-16 text-white px-4 py-2 duration-300 rounded hover:bg-[#14a800] ">
              <FaTelegramPlane className="text-lg"></FaTelegramPlane> Hire me
            </button>
          </a>
        </div>
        <div className="lg:w-1/2 md:w-1/2 w-full">
          <div className="lg:w-[460px]">
            <Lottie animationData={homeImage}></Lottie>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
