import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import smailImg from "../../../assets/icon/happy.png";
import projectImg from "../../../assets/icon/project.png";
import supportImg from "../../../assets/icon/support.png";
import statisticsImg from "../../../assets/image/statisticsImg.png";

const Statistics = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <div className="lg:mt-20 md:mt-16 mt-16 pb-8 mx-4" data-aos="fade-up">
      <ScrollTrigger
        onEnter={() => {
          setCounterOn(true);
        }}
        onExit={() => setCounterOn(false)}
      >
        <div
          className="lg:px-20 lg:py-10 md:py-8 md:px-4 px-4 py-6  shadow-2xl max-w-screen-xl mx-auto"
          style={{
            backgroundImage: `url("${statisticsImg}")`,
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex items-center gap-2 lg:mb-0 md:mb-0 mb-4">
            <h2>------</h2>
            <div className="bg-[#bdf8b5] text-[#14a800] px-3 rounded py-1">
              Statistics
            </div>
          </div>
          <div className="lg:flex md:flex items-center lg:justify-between">
            <h1 className="lg:text-4xl md:text-3xl  text-2xl font-semibold lg:w-[400px] lg:mb-0 md:mb-0 mb-4">
              Short Overview on our{" "}
              <span className="text-[#14a800]">Experience</span>
            </h1>
            <div className="flex lg:gap-10">
              {/* item number 1 start */}
              <div>
                <div className="bg-[#14a800] lg:hover:scale-105 duration-200 lg:px-2 lg:py-2 lg:w-16 w-12 px-2 py-2  rounded-full mx-auto mb-2">
                  <img className="w-full" src={smailImg} alt="" />
                </div>
                <h1 className="lg:text-3xl text-xl font-bold text-center">
                  {counterOn && (
                    <CountUp start={2} end={42} duration={2} delay={0} />
                  )}
                  +
                </h1>
                <h5 className="text-center lg:text-lg text-sm text-[#fc3a40]">
                  Happy Clients
                </h5>
              </div>
              {/* item number 1 end */}
              {/* item number 2 start */}
              <div>
                <div className="bg-[#14a800] lg:hover:scale-105 duration-200 lg:px-2 lg:py-2 lg:w-16 w-12 px-2 py-2 mx-auto mb-2 rounded-full">
                  <img className="w-full" src={projectImg} alt="" />
                </div>
                <h1 className="lg:text-3xl text-xl font-bold text-center">
                  {counterOn && (
                    <CountUp start={2} end={55} duration={2} delay={0} />
                  )}
                  +
                </h1>
                <h5 className="text-center lg:text-lg text-sm text-[#fc3a40]">
                  Projects Completed
                </h5>
              </div>
              {/* item number 2 end */}
              {/* item number 3 start */}
              <div>
                <div className="bg-[#14a800] lg:hover:scale-105 duration-200 lg:px-2 lg:py-2 lg:w-16 w-12 px-2 py-2 mx-auto mb-2 rounded-full">
                  <img className="w-full" src={supportImg} alt="" />
                </div>
                <h1 className="lg:text-3xl text-xl font-bold text-center">
                  {counterOn && (
                    <CountUp start={2} end={27} duration={2} delay={0} />
                  )}
                  +
                </h1>
                <h5 className="text-center text-sm lg:text-lg text-[#fc3a40]">
                  Support Done
                </h5>
              </div>
              {/* item number 3 end */}
            </div>
          </div>
        </div>
      </ScrollTrigger>
    </div>
  );
};

export default Statistics;
