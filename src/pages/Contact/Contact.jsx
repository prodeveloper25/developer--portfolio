import Lottie from "lottie-react";
import contactUsImg from "../../assets/animation/contactUsImg.json";
import { TextInput, Textarea } from "keep-react";
import { FaTelegramPlane } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="lg:mt-16 md:mt-12 mt-12">
      <div className="flex items-center gap-2 lg:mb-6 md:mb-5 mb-3">
        <h2>------</h2>
        <div className="bg-[#bdf8b5] text-[#14a800] px-3 rounded py-1">
          Contact Me
        </div>
      </div>
      <div className="lg:flex md:flex items-center">
        <div className="lg:w-1/2 md:w-1/2 w-full lg:mb-0 md:mb-0 mb-5">
          <div className="lg:w-[560px] w-full">
            <Lottie animationData={contactUsImg}></Lottie>
          </div>
        </div>
        <div className="lg:w-1/2 md:w-1/2 w-full">
          <form>
            <h2 className="lg:text-3xl md:text-2xl text-2xl md:mb-4 lg:mb-6 mb-4 font-semibold">
              Feel Free to Drop{" "}
              <span className="text-[#fc3a40]">Me a Line</span>
            </h2>
            {/* Name Start */}
            <div className="lg:w-3/4 w-full md:mb-3 mb-4 lg:mb-5">
              <p className="mb-1 ml-1">
                Name<span className="text-[#fc3a40]">*</span>
              </p>
              <TextInput placeholder="Name" color="gray" />
            </div>
            {/* Name End */}
            {/* Email Start */}
            <div className="lg:w-3/4 w-full md:mb-3 mb-4 lg:mb-5">
              <p className="mb-1 ml-1">
                Email<span className="text-[#fc3a40]">*</span>
              </p>
              <TextInput placeholder="Email" color="gray" />
            </div>
            {/* Email End */}
            {/* Message Start */}
            <div className="lg:w-3/4 w-full md:mb-6 mb-8 lg:mb-10">
              <p className="mb-1 ml-1">
                Message<span className="text-[#fc3a40]">*</span>
              </p>
              <Textarea
                id="comment"
                placeholder="Leave a message..."
                withBg={true}
                color="white"
                border={true}
                rows={4}
              />
            </div>
            {/* Message End */}
            {/* Button Start */}
            <div className="lg:w-3/4 w-full">
              <button className="bg-[#14a800] flex justify-center gap-2 items-center text-white w-full lg:py-3  md:py-3 py-2 lg:text-lg lg:font-semibold duration-300 rounded hover:bg-[#fc3a40] ">
                <FaTelegramPlane className="lg:text-xl text-lg"></FaTelegramPlane>{" "}
                <span>Submit</span>
              </button>
            </div>
            {/* Button End */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
