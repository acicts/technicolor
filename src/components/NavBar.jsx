import { useEffect, useState } from "react";
import Logo from "../logo.png";
import NavItem from "./NavItem";

const NavBar = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 80);
    });
  }, []);
  return (
    <nav
      className={
        (scroll ? "bg-[#e1dcd8] " : "") +
        "sticky top-0 z-50 flex border-4 border-black first:mr-auto h-20"
      }
    >
      <NavItem className="mr-auto px-14  h-20 border-black align-middle">
        <img
          className="px-16 my-5 cursor-pointer h-10 inline-block"
          src={Logo}
          alt=""
        />
      </NavItem>
      <NavItem content="About" />
      <NavItem content="Catagories" />
      <NavItem content="Contact Us" />
    </nav>
  );
};

export default NavBar;
