import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Schedule from "@/components/Schedule";
import Services from "@/components/Services";
import ZenBackground from "@/components/ZenBackground";

export default function Home() {
  return (
    <>
      <ZenBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Services />
        <Schedule />
        <Contact />
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </>
  );
}
