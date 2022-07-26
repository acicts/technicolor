import Computer from "../assets/computer.png";

const About = () => (
  <div
    className="flex lg:flex-row py-10 lg:py-20 justify-around flex-col-reverse  "
    id="about"
  >
    <div className="pl-2 flex flex-col w-full lg:w-[50%]">
      <span className="text-[2.8rem] md:text-[4rem] lg:text-[4.5rem]  font-[Praktika-Bold] leading-[3rem] md:leading-[4rem] lg:leading-[5rem] mb-10 mx-auto lg:mx-0 text-center lg:text-left">
        Intraschool
        <br />
        <span className="font-[Praktika-ExtraBold]">Graphic Design</span>
        <br />
        Competition
      </span>
      <span className="italic mx-auto lg:mx-0 font-[Poppins]">
        "The way to get started is to quit talking and begin doing."
      </span>
      <span className="font-bold mx-auto lg:mx-0 font-[Montserrat]">
        - Walt Disney
      </span>
      <button
        className="btn mx-auto lg:mx-0 py-4 mt-20 w-64 transition-[.4s]"
        onClick={() => window.open("https://forms.gle/tbcs96MdmhnvBGo29")}
      >
        Register
      </button>
      <button
        className="btn mx-auto lg:mx-0 py-4 mt-5 w-11/12 max-w-[500px] transition-[.4s]"
        onClick={() => window.open("https://drive.google.com/file/d/1QR2sVpG9k49ByL3VZ3v9NYRf0ScAibqR/view?usp=sharing")}
      >
        Rules and regulations
      </button>
    </div>
    <div className="lg:w-[45%] sm:w-full sm:mt-20 lg:m-0">
      <img
        className="m-auto w-[85%] max-w-lg"
        src={Computer}
        alt="a computer"
      />
    </div>
  </div>
);

export default About;
