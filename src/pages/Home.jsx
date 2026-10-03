import Hero from "../components/Hero";
import About from "../components/About";
import Programs from "../components/Programs";
import ScrollAnimation from "../components/ScrollAnimation";

export default function Home() {
  return (
    <>
      <Hero />
      <ScrollAnimation>
        <About />
      </ScrollAnimation>
      <ScrollAnimation>
        <Programs />
      </ScrollAnimation>
    </>
  );
}
