import Hero from "../components/Hero";
import EmergenyBanner from "../components/EmergenyBanner";
import ServicesSection from "../components/ServicesSection";
import CTA from "../components/CTA";

function Home() {
  return (
    <main>
      <Hero />
      <EmergenyBanner />
      <ServicesSection />
      <CTA />
    </main>
  );
}

export default Home;
