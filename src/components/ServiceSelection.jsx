import ServiceCard from "./ServiceCard";
import { Link } from "react-router-dom";

function ServicesSection() {
  const services = [
    {
      title: "Emergency Beds",
      description:
        "Safe temporary shelter for men, women, and children experiencing homelessness, domestic violence, financial hardship, or personal crisis.",
    },
    {
      title: "Counseling Support",
      description:
        "Support from counselors and counseling students who are still in school and provide guidance under supervision.",
    },
    {
      title: "Hot Meals",
      description:
        "Warm meals provided to help guests feel cared for, supported, and physically nourished during their stay.",
    },
    {
      title: "Daycare Support",
      description:
        "A safe space for children while parents attend appointments, meet with staff, search for work, or handle important needs.",
    },
  ];

  return (
    <section className="services-section">
      <h2>Our Services</h2>

      <p className="services-intro">
        Stillwater Shelter offers practical support for individuals and families
        who need safety, care, and a clear next step.
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

      <div className="services-cta">
        <Link className="btn" to="/resources">
          View Resources
        </Link>

        <Link className="btn secondary" to="/get-help">
          Get Help
        </Link>
      </div>
    </section>
  );
}

export default ServicesSection;
