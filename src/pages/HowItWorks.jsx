import { Link } from "react-router-dom"
import { useState } from "react"
import { motion } from "framer-motion"

const steps = [
  { 
    id: 1, 
    title: "Input Company Data", 
    description: "Enter your company name and basic information to begin the risk assessment process.",
    icon: "📝",
    image: "/src/assets/pexels-fauxels-3184641.jpg",
    rightImage: "/src/assets/Buss.avif",
    action: true 
  },
  { 
    id: 2, 
    title: "AI Analysis Engine", 
    description: "Our advanced AI algorithms analyze financial data, market trends, and risk factors in real-time.",
    icon: "🤖",
    image: "/src/assets/pexels-ketut-subiyanto-4623080.jpg",
    rightImage: "/src/assets/Build.avif",
    action: false 
  },
  { 
    id: 3, 
    title: "Result Dashboard", 
    description: "View comprehensive risk analysis, insights, and recommendations in an interactive dashboard.",
    icon: "📊",
    image: "/src/assets/pexels-leeloothefirst-5561911.jpg",
    rightImage: "/src/assets/Bussiness.avif",
    action: false 
  },
]

const fadeUp = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }
const stagger = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.2 } } }

const HowItWorks = () => {
  const [flipped, setFlipped] = useState(null)

  return (
    <div className="page how-it-works">
      <motion.div className="page-header" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h2>How It Works</h2>
        <p>Simple, powerful risk analysis in three easy steps</p>
      </motion.div>

      <motion.div className="steps-container" variants={stagger} initial="hidden" animate="show">
        {steps.map((step, index) => (
          <motion.div key={step.id} className="step-wrapper" variants={fadeUp}>
            <div className="step-container">
              <div 
                className={`step-card ${flipped === step.id ? 'flipped' : ''}`}
                onClick={() => setFlipped(flipped === step.id ? null : step.id)}
              >
                <div className="step-card-inner">
                  <div className="step-card-front">
                    <div className="step-number">{step.id}</div>
                    <div className="step-image">
                      <img src={step.image} alt={step.title} />
                    </div>
                    <div className="step-content">
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                      {step.action && (
                        <Link to="/dashboard" className="btn small">Try Sample Input</Link>
                      )}
                    </div>
                    <div className="flip-hint">
                      <div className="rotation-icon">↻</div>
                    </div>
                  </div>
                  <div className="step-card-back">
                    <div className="step-details">
                      <h4>Detailed Process</h4>
                      <div className="process-steps">
                        {step.id === 1 && (
                          <>
                            <div className="process-item">• Enter company name and industry</div>
                            <div className="process-item">• Upload financial documents (optional)</div>
                            <div className="process-item">• Select analysis parameters</div>
                          </>
                        )}
                        {step.id === 2 && (
                          <>
                            <div className="process-item">• Data collection from multiple sources</div>
                            <div className="process-item">• Machine learning risk modeling</div>
                            <div className="process-item">• Real-time market analysis</div>
                          </>
                        )}
                        {step.id === 3 && (
                          <>
                            <div className="process-item">• Interactive risk dashboard</div>
                            <div className="process-item">• Detailed risk breakdown</div>
                            <div className="process-item">• Actionable recommendations</div>
                          </>
                        )}
                      </div>
                      <div className="step-benefits">
                        <strong>Benefits:</strong> {step.id === 1 ? 'Quick setup, no technical knowledge required' : step.id === 2 ? 'Comprehensive analysis using latest AI technology' : 'Clear insights for informed decision making'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right-side image */}
              <div className="step-right-image">
                <img src={step.rightImage} alt={`${step.title} illustration`} />
              </div>
            </div>
            
            {/* Arrow connector */}
            {index < steps.length - 1 && (
              <div className="step-arrow">
                <div className="arrow-line"></div>
                <div className="arrow-head">→</div>
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>

      <motion.div className="flowchart-section" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8 }}>
        <h3>Process Flow</h3>
        <div className="flowchart">
          <div className="flow-item">
            <div className="flow-icon">📝</div>
            <div className="flow-text">Input Data</div>
          </div>
          <div className="flow-arrow">→</div>
          <div className="flow-item">
            <div className="flow-icon">🔍</div>
            <div className="flow-text">Data Analysis</div>
          </div>
          <div className="flow-arrow">→</div>
          <div className="flow-item">
            <div className="flow-icon">🤖</div>
            <div className="flow-text">AI Processing</div>
          </div>
          <div className="flow-arrow">→</div>
          <div className="flow-item">
            <div className="flow-icon">📊</div>
            <div className="flow-text">Risk Assessment</div>
          </div>
          <div className="flow-arrow">→</div>
          <div className="flow-item">
            <div className="flow-icon">📈</div>
            <div className="flow-text">Results & Insights</div>
          </div>
        </div>
      </motion.div>

      <motion.div className="actions" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1 }}>
        <Link to="/dashboard" className="btn primary large">Proceed to Analysis</Link>
        <Link to="/about" className="btn ghost large">Learn More About Us</Link>
      </motion.div>
    </div>
  )
}

export default HowItWorks


