import { Link } from "react-router-dom"
import { useState } from "react"

const features = [
  { title: "Risk Analysis", desc: "AI-driven company risk scoring", icon: "⚠️", image: "/src/assets/risk.jpg" },
  { title: "Financial Metrics", desc: "Revenue, stability and trends", icon: "📊", image: "/src/assets/chart.jpg" },
  { title: "Reports", desc: "Export professional PDF summaries", icon: "📄", image: "/src/assets/crd.jpg" },
  { title: "AI Insights", desc: "Sentiment and narrative insights", icon: "🤖", image: "/src/assets/stk.jpg" },
]

const stats = [
  { number: "500+", label: "Companies Analyzed", image: "/src/assets/Bussiness.avif" },
  { number: "95%", label: "Accuracy Rate", image: "/src/assets/Build.avif" },
  { number: "24/7", label: "Monitoring", image: "/src/assets/glob.jpg" },
  { number: "50+", label: "Risk Factors", image: "/src/assets/gold.jpg" },
]

const Home = () => {
  const [isFlipped, setIsFlipped] = useState(false)
  const [companyName, setCompanyName] = useState("")

  const handleAnalysis = () => {
    if (companyName.trim()) {
      // Store company name in localStorage for use in dashboard
      localStorage.setItem('selectedCompany', companyName.trim())
    }
  }

  return (
    <div className="page home">
      <section className="hero" style={{ backgroundImage: "url('/src/assets/wave.jpg')" }}>
        <div className="hero-overlay">
          <div className="hero-content">
            <div className="hero-header">
              <div className="hero-text">
                <div className="hero-logo-section">
                  <img src="/src/assets/Company_logo.png" alt="Company Logo" className="hero-logo" />
                </div>
                <h1 className="hero-title">Company Risk Analyzer</h1>
                <p className="hero-subtitle">Explore intelligent business risk insights in seconds with our advanced AI-powered analytics platform.</p>
                
                <div className="company-input-section">
                  <div className="input-group">
                    <input 
                      type="text" 
                      placeholder="Enter Company's Name to Assess Business Risk Factors"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="company-input"
                    />
                    <Link 
                      to="/dashboard" 
                      className="btn primary large"
                      onClick={handleAnalysis}
                    >
                      Start Analysis
                    </Link>
                  </div>
                </div>
                
                <div className="cta">
                  <Link to="/about" className="btn ghost large">Learn More</Link>
                </div>
              </div>
              <div 
                className={`flip-panel ${isFlipped ? 'flipped' : ''}`}
                onClick={() => setIsFlipped(!isFlipped)}
              >
                <div className="flip-panel-inner">
                  <div className="flip-panel-front">
                    <img src="/src/assets/main.png" alt="Company Risk Analyzer Logo" className="panel-logo" />
                    <div className="flip-arrow"></div>
                  </div>
                  <div className="flip-panel-back">
                    <div className="panel-content">
                      <h3>Our Purpose</h3>
                      <p>Empowering businesses with intelligent risk assessment through cutting-edge AI technology. We transform complex data into actionable insights that drive informed decision-making and sustainable growth.</p>
                      <blockquote>
                        "Excellence happens not by accident; it is a process of understanding, analyzing, and improving. Success comes to those who measure, learn, and act wisely on the insights they uncover."
                        <cite>- Youval Kumar</cite>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="section-header">
          <h2>Powerful Analytics Features</h2>
          <p>Comprehensive risk assessment tools designed for modern businesses</p>
        </div>
        <div className="features-grid">
          {features.map((f) => (
            <div key={f.title} className="feature-card">
                  <div className="feature-image">
                    <img src={f.image} alt={f.title} />
                  </div>
              <div className="feature-content">
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
                <Link to="/services" className="btn ghost">Learn More</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

          <section className="stats">
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <div className="stat-image">
                    <img src={stat.image} alt={stat.label} />
                  </div>
                  <div className="stat-content">
                    <div className="stat-number">{stat.number}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>
    </div>
  )
}

export default Home


