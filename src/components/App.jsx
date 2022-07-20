import About from "./About";
import Categories from "./Categories";
import NavBar from "./NavBar";
import OC from "./OC";
import Register from "./Register";

const App = () => (
  <div id="#top">
    <NavBar />
    <main className="border-4 border-black border-t-0 px-5 lg:px-20 pb-20">
      <About />
      <Categories />
      <Register />
      {/* <iframe
        title="form"
        src="https://docs.google.com/forms/d/e/1FAIpQLSf6gNxy5QNzmf9Zw1Q86mw0xAUL7WtL7VlNKcB1eJbgNwj1dg/viewform?embedded=true"
        width="700"
        height="520"
        lang="en"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >
        Loading…
      </iframe> */}
      <OC />
    </main>
  </div>
);

export default App;
