import "./App.css";
import { useScrollAnimations } from "./useScrollAnimations";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Reviews from "./components/Reviews";
import Timeline from "./components/Timeline";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

function App() {
  useScrollAnimations();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Reviews />
        <Timeline />
        <ContactUs />
      </main>
      <Footer />
    </>
  );
}

export default App;
