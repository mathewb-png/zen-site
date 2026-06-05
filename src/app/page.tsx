import Breathe from "@/components/Breathe";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Principles from "@/components/Principles";
import Quote from "@/components/Quote";
import ZenBackground from "@/components/ZenBackground";

export default function Home() {
  return (
    <>
      <ZenBackground />
      <Navbar />
      <main>
        <Hero />
        <Breathe />
        <Principles />
        <Quote />
      </main>
      <Footer />
    </>
  );
}
