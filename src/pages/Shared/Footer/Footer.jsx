import {
  FaBook,
  FaFacebook,
  FaGithub,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaPhoneAlt,
  FaServicestack,
  FaShoppingBag,
  FaTwitter,
} from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { Link } from "react-router-dom";
import logoImg from "../../../assets/icon/logo2.png";
import BackToTopButton from "../../BackToTopButton/BackToTopButton";

const Footer = () => {
  return (
    <>
      {/* <ScrollToTop
        smooth
        top="310"
        svgPath="M128,216,88,232V200l16-16V152L24,168V136l80-40V48a24,24,0,0,1,48,0V96l80,40v32l-80-16v32L168,200v32Z"
        className="pl-[6px]  animate-updown bg-red-100 duration-1000"
        color="#14a800"
      /> */}
      <BackToTopButton></BackToTopButton>
      <footer className="bg-[#bdf8b5] mt-3">
        <div className="max-w-screen-xl mx-auto">
          <div className="lg:flex md:flex flex-1 lg:px-2 md:px-8 py-10 px-4 lg:gap-0 md:gap-48">
            <div className="lg:w-1/4 md:w-1/4 w-full lg:mb-0 md:mb-0 mb-8">
              <a href="/">
                <img
                  className="lg:w-64 md:w-44 w-40 mb-4 lg:mx-0 md:mx-0 mx-auto"
                  src={logoImg}
                  alt=""
                />
              </a>
              <p className="lg:mb-6 md:mb-6 mb-2 lg:text-start md:text-start text-center">
                I love to visualize ideas and make them come alive on a website.
                If you looking for a Developer to build your Brand And Grow Your
                Business? Let`s shake hands with Nahid Hasan.
              </p>
            </div>
            <div className="lg:w-3/4 md:w-3/4 w-full lg:flex md:flex-1 flex-1 gap-20 justify-center lg:text-start md:text-start text-center">
              <div className="lg:mb-0 md:mb-5 mb-8">
                <h3 className="text-xl font-medium mb-3">Quick Links</h3>
                <div className="grid grid-cols-1 gap-3">
                  <Link className="hover:underline text-slate-700 flex items-center gap-2 lg:justify-start md:justify-start justify-center">
                    <FaHome className="text-lg"></FaHome> Home
                  </Link>
                  <Link className="hover:underline text-slate-700 flex items-center gap-2 lg:justify-start md:justify-start justify-center">
                    <FaShoppingBag></FaShoppingBag> All Work
                  </Link>
                  <Link
                    to="/services"
                    className="hover:underline text-slate-700 flex items-center gap-2 lg:justify-start md:justify-start justify-center"
                  >
                    <FaServicestack className="text-lg"></FaServicestack> All
                    Service
                  </Link>
                  <Link
                    to="/skills"
                    className="hover:underline text-slate-700 flex items-center gap-2 lg:justify-start md:justify-start justify-center"
                  >
                    <FaBook></FaBook> Skills Set
                  </Link>
                  <Link
                    to="/contact"
                    className="hover:underline text-slate-700 flex items-center gap-2 lg:justify-start md:justify-start justify-center"
                  >
                    <FaPhoneAlt></FaPhoneAlt> Contact Us
                  </Link>
                </div>
              </div>
              <div className="lg:mb-0 md:mb-5 mb-8">
                <h3 className="text-xl font-medium mb-3">Our Social Links</h3>
                <div className="grid grid-cols-1 gap-3">
                  <a
                    href="https://www.facebook.com/prodeveloper25"
                    target="blank"
                    className="text-slate-700 hover:underline cursor-pointer flex items-center gap-2 lg:justify-start md:justify-start justify-center"
                  >
                    <FaFacebook className="text-lg"></FaFacebook> Facebook
                  </a>
                  <a
                    href="https://www.linkedin.com/in/prodeveloper25"
                    target="blank"
                    className="text-slate-700 hover:underline cursor-pointer flex items-center gap-2 lg:justify-start md:justify-start justify-center"
                  >
                    <FaLinkedin className="text-lg"></FaLinkedin> Linkedin
                  </a>
                  <a
                    href="https://github.com/prodeveloper25"
                    target="blank"
                    className="text-slate-700 hover:underline cursor-pointer flex items-center gap-2 lg:justify-start md:justify-start justify-center"
                  >
                    <FaGithub className="text-lg"></FaGithub> Github
                  </a>
                  <a
                    href="https://www.instagram.com/pro_developer25"
                    target="blank"
                    className="text-slate-700 hover:underline cursor-pointer flex items-center gap-2 lg:justify-start md:justify-start justify-center"
                  >
                    <FaInstagram className="text-lg"></FaInstagram> Instagram
                  </a>{" "}
                  <a
                    href="https://twitter.com/ProDeveloperBD2"
                    target="blank"
                    className="text-slate-700 hover:underline cursor-pointer flex items-center gap-2 lg:justify-start md:justify-start justify-center"
                  >
                    <FaTwitter className="text-lg"></FaTwitter> Twitter
                  </a>
                </div>
              </div>
              <div className="lg:mb-0 md:mb-0 mb-8">
                <h3 className="text-xl font-medium mb-3">Our Address</h3>
                <div className="grid grid-cols-1 gap-3">
                  <p className="text-slate-700 flex items-center gap-2 lg:justify-start md:justify-start justify-center">
                    <FaLocationArrow></FaLocationArrow> Bangladesh, Khulna,
                    Daulatpur
                  </p>
                  <a
                    href="mailto:prodeveloper25h@gmail.com"
                    className="text-slate-700 hover:underline cursor-pointer flex items-center gap-2 lg:justify-start md:justify-start justify-center"
                  >
                    <FaMessage></FaMessage> prodeveloper25h@gmail.com
                  </a>
                  <a
                    href="tel:+8801568501849"
                    className="text-slate-700 hover:underline cursor-pointer flex items-center gap-2 lg:justify-start md:justify-start justify-center"
                  >
                    <FaPhoneAlt></FaPhoneAlt> +880 1568-501849
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-4 bg-black text-white">
          <h2 className="lg:text-lg md:text-lg text-sm text-center">
            ©All rights reserved |{" "}
            <span className="text-[#fc3a40]">Nahid Hasan</span>
          </h2>
        </div>
      </footer>
    </>
  );
};

export default Footer;
