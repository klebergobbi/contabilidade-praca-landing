import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Services } from "@/components/Services";
import { Audience } from "@/components/Audience";
import { Process } from "@/components/Process";
import { About } from "@/components/About";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Audience />
        <Process />
        <About />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
