function Donate() {
  return (
    <section className="page">
      <h1>Support Stillwater Shelter</h1>

      <p>
        Your support helps provide safety, comfort, and resources for people and
        families who are going through difficult times.
      </p>

      <p>
        Donations can help with emergency shelter needs, food, clothing, hygiene
        items, transportation, and basic supplies.
      </p>

      <div className="donation-options">
        <div className="resource-card">
          <h3>$10</h3>
          <p>Helps provide hygiene items and basic care supplies.</p>
        </div>

        <div className="resource-card">
          <h3>$25</h3>
          <p>Helps provide meals, clothing, or transportation support.</p>
        </div>

        <div className="resource-card">
          <h3>$50</h3>
          <p>
            Helps support emergency shelter needs for individuals or families.
          </p>
        </div>
      </div>

      <button className="btn">Donate Now</button>
    </section>
  );
}

export default Donate;
