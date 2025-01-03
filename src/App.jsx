import "./App.css";
import Blog from "./Blog/Blog";
import Card from "./Card/Card";
import Faq from "./Faq/Faq";
import Features from "./Features/Features";
import Footer from "./Footer/Footer";
import Hero from "./Hero/Hero";
import NavBar from "./NavBar/NavBar";
import Social from "./Social/Social";
import Testimonial from "./Testimonial/Testimonial";
import Trail from "./Trail/Trail";

function App() {
  return (
    <>
      <section>
        <NavBar />
        <Hero />
        <Social />
      </section>
      <section>
        <Features />
        <Testimonial />
      </section>
      <section>
        <Faq />
        <Card />
      </section>
      <section>
        <Blog />
        <Trail />
        <Footer />
      </section>
    </>
  );
}

export default App;
