import { useEffect, useState } from "react";
import Lenis from "lenis";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Services } from "@/components/Services";
import { Booking } from "@/components/Booking";
import { Gallery } from "@/components/Gallery";
import { About } from "@/components/About";
import { Location } from "@/components/Location";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { scrollToId, setLenis } from "@/lib/scroll";

export default function Home() {
  const [service, setService] = useState("combo");

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09 });
    setLenis(lenis);
    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      setLenis(null);
    };
  }, []);

  const handleBookService = (id: string) => {
    setService(id);
    scrollToId("agendar");
  };

  return (
    <div className="min-h-screen bg-[#0B0C0E] text-cream">
      <div className="grain-overlay" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services onBook={handleBookService} />
        <Booking service={service} onServiceChange={setService} />
        <Gallery />
        <About />
        <Location />
        <Footer />
      </main>
      <WhatsAppFloat />
      <Toaster richColors theme="dark" />
    </div>
  );
}
