import "./App.css";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero/main";
import Memberships from "./components/Memberships";
import Services from "./components/Services";

function App() {
  return (
    <div className="App">
      <Hero />
      <AboutUs />
      <Services />
      <Memberships />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
