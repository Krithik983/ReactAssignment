import "./App.css";
import Faq from "./Faq";
import Features from "./Features";
import Hero from "./Hero";
import NavBar from "./NavBar";
import Social from "./Social";
import Testimonial from "./Testimonial";

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
      </section>
    </>
  );
}

export default App;
