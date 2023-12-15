import "./App.css";
import About from "./components/About";
import Hero from "./components/Hero";
import Works from "./components/MyWorks";
import Footer from "./components/Contacts";

function App() {
  return (
    <div className="bg-about-dark">
      <Hero />
      <About />
      <Works />
      <Footer />
    </div>
  );
}

export default App;
