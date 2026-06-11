import { useState } from "react";

function Donate() {
  const [showForm, setShowForm] = useState(false);
  const [amount, setAmount] = useState("");

  function handleDonate(selectedAmount) {
    setAmount(selectedAmount);
    setShowForm(true);
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Thank you for your $${amount} donation. This is a prototype.`);
  }

  return (
    <section className="page donate-page">
      <h1>Support Stillwater Shelter</h1>

      <p>
        Your support helps provide shelter, meals, safety, and care for families
        experiencing homelessness, domestic violence, or crisis.
      </p>

      <div className="donation-options">
        <div className="resource-card">
          <h3>$10</h3>
          <p>Helps provide hygiene items and basic care supplies.</p>
          <button className="btn" onClick={() => handleDonate("10")}>
            Donate $10
          </button>
        </div>

        <div className="resource-card">
          <h3>$25</h3>
          <p>Helps provide hot meals, clothing, or transportation support.</p>
          <button className="btn" onClick={() => handleDonate("25")}>
            Donate $25
          </button>
        </div>

        <div className="resource-card">
          <h3>$50</h3>
          <p>Helps support emergency shelter needs for families.</p>
          <button className="btn" onClick={() => handleDonate("50")}>
            Donate $50
          </button>
        </div>
      </div>

      {showForm && (
        <form className="donation-form" onSubmit={handleSubmit}>
          <h2>Donation Information</h2>

          <input type="text" placeholder="Full name" required />

          <input type="email" placeholder="Email address" required />

          <input type="text" value={`$${amount}`} readOnly />

          <input type="text" placeholder="Card number" required />

          <div className="form-row">
            <input type="text" placeholder="MM/YY" required />

            <input type="text" placeholder="CVV" required />
          </div>

          <button className="btn" type="submit">
            Complete Donation
          </button>
        </form>
      )}
    </section>
  );
}

export default Donate;
