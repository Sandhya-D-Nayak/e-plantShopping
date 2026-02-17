import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div className="landing">
      <div className="landing-content">
        <h1>Paradise Nursery</h1>
        <p>
          We provide beautiful indoor plants to make your home fresh and
          vibrant.
        </p>
        <Link to="/plants">
          <button>Get Started</button>
        </Link>
      </div>
    </div>
  );
}

export default AboutUs;
