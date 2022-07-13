const NavItem = ({ children, className, content }) => (
  <div
    className={
      className ||
      " px-14 py-6 cursor-pointer font-[Montserrat] border-l-2 border-black h-full"
    }
  >
    {content ? <span>{content}</span> : children}
  </div>
);

export default NavItem;
