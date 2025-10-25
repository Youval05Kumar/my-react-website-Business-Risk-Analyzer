import { Link } from "react-router-dom"
import { useState } from "react"
import { motion } from "framer-motion"

const cards = [
  { 
    key: "risk", 
    title: "Risk Assessment", 
    desc: "AI-driven risk scoring", 
    image: "/src/assets/Firefly_finance images gold card website risk 27919.jpg",
    frontHint: "Assess Risk",
    back: {
      headline: "Risk Modeling",
      text: "We quantify exposure using probability-weighted scenarios, stress tests, and industry benchmarks to deliver a single interpretable risk score.",
      link: "/dashboard#risk"
    }
  },
  { 
    key: "financial", 
    title: "Financial Tracking", 
    desc: "KPIs and trends", 
    image: "/src/assets/goldcrd.jpg",
    frontHint: "View KPIs",
    back: {
      headline: "KPI Monitoring",
      text: "Track revenue, margins, cashflow, and stability indices in real time with variance alerts and month-over-month insights.",
      link: "/dashboard#financial"
    }
  },
  { 
    key: "reports", 
    title: "Visualization & Reports", 
    desc: "Beautiful charts & PDFs", 
    image: "/src/assets/Firefly_images for Customer Risk Analyzer website pannels 148641.jpg",
    frontHint: "See Reports",
    back: {
      headline: "Executive Reporting",
      text: "Generate clean visual summaries with export-ready dashboards and curated insights for board reviews.",
      link: "/visualization"
    }
  },
  { 
    key: "sentiment", 
    title: "AI Sentiment Insights", 
    desc: "News & tone analysis", 
    image: "/src/assets/Firefly_images for Customer Risk Analyzer website pannels 27919.jpg",
    frontHint: "Analyze News",
    back: {
      headline: "Market Sentiment",
      text: "Classify headlines and filings by tone to anticipate reputational risk and sector momentum.",
      link: "/sentiment"
    }
  },
]

const Services = () => {
  const [flipped, setFlipped] = useState(null)
  return (
    <div className="page services">
      <div className="page-header">
        <h2>Our Services</h2>
        <p>Comprehensive risk analysis solutions powered by advanced AI technology</p>
      </div>
      
      <div className="services-grid">
        {cards.map((c) => (
          <motion.div key={c.key} className="service-card" whileHover={{ y: -4 }}>
            <div className="service-image">
              <img src={c.image} alt={c.title} />
            </div>
            <div className="service-content">
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
              <a href={c.back.link} target="_blank" rel="noopener noreferrer" className="btn ghost">Learn More</a>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="actions">
        <Link to="/dashboard" className="btn primary">Go to Dashboard</Link>
        <button className="btn" disabled>Download Report (coming soon)</button>
      </div>
    </div>
  )
}

export default Services


