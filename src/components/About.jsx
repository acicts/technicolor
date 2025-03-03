import Computer from "../assets/computer.png";

const About = () => (
  <div
    className="flex lg:flex-row py-10 lg:py-20 justify-around flex-col-reverse  "
    id="about"
  >
    <div className="pl-2 flex flex-col w-full lg:w-[50%]">
      <span className="text-[2.8rem] md:text-[4rem] lg:text-[4.5rem]  font-[Praktika-Bold] leading-[3rem] md:leading-[4rem] lg:leading-[5rem] mb-10 mx-auto lg:mx-0 text-center lg:text-left">
        Intra-School
        <br />
        <span className="font-[Praktika-ExtraBold]">Graphic Design</span>
        <br />
        Competition
      </span>
    
      
      <button
        className="btn mx-auto lg:mx-0 py-4 mt-5 w-60 transition-[.4s]"
        onClick={() => window.open("https://forms.gle/WjMPSZLyNXDvHRDF8")}
      >
        Submit Now
      </button>
    </div>
    <div className="lg:w-[45%] sm:w-full sm:mt-20 lg:m-0">
      <img
        className="m-auto w-[85%] max-w-lg"
        src={Computer}
        alt="acicts"
      />
    </div>
  </div>
);

export default About;
