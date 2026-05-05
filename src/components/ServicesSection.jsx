function ServicesSection() {
  return (
    <section className="services">
      <h2>Our Services</h2>
      <div className="serviceGrid">
        <ServiceCard
          title="Emergency Shelter"
          description="Safe, beds for men, women, and children."
        />

        <ServiceCard
          title="Counseling"
          description="Support for domestic violence survivors 
                and individuals experiencing homelessness"
        />

        <ServiceCard
          title="Hot Meals"
          description="Nuritious meals served daily."
        />

        <ServiceCard
          title="Job Training"
          description="Skills development and employment assistance."
        />

        <ServiceCard
          title="Childcare"
          description="Safe, supervised care for children while parents seek employment or training."
        />

        <ServiceCard
          title="Case Management"
          description="Personalized support to help clients achieve stability and self-sufficiency."
        />
      </div>
    </section>
  );
}

export default ServicesSection;
