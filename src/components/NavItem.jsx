const NavItem = ({ children, className, content, nav }) => (
  <div
    className={
      className ||
      (nav ? "block" : "hidden") +
        " lg:block px-6 lg:px-14 py-6 cursor-pointer font-[Montserrat] text-center lg:border-l-4 border-black h-full whitespace-nowrap"
    }
  >
    {content ? <span>{content}</span> : children}
  </div>
);

export default NavItem;
