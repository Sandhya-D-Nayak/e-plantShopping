import { useNavigate } from "react-router-dom";

function AboutUs() {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <h1>Paradise Nursery</h1>
      <p>Your one-stop shop for beautiful indoor plants.</p>
      <button onClick={() => navigate("/plants")}>Get Started</button>
    </div>
  );
}

export default AboutUs;
