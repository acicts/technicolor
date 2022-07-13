import Graphic from "../assets/3d-model.png";
import Poster from "../assets/poster.png";
import Video from "../assets/video.png";
import About from "./About";
import Catagory from "./Catagory";
import NavBar from "./NavBar";

const App = () => (
  <div>
    <NavBar />
    <main className="border-4 border-black border-t-0 px-5 lg:px-20 pb-20">
      <About />
      <span className="underline underline-offset-[20px] text-center font-[NeonLedLight] inline-block w-full text-[3.5rem] lg:text-[5rem] mb-20">
        Catagories
      </span>
      <div className="flex flex-col lg:flex-row justify-around">
        <Catagory name="Poster Design" icon={Poster} />
        <Catagory name="3D Design" icon={Graphic} />
        <Catagory name="Video Editing" icon={Video} />
      </div>
    </main>
  </div>
);

export default App;
