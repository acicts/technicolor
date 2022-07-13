const Catagory = ({ name, icon }) => (
  <div className="h-[25rem] w-[95%] mx-auto my-5 lg:my-0 border-4 shadow-lg border-black">
    <span className="text-3xl w-full inline-block mt-10 text-center font-[Montserrat]">
      {name}
    </span>
    <img src={icon} alt="" className="w-56 mx-auto mt-10" />
  </div>
);
export default Catagory;
