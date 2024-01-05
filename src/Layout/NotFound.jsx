import Lottie from "lottie-react";
import notFoundImg from "../assets/animation/notFound.json";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="w-full px-4 mt-28 ">
      <div className="flex justify-center h-[300px] items-center my-auto">
        <div className="lg:w-[560px]  h-[300px] w-full">
          <Lottie className="h-full" animationData={notFoundImg}></Lottie>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Link
          to="/"
          className="bg-[#14a800] cursor-pointer  flex justify-center gap-2 items-center text-white px-8 lg:py-3  md:py-3 py-2 lg:text-lg lg:font-semibold duration-300 rounded hover:bg-[#fc3a40] "
        >
          <FaHome className="lg:text-xl text-lg"></FaHome>{" "}
          <span>Back to Home</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
