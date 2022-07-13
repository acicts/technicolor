import Computer from "../computer.png";

const About = () => (
  <div className="flex lg:flex-row py-20 justify-around mx-20 sm:flex-col  sm:h-full">
    <div className="flex flex-col lg:w-[45%] pl-2 sm:w-full">
      <span className="text-[5rem] font-bold font-[Montserrat] leading-[5rem] mb-10">
        Intraschool <span className="font-[NeonLedLight]">Graphic Design</span>{" "}
        Competition
      </span>
      <span className="font-italic italic">
        "The way to get started is to quit talking and begin doing."
      </span>
      <span className="font-bold">- Walt Disney</span>
      <button className="font-[Montserrat] shadow-lg border-2 border-black rounded-sm text-3xl py-4 mt-20 w-64">
        Register
      </button>
    </div>
    <div className="lg:w-[45%] sm:w-full sm:mt-20 lg:m-0">
      <img className="m-auto w-[82%]" src={Computer} alt="ubetatta" />
    </div>
  </div>
);

export default About;
