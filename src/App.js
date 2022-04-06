import "./App.css";
import AboutUs from "./components/AboutUs";
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
    </div>
  );
}

export default App;
