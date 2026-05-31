import { Link } from "react-router-dom";

function Resources() {
  return (
    <section className="page resources-page">
      <h1>Stillwater Shelter Resources</h1>

      <p className="resource-intro">
        Stillwater Shelter provides support for individuals and families who
        need safety, stability, and practical help during difficult times. Our
        resources are designed to meet immediate needs while helping guests take
        their next step forward.
      </p>

      <div className="resources-grid">
        <div className="resource-card">
          <h2>Emergency Beds</h2>
          <p>
            Emergency beds are available for men, women, and children who need a
            safe place to stay. Guests are provided with a clean sleeping space,
            basic supplies, and support from shelter staff during their stay.
          </p>
          <p>
            This service is intended for people experiencing homelessness,
            domestic violence, financial hardship, or personal crisis.
          </p>
        </div>

        <div className="resource-card">
          <h2>Counseling Support</h2>
          <p>
            Stillwater Shelter offers counseling support from trained staff and
            counseling students who are still completing their education.
          </p>
          <p>
            While they are not licensed therapists yet, they provide emotional
            support, active listening, coping strategies, and guidance under
            supervision.
          </p>
        </div>

        <div className="resource-card">
          <h2>Hot Meals</h2>
          <p>
            Guests have access to hot meals throughout the day. Meals are
            prepared to help provide comfort, nourishment, and stability for
            individuals and families staying at the shelter.
          </p>
          <p>
            Food support is an important part of helping guests feel cared for
            while they work toward their next steps.
          </p>
        </div>

        <div className="resource-card">
          <h2>Daycare Support</h2>
          <p>
            Daycare support is available for parents staying at Stillwater
            Shelter. This gives children a safe and supervised space while
            parents attend appointments, meet with staff, search for work, or
            take care of important responsibilities.
          </p>
          <p>
            The goal is to support both parents and children with care,
            structure, and peace of mind.
          </p>
        </div>
      </div>

      <div className="resource-cta">
        <h2>Need help now?</h2>
        <p>
          If you or your family need support, visit the Get Help page to learn
          what steps to take next.
        </p>

        <Link className="btn" to="/get-help">
          Go to Get Help
        </Link>
      </div>
    </section>
  );
}

export default Resources;
