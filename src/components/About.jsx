import Computer from "../assets/computer.png";

const About = () => (
  <div
    className="flex lg:flex-row py-10 lg:py-20 justify-around flex-col-reverse  sm:h-full"
    id="about"
  >
    <div className="pl-2 flex flex-col w-full lg:w-[45%]">
      <span className="text-[300%] lg:text-[5rem] font-bold font-[Montserrat] leading-[4rem] lg:leading-[5rem] mb-10">
        Intraschool <span className="font-[NeonLedLight]">Graphic Design</span>{" "}
        Competition
      </span>
      <span className="font-italic italic">
        "The way to get started is to quit talking and begin doing."
      </span>
      <span className="font-bold">- Walt Disney</span>
      <button className="btn mx-auto lg:mx-0 py-4 mt-20 w-64">Register</button>
    </div>
    <div className="lg:w-[45%] sm:w-full sm:mt-20 lg:m-0">
      <img className="m-auto w-[82%]" src={Computer} alt="a computer" />
    </div>
  </div>
);

export default About;
