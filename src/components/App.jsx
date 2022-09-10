import About from "./About";
import Categories from "./Categories";
import NavBar from "./NavBar";
import Contact from "./OC";
import Winners from "./Winners";

const App = () => (
  <div id="#top">
    <NavBar />
    <main className="border-4 border-black border-t-0 px-5 lg:px-20 pb-5">
      <About />
      <Categories />
      <Winners />
      <Contact />
      <footer className="text-center mt-20 text-xl">ACICTS©2022</footer>
    </main>
  </div>
);

export default App;
