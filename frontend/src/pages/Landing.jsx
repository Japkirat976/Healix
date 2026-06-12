import { Link } from "react-router-dom";
import "../styles/landing.css";
import Navbar from "../components/Navbar";

function Landing() {
  return (
    <>
      <Navbar />

      <section className="hero">
        <h2>Your AI Health Companion</h2>

        <p>
          Personalized meal plans, workouts,
          progress tracking and healthy habits.
        </p>

        <Link to="/signup" className="btn">
          Get Started
        </Link>
      </section>
    </>
  );
}

export default Landing;