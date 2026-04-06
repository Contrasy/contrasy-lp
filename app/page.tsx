import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Features from "@/components/Features";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Plans from "@/components/Plans";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Benefits />
      <Features />
      <Projects />
      <Testimonials />
      {/* <Plans /> */}
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}
