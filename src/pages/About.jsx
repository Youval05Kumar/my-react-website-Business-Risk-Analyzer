import { Link } from "react-router-dom"

const About = () => (
  <div className="page about">
    <h2>About Us</h2>
    <p>We build trustworthy AI to help companies understand and manage risk.</p>

    <div className="flow">
      <div>Input → AI Model → Risk Score → Insights</div>
    </div>

    <section className="mv">
      <div className="card">
        <h3>Mission</h3>
        <p>Deliver clear, actionable analytics for confident decisions.</p>
      </div>
      <div className="card">
        <h3>Vision</h3>
        <p>Make enterprise-grade risk analysis accessible to everyone.</p>
      </div>
    </section>

    <section className="team">
      <div className="member card">
        <h4>Youval Kumar & Team</h4>
        <p>Creators of Company Risk Analyzer.</p>
      </div>
    </section>

    <Link to="/services" className="btn">Learn about Services</Link>
  </div>
)

export default About


