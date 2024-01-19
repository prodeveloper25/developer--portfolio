import { Tooltip } from "keep-react";
import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import expertiseImg from "../../../assets/animation/expertiseImg.json";

const Expertise = () => {
  const [expertises, setExpertises] = useState([]);
  useEffect(() => {
    fetch("expertise.json")
      .then((res) => res.json())
      .then((data) => setExpertises(data));
  }, []);
  return (
    <div className="mt-4 bg-[#dbffd8] lg:px-10 py-9 md:px-5 px-4">
      <div className="flex items-center gap-2 lg:mb-6 md:mb-5 mb-4">
        <h2>------</h2>
        <div className="bg-[#bdf8b5] text-[#14a800] px-3 rounded py-1">
          Expertise
        </div>
      </div>
      <div>
        <h2 className="lg:text-3xl lg:w-[520px] md:w-[420px] w-full md:text-2xl  text-xl  lg:mb-0 md:mb-0 mb-5">
          As a <span className="text-[#14a800]">Web Developer</span> I am good
          at using:
        </h2>
        <div
          data-aos="fade-down"
          className="lg:-mt-5 md:-mt-3 -mt-0 lg:flex md:flex items-center lg:gap-6 md:gap-6"
        >
          <div className="lg:w-1/2 md:w-1/2 w-full">
            <div className="grid lg:grid-cols-4 md:grid-cols-4 gap-4 grid-cols-3 lg:mb-0 md:mb-0 mb-10 lg:w-full md:w-full w-[310px] mx-auto">
              {expertises.map((item) => (
                <Tooltip
                  key={item._id}
                  content={`${item.name}`}
                  trigger="hover"
                  placement="top"
                  animation="duration-300"
                  style="dark"
                >
                  <div className="lg:w-28 lg:h-28 md:w-20 md:h-w-20 lg:hover:w-[112px]  duration-200 lg:hover:px-5 lg:hover:py-5 bg-white lg:px-6 lg:py-6 md:px-4 md:py-3 w-16 h-16 px-2 py-2 shadow">
                    <img
                      className="lg:w-24 md:w-24 w-14 "
                      src={item.image}
                      alt=""
                    />
                  </div>
                </Tooltip>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 md:w-1/2 w-full">
            <div className="lg:w-[520px] w-full">
              <Lottie animationData={expertiseImg}></Lottie>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
