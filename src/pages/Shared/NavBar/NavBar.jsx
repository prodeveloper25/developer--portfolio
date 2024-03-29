import { Navbar } from "keep-react";
import { FaTelegramPlane } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/icon/logo.png";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="shadow-lg">
      <Navbar fluid={true} className="max-w-screen-xl mx-auto">
        <Navbar.Container className="flex items-center justify-between">
          <Navbar.Brand>
            <a href="/">
              <img src={logo} alt="logo" className="lg:w-60 md:w-48 w-40" />
            </a>
          </Navbar.Brand>

          <Navbar.Container className="flex items-center gap-6">
            <Navbar.Container
              tag="ul"
              className="lg:flex hidden items-center justify-between gap-4"
            >
              <Navbar.Link
                className="all-link"
                linkName={
                  <NavLink
                    to="/"
                    className="text-black text-lg font-medium px-3 py-1"
                  >
                    Home
                  </NavLink>
                }
              />
              <Navbar.Link
                className="all-link"
                linkName={
                  <NavLink
                    to="/works"
                    className="text-black text-lg font-medium px-3 py-1"
                  >
                    Works
                  </NavLink>
                }
              />
              <Navbar.Link
                className="all-link"
                linkName={
                  <NavLink
                    to="/services"
                    className="text-black text-lg font-medium px-3 py-1"
                  >
                    Services
                  </NavLink>
                }
              />
              <Navbar.Link
                className="all-link"
                linkName={
                  <NavLink
                    to="/skills"
                    className="text-black text-lg font-medium px-3 py-1"
                  >
                    Skills
                  </NavLink>
                }
              />
              <Navbar.Link
                className="all-link"
                linkName={
                  <NavLink
                    to="contact"
                    className="text-black text-lg font-medium px-3 py-1 "
                  >
                    Contact
                  </NavLink>
                }
              />
              <Navbar.Link
                linkName={
                  <a
                    href="https://www.fiverr.com/pro_developer25"
                    target="blank"
                  >
                    <button className="bg-[#fc3a40]   lg:hover:scale-110 flex gap-2 items-center text-white px-4 py-2 lg:ml-44 duration-200 rounded hover:bg-[#14a800] ">
                      <FaTelegramPlane className="text-lg"></FaTelegramPlane>{" "}
                      Hire me
                    </button>
                  </a>
                }
              />
            </Navbar.Container>
            <Navbar.Container className="flex gap-1">
              <Navbar.Toggle className="block" />
            </Navbar.Container>
          </Navbar.Container>
          <Navbar.Collapse
            collapseType="sidebar"
            className="fixed right-0 top-0 bg-white p-10 lg:!w-2/6 xl:!w-1/6 md:!w-2/6 w-1/2"
          >
            <Navbar.Container tag="ul" className="flex flex-col gap-5">
              <Navbar.Link
                className="all-link-mini"
                linkName={
                  <NavLink to="/" className="text-black">
                    Home
                  </NavLink>
                }
              />
              <Navbar.Link
                className="all-link-mini"
                linkName={
                  <NavLink to="/works" className="text-black ">
                    Works
                  </NavLink>
                }
              />
              <Navbar.Link
                className="all-link-mini"
                linkName={
                  <NavLink to="/services" className="text-black ">
                    Services
                  </NavLink>
                }
              />
              <Navbar.Link
                className="all-link-mini"
                linkName={
                  <NavLink to="/skills" className="text-black ">
                    Skills
                  </NavLink>
                }
              />
              <Navbar.Link
                className="all-link-mini"
                linkName={
                  <NavLink to="/contact" className="text-black ">
                    Contact
                  </NavLink>
                }
              />
              <Navbar.Link
                linkName={
                  <a
                    href="https://www.fiverr.com/pro_developer25"
                    target="blank"
                  >
                    <button className="bg-[#fc3a40] flex gap-2 items-center text-white px-1 py-1 duration-300 rounded hover:bg-[#14a800] ">
                      <FaTelegramPlane></FaTelegramPlane> Hire me
                    </button>
                  </a>
                }
              />
            </Navbar.Container>
          </Navbar.Collapse>
        </Navbar.Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
