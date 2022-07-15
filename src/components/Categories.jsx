import Graphic from "../assets/3d-model.png";
import Poster from "../assets/poster.png";
import Video from "../assets/video.png";

const Category = ({ name, icon }) => (
  <div className="h-[25rem] w-[95%] max-w-sm md:w-96 mx-5 my-5 border-4 shadow-lg border-black rounded-md">
    <span className="text-3xl w-full inline-block mt-10 text-center font-[Praktika-Bold]">
      {name}
    </span>
    <img src={icon} alt={name} className="w-56 mx-auto mt-10" />
  </div>
);

const Categories = () => (
  <div id="categories">
    <span className="section-title">Categories</span>
    <div className="flex flex-wrap  justify-around">
      <Category name="Poster Design" icon={Poster} />
      <Category name="3D Design" icon={Graphic} />
      <Category name="Video Editing" icon={Video} />
    </div>
  </div>
);
export default Categories;
