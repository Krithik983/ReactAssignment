import "./App.css";
import Blog from "./components/Blog/Blog";
import Card from "./components/Card/Card";
import Faq from "./components/FAQ/Faq";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/Navbar/NavBar";
import Social from "./components/Social/Social";
import Testimonial from "./components/Testimonial/Testimonial";
import Trail from "./components/Trail/Trail";

function App() {
  return (
    <div className="app-container">
      <NavBar />
      <Hero />
      <Social />
      <Features />
      <Testimonial />
      <Faq />
      <Card />
      <Blog />
      <Trail />
      <Footer />
    </div>
  );
}

export default App;
