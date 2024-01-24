import Lottie from "lottie-react";
import servicesImg from "../../assets/animation/servicesImg.json";
import webDesingImg from "../../assets/icon/webDesign.png";
import webDevelopmentImg from "../../assets/icon/webDevelopment.png";

const Services = () => {
  return (
    <div className="mx-4" data-aos="fade-right">
      <div className="lg:mt-20 md:mt-16 mt-14 max-w-screen-xl mx-auto">
        <div className="flex items-center gap-2 lg:mb-6 md:mb-5 mb-4">
          <h2>------</h2>
          <div className="bg-[#ffc5c7] text-[#fc3a40] px-3 rounded py-1">
            Services
          </div>
        </div>
        <div className="lg:flex md:flex items-center -mt-4">
          <div className="lg:w-1/2 md:w-1/2 w-full lg:mb-0 md:mb-0 mb-7">
            <div className="lg:w-[560px] w-full">
              <Lottie animationData={servicesImg}></Lottie>
            </div>
          </div>
          <div className="lg:w-1/2 md:w-1/2 w-full">
            <h1 className="lg:text-4xl md:text-2xl text-2xl mb-3 lg:w-[600px] lg:mb-4 md:mb-3">
              I Provide My Clients With The Following{" "}
              <span className="text-[#14a800]">Vaulable Services</span>
            </h1>
            <p className="lg:text-lg">
              I always want to be able to meet the goals of my clients. I value
              my services as a design and web development through my work. You
              may Like my services.
            </p>
            <div className="lg:flex md:flex items-center lg:gap-20 md:gap-4 lg:mt-10 md:mt-7 mt-4">
              <div className="flex  items-center lg:gap-2 md:gap-2 gap-4">
                <img
                  className="lg:w-16 md:w-9 w-14"
                  src={webDevelopmentImg}
                  alt=""
                />
                <h4 className="lg:text-xl md:text-lg text-xl">
                  Web Developmet
                </h4>
              </div>
              <div className="flex lg:mt-0 md:mt-0 mt-3 items-center lg:gap-2  md:gap-2 gap-4">
                <img
                  className="lg:w-16 md:w-9 w-14"
                  src={webDesingImg}
                  alt=""
                />
                <h4 className="lg:text-xl md:text-lg text-xl">Web Design</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
