import ServiceCard from "./ServiceCard";

function ServiceSelection() {
  const services = [
    {
      title: "Emergency Shelter",
      description:
        "Find short-term shelter options for individuals and families in crisis.",
    },
    {
      title: "Food Assistance",
      description:
        "Connect with local food pantries, meal programs, and community support.",
    },
    {
      title: "Family Support",
      description:
        "Resources for parents, children, and families who need stability and care.",
    },
    {
      title: "Job & Housing Resources",
      description:
        "Guidance for employment support, housing programs, and next-step planning.",
    },
  ];

  return (
    <section className="services">
      <h2>How We Can Help</h2>
      <p className="section-text">
        Choose the type of support you need and find a safer next step.
      </p>

      <div className="service-grid">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
}

export default ServiceSelection;
