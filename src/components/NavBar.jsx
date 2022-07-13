import { useEffect, useState } from "react";
import Bars from "../assets/bars-solid.svg";
import Logo from "../assets/logo.png";
import NavItem from "./NavItem";

const NavBar = () => {
  const [scroll, setScroll] = useState(false);
  const [navbar, setNavbar] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 80);
    });
  }, []);

  const popUpNav = () => {
    setNavbar(!navbar);
  };
  return (
    <nav
      className={
        (scroll ? "bg-[#e1dcd8] " : "") +
        (navbar ? "h-80 border-b-4" : "h-20 border-b-0") +
        "sticky top-0 z-50 flex flex-col lg:flex-row transition-[height] border-4 border-black first:mr-auto  lg:h-20"
      }
    >
      <NavItem className="flex mr-auto w-full px-5 lg:px-14  lg:h-20  align-middle justify-between">
        <img className="lg:px-16 my-5 cursor-pointer h-10" src={Logo} alt="" />
        <img
          src={Bars}
          alt="3bars"
          className="w-8 lg:hidden"
          onClick={popUpNav}
        />
      </NavItem>
      <NavItem content="About" nav={navbar} />
      <NavItem content="Catagories" nav={navbar} />
      <NavItem content="Contact Us" nav={navbar} />
    </nav>
  );
};

export default NavBar;
