import Lottie from "lottie-react";
import notFoundImg from "../assets/animation/notFound.json";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full min-h-screen flex justify-center  items-center">
        <div className="lg:w-[560px]  h-[330px] w-full">
          <Lottie
            className="h-full w-full"
            animationData={notFoundImg}
          ></Lottie>
          <div className="flex justify-center items-center">
            <Link
              to="/"
              className="bg-[#fc3a40] cursor-pointer  flex justify-center gap-2 items-center text-white px-8 lg:py-3  md:py-3 py-2 lg:text-lg lg:font-semibold duration-300 rounded hover:bg-[#14a800] "
            >
              <FaHome className="lg:text-xl text-lg"></FaHome>{" "}
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
