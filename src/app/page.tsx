import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Impact from "@/components/Impact";
import Experience from "@/components/Experience";
import CaseStudies from "@/components/CaseStudies";
import Stack from "@/components/Stack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Impact />
        <Experience />
        <CaseStudies />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
