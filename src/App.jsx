import "./App.css";
import Blog from "./Blog";
import Card from "./Card";
import Faq from "./Faq";
import Features from "./Features";
import Footer from "./Footer";
import Hero from "./Hero";
import NavBar from "./NavBar";
import Social from "./Social";
import Testimonial from "./Testimonial";
import Trail from "./Trail";

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
