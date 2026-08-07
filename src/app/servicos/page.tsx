import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

import { Hero } from "@/components/home/Hero/Hero";
import { Services } from "@/components/home/Services/Services";
import { Process } from "@/components/home/Process/Process";
import { CTA } from "@/components/home/CTA/CTA";

export default function ServicesPage() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <Services />

        <Process />

        <CTA />
      </main>

      <Footer />
    </>
  );
}