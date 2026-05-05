import Navbar from "../components/Navbar";
import EmergencyBanner from "../components/EmergenyBanner";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

function Home() {
  return (
    <main>
      <Navbar />
      <EmergenyBanner />
      <Hero />
      <Footer />
    </main>
  );
}

export default Home;
