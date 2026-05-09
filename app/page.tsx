import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Artists } from "./components/Artists";
import { Videos } from "./components/Videos";
import { Gallery } from "./components/Gallery";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Artists />
        <Videos />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
