import { useEffect, useState } from "react";
import Bars from "../assets/bars-solid.svg";
import Logo from "../assets/logo.png";
import NavItem from "./NavItem";

const NavBar = () => {
  const [scroll, setScroll] = useState(false);
  const [navbar, setNavbar] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 1);
    });
  }, []);

  return (
    <nav
      className={
        (scroll ? "bg-[#e1dcd8] " : "") +
        (navbar ? "h-80" : "h-20 ") +
        " sticky top-0 z-50 flex flex-col lg:flex-row transition-[height] border-4 border-black   lg:h-20"
      }
      onClick={() => {
        if (navbar) {
          setNavbar(false);
        }
      }}
    >
      <NavItem
        navID="#top"
        className="flex w-full lg:w-96 border-r-0 xl:border-r-4 border-black  mr-auto px-5 lg:px-14 align-middle  lg:h-[4.7rem] justify-between"
      >
        <img
          className="lg:px-16 my-5 cursor-pointer align-middle h-10"
          src={Logo}
          alt="technicolor logo"
        />
        <img
          src={Bars}
          alt="3bars"
          className="w-8 lg:hidden"
          onClick={() => setTimeout(() => setNavbar(!navbar), 150)}
        />
      </NavItem>
      <NavItem content="About" nav={navbar} />
      <NavItem content="Categories" nav={navbar} />
      <NavItem content="Winners" nav={navbar} />
      <NavItem content="Contact us" nav={navbar} navID="#contact" />
    </nav>
  );
};

export default NavBar;
