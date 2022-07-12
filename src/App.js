import "./App.css";
import Computer from "./computer.png";
import NavBar from "./NavBar";

const App = () => (
  <div className="border-4 border-black ">
    <NavBar />
    <div className="flex lg:flex-row my-20 justify-around mx-20 sm:flex-col  sm:h-full">
      <div className="flex flex-col lg:w-[45%] pl-2 sm:w-full">
        <span
          className="text-[5rem] font-bold font-[Montserrat] leading-[6
          rem] mb-10"
        >
          Intraschool{" "}
          <img
            src="https://see.fontimg.com/api/renderfont4/3zRBM/eyJyIjoiZnMiLCJoIjo4NSwidyI6MTEzMiwiZnMiOjc1LCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/R3JhcGhpYyBEZXNpZ24/attack-graffiti.png"
            alt=""
          />{" "}
          Competition
        </span>
        <span className="font-italic italic">
          "if you have it, you don't need to have anything else, and if you
          don't have it, it doesn't much matter what else you have"
        </span>
        <span className="font-bold">J. M. Barrle</span>
        <button className="font-[Montserrat] shadow-lg border-2 border-black rounded-sm text-3xl py-4 mt-20 w-64">
          Register
        </button>
      </div>
      <div className="lg:w-[45%] sm:w-full sm:mt-20 lg:m-0">
        <img className="m-auto w-[82%]" src={Computer} alt="ubetatta" />
      </div>
    </div>
  </div>
);

export default App;
