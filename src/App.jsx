import "./App.css";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Story from "./components/Story";

function App() {
  return (
    <div>
      <header id="home">
        <Navbar />
        <Hero />
      </header>
      <main>
        <Story />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
