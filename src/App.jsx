import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="bg-colorBg h-full w-full">
      <Navbar />
      <Hero />
      <About />
      <Skills />
    </div>
  );
}

export default App;
