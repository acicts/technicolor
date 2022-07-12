import Logo from "./logo.png";
import NavItem from "./NavItem";

const NavBar = () => (
  <nav className="flex border-b-4 border-black mb-10 first:mr-auto">
    <NavItem className="mr-auto px-14 py-3  border-r-4 border-black">
      <img
        className="ml-16 pr-16  my-auto cursor-pointer h-10"
        src={Logo}
        alt=""
      />
    </NavItem>
    <NavItem>
      <span className="">About</span>
    </NavItem>
    <NavItem>
      <span className="">Catagories</span>
    </NavItem>
    <NavItem>
      <span className="">Contact US</span>
    </NavItem>
  </nav>
);

export default NavBar;
