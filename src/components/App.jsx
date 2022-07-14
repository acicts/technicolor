import About from "./About";
import NavBar from "./NavBar";
import Register from "./Register";
import Categories from "./Categories";

const App = () => (
  <div id="#top">
    <NavBar />
    <main className="border-4 border-black border-t-0 px-5 lg:px-20 pb-20">
      <About />
      <Categories />
      <Register />
    </main>
  </div>
);

export default App;
