import EmergencyBanner from "../components/EmergencyBanner";
import GetHelp from "../pages/GetHelp";
import ServiceSelection from "../components/ServiceSelection";
import Hero from "../components/Hero";

function Home() {
  return (
    <>
      <EmergencyBanner />
      <Hero />
      <GetHelp />
      <ServiceSelection />
    </>
  );
}

export default Home;
