import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

const AISentimentInsights = () => {
  const [companyName, setCompanyName] = useState("")
  const [flippedCard, setFlippedCard] = useState(null)

  useEffect(() => {
    const storedCompany = localStorage.getItem('selectedCompany')
    if (storedCompany) {
      setCompanyName(storedCompany)
    }
  }, [])

  const fadeUp = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }
  const stagger = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } }

  const flipCards = [
    {
      id: 1,
      front: {
        icon: "📰",
        title: "Market Sentiment",
        subtitle: "What the world says about the company",
        image: "/src/assets/pexels-fauxels-3184641.jpg"
      },
      back: {
        content: "Overall positive sentiment — recent product launch praised by customers. Social media mentions show 78% positive feedback with strong brand loyalty indicators."
      }
    },
    {
      id: 2,
      front: {
        icon: "🔧",
        title: "Need Attention",
        subtitle: "Where improvement is needed",
        image: "/src/assets/pexels-ketut-subiyanto-4623080.jpg"
      },
      back: {
        content: "Improve logistics efficiency and integrate automated AI monitoring tools. Focus on cybersecurity enhancements and supply chain diversification."
      }
    },
    {
      id: 3,
      front: {
        icon: "📈",
        title: "Industry Comparison",
        subtitle: "How the company stands in its sector",
        image: "/src/assets/pexels-leeloothefirst-5561911.jpg"
      },
      back: {
        content: "Performs 15% above average in innovation; slightly below in cost control. Ranks in top 25% for market share growth but needs improvement in operational efficiency."
      }
    },
    {
      id: 4,
      front: {
        icon: "⏳",
        title: "Predicted Performance",
        subtitle: "Next 6-month trend",
        image: "/src/assets/wave.jpg"
      },
      back: {
        content: "AI predicts stable growth and improved profitability if risks are managed. Expected 12% revenue increase with proper risk mitigation strategies implementation."
      }
    }
  ]

  return (
    <div className="page ai-insights">
      {/* Company Overview Panel */}
      <motion.div className="company-overview-panel" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <div className="company-header">
          <div className="company-logo">
            <img src="/src/assets/Company_logo.png" alt="Company Logo" />
          </div>
          <div className="company-info">
            <h1>{companyName || "Company Name"}</h1>
            <p className="company-tagline">AI-Powered Risk Analysis & Business Intelligence</p>
            <p className="company-description">
              {companyName ? 
                `${companyName} shows strong market presence with moderate financial risk. Recent AI analysis indicates stable growth potential with recommended risk mitigation strategies.` :
                "Enter a company name to get AI-generated insights and risk analysis."
              }
            </p>
          </div>
          <div className="risk-status">
            <div className="status-badge medium">
              <span className="status-icon">🟡</span>
              <span className="status-text">Medium Risk</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* AI Insights Summary Panel */}
      <motion.div className="ai-summary-panel" variants={stagger} initial="hidden" animate="show">
        <div className="summary-grid">
          {/* Left Column - Quick Summary */}
          <motion.div className="summary-column" variants={fadeUp}>
            <div className="summary-card">
              <h3>🤖 AI Summary</h3>
              <p className="ai-summary-text">
                The company's growth remains steady, but supply chain dependency on Asia could increase risk. 
                Investments in automation are recommended to improve operational efficiency. 
                Market sentiment is positive with strong customer satisfaction metrics.
              </p>
              <div className="stability-meter">
                <div className="stability-label">Overall Stability</div>
                <div className="stability-bar">
                  <div className="stability-fill" style={{ width: '75%' }}></div>
                </div>
                <div className="stability-percentage">75% Safe</div>
              </div>
            </div>
          </motion.div>

          {/* Center Column - Risk Overview */}
          <motion.div className="summary-column" variants={fadeUp}>
            <div className="summary-card">
              <h3>📊 Risk Overview</h3>
              <div className="risk-boxes">
                <div className="risk-box medium">
                  <span className="risk-label">Operational Risk</span>
                  <span className="risk-level">Medium</span>
                </div>
                <div className="risk-box high">
                  <span className="risk-label">Market Risk</span>
                  <span className="risk-level">High</span>
                </div>
                <div className="risk-box low">
                  <span className="risk-label">Cybersecurity Risk</span>
                  <span className="risk-level">Low</span>
                </div>
                <div className="risk-box good">
                  <span className="risk-label">Employee Efficiency</span>
                  <span className="risk-level">Good</span>
                </div>
              </div>
              <div className="ai-note">
                "High market risk due to fluctuating demand trends and competitor expansion. 
                Recommend diversification strategy and enhanced market monitoring."
              </div>
            </div>
          </motion.div>

          {/* Right Column - AI Recommendations */}
          <motion.div className="summary-column" variants={fadeUp}>
            <div className="summary-card">
              <h3>💡 AI Suggestions</h3>
              <ul className="recommendations-list">
                <li>Introduce AI-driven quality checks to reduce process delay</li>
                <li>Diversify market to reduce dependency risk</li>
                <li>Increase employee AI training for better performance</li>
                <li>Implement automated risk monitoring systems</li>
                <li>Enhance cybersecurity protocols and training</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* 3D Flip Cards Section */}
      <motion.div className="flip-cards-section" variants={stagger} initial="hidden" animate="show">
        <h2>Interactive AI Insights</h2>
        <div className="flip-cards-grid">
          {flipCards.map((card) => (
            <motion.div 
              key={card.id} 
              className={`flip-card ${flippedCard === card.id ? 'flipped' : ''}`}
              variants={fadeUp}
              onClick={() => setFlippedCard(flippedCard === card.id ? null : card.id)}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="card-image">
                    <img src={card.front.image} alt={card.front.title} />
                  </div>
                  <div className="card-content">
                    <h4>{card.front.title}</h4>
                    <p>{card.front.subtitle}</p>
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className="card-content">
                    <h4>{card.front.title}</h4>
                    <p>{card.back.content}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Footer Section */}
      <motion.div className="ai-footer" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8 }}>
        <div className="footer-actions">
          <button className="btn primary large">Download AI Report (PDF)</button>
          <button className="btn ghost large">Share Insights</button>
        </div>
        <div className="footer-info">
          <p>Generated by AI Insights Engine © 2025 – Created by Youval Kumar</p>
        </div>
      </motion.div>
    </div>
  )
}

export default AISentimentInsights