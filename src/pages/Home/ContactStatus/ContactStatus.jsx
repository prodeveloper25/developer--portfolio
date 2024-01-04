import { FaTelegramPlane } from "react-icons/fa";
import { Link } from "react-router-dom";
import contactStImg from "../../../assets/image/contactStImage.png";

const ContactStatus = () => {
  return (
    <div className="lg:mt-28 md:mt-16 mt-10 lg:mb-28 md:mb-16 mb-12  lg:mx-14">
      <div
        className="lg:px-10 lg:py-16 md:py-16 md:px-4 px-4 py-6 lg:flex md:flex items-center shadow-2xl"
        style={{
          backgroundImage: `url("${contactStImg}")`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="lg:w-3/4 md:w-3/4">
          <h1 className="lg:text-3xl md:text-2xl text-xl lg:mb-4 mb-3 font-semibold text-[#14a800]">
            Have a project on your mind?
          </h1>
          <p className="lg:text-[16px] md:text-[16px] text-sm">
            Feel free to discuss with me. I can build any niche belonging
            website for you. Need free consultation? Yes I can help you with
            that too with zoom/meet sessions.
          </p>
        </div>
        <div className="lg:w-1/4 md:w-1/4 lg:mt-0 md:mt-0 mt-6">
          <Link to="/contact">
            <button className="bg-[#fc3a40] flex gap-2 items-center text-white lg:px-6 lg:py-3 md:px-6 md:py-3 px-3 py-2 lg:text-lg lg:font-semibold duration-300 rounded hover:bg-[#14a800] ">
              <FaTelegramPlane className="text-lg"></FaTelegramPlane> Contact Me
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactStatus;
