const NavItem = ({ children, className }) => (
  <div
    className={
      className ||
      " px-14 py-6 cursor-pointer font-[Montserrat] border-l-4 border-black h-full"
    }
  >
    {children}
  </div>
);

export default NavItem;
