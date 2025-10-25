import { motion } from "framer-motion"
import { PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, ResponsiveContainer } from "recharts"

// Mock data for visualization
const riskDistributionData = [
  { name: "High Risk", value: 15, color: "#ff6b6b" },
  { name: "Medium Risk", value: 35, color: "#ffd43b" },
  { name: "Low Risk", value: 50, color: "#51cf66" }
]

const trendData = [
  { month: "Jan", riskScore: 65 },
  { month: "Feb", riskScore: 62 },
  { month: "Mar", riskScore: 58 },
  { month: "Apr", riskScore: 55 },
  { month: "May", riskScore: 52 },
  { month: "Jun", riskScore: 48 },
  { month: "Jul", riskScore: 45 },
  { month: "Aug", riskScore: 42 }
]

const segmentationData = [
  { category: "18-25", low: 20, medium: 15, high: 5 },
  { category: "26-35", low: 30, medium: 25, high: 10 },
  { category: "36-45", low: 25, medium: 20, high: 8 },
  { category: "46-55", low: 15, medium: 12, high: 6 },
  { category: "55+", low: 10, medium: 8, high: 4 }
]

const riskFactorsData = [
  { factor: "Late Payments", count: 45, percentage: 35 },
  { factor: "Low Credit Score", count: 38, percentage: 30 },
  { factor: "High Transaction Volume", count: 25, percentage: 20 },
  { factor: "Frequent Address Changes", count: 15, percentage: 12 },
  { factor: "Unusual Spending Patterns", count: 8, percentage: 6 }
]

const fadeUp = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }
const stagger = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } }

const VisualizationReports = () => {
  return (
    <div className="page visualization">
      <motion.div className="page-header" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h2>Visualization & Reports</h2>
        <p>Comprehensive risk analysis using real-world banking and fintech data patterns</p>
      </motion.div>

      <motion.div className="panels-grid" variants={stagger} initial="hidden" animate="show">
        {/* Risk Overview Panel */}
        <motion.div className="panel-card" variants={fadeUp}>
          <div className="panel-header">
            <h3>Risk Overview</h3>
            <p>Customer risk distribution based on banking standards</p>
          </div>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={riskDistributionData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={120}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {riskDistributionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value}%`, 'Customers']} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="panel-metrics">
            <div className="metric">
              <span className="metric-value">15%</span>
              <span className="metric-label">High Risk</span>
            </div>
            <div className="metric">
              <span className="metric-value">35%</span>
              <span className="metric-label">Medium Risk</span>
            </div>
            <div className="metric">
              <span className="metric-value">50%</span>
              <span className="metric-label">Low Risk</span>
            </div>
          </div>
        </motion.div>

        {/* Trend Analysis Panel */}
        <motion.div className="panel-card" variants={fadeUp}>
          <div className="panel-header">
            <h3>Risk Trend Analysis</h3>
            <p>Monthly risk score trends (PayPal-style fraud tracking)</p>
          </div>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--grid-color)" />
                <XAxis dataKey="month" stroke="var(--text)" />
                <YAxis stroke="var(--text)" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'var(--card)', 
                    border: '1px solid var(--accent)',
                    borderRadius: '8px',
                    color: 'var(--text)'
                  }} 
                />
                <Line 
                  type="monotone" 
                  dataKey="riskScore" 
                  stroke="var(--accent)" 
                  strokeWidth={3}
                  dot={{ fill: 'var(--accent)', strokeWidth: 2, r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="trend-indicator">
            <span className="trend-arrow">↓</span>
            <span className="trend-text">Risk decreasing by 23% over 8 months</span>
          </div>
        </motion.div>

        {/* Customer Segmentation Panel */}
        <motion.div className="panel-card wide" variants={fadeUp}>
          <div className="panel-header">
            <h3>Customer Segmentation</h3>
            <p>Risk distribution by age groups (American Express-style analysis)</p>
          </div>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={segmentationData}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--grid-color)" />
                <XAxis dataKey="category" stroke="var(--text)" />
                <YAxis stroke="var(--text)" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'var(--card)', 
                    border: '1px solid var(--accent)',
                    borderRadius: '8px',
                    color: 'var(--text)'
                  }} 
                />
                <Legend />
                <Bar dataKey="low" stackId="a" fill="#51cf66" name="Low Risk" />
                <Bar dataKey="medium" stackId="a" fill="#ffd43b" name="Medium Risk" />
                <Bar dataKey="high" stackId="a" fill="#ff6b6b" name="High Risk" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Top Risk Factors Panel */}
        <motion.div className="panel-card wide" variants={fadeUp}>
          <div className="panel-header">
            <h3>Top Risk Factors</h3>
            <p>Most common causes of customer risk (Citi Bank-style monitoring)</p>
          </div>
          <div className="risk-factors-list">
            {riskFactorsData.map((factor, index) => (
              <div key={factor.factor} className="risk-factor-item">
                <div className="factor-info">
                  <span className="factor-name">{factor.factor}</span>
                  <span className="factor-count">{factor.count} cases</span>
                </div>
                <div className="factor-bar">
                  <div 
                    className="factor-progress" 
                    style={{ 
                      width: `${factor.percentage}%`,
                      backgroundColor: index < 2 ? '#ff6b6b' : index < 3 ? '#ffd43b' : '#51cf66'
                    }}
                  ></div>
                </div>
                <span className="factor-percentage">{factor.percentage}%</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Report Download Panel */}
        <motion.div className="panel-card" variants={fadeUp}>
          <div className="panel-header">
            <h3>Report Download</h3>
            <p>Export comprehensive risk analysis</p>
          </div>
          <div className="download-options">
            <div className="download-item">
              <div className="download-icon">📊</div>
              <div className="download-info">
                <h4>Full Risk Report</h4>
                <p>Complete analysis with all metrics</p>
              </div>
              <button className="btn primary">Download PDF</button>
            </div>
            <div className="download-item">
              <div className="download-icon">📈</div>
              <div className="download-info">
                <h4>Executive Summary</h4>
                <p>High-level overview for management</p>
              </div>
              <button className="btn ghost">Download</button>
            </div>
            <div className="download-item">
              <div className="download-icon">📋</div>
              <div className="download-info">
                <h4>Raw Data</h4>
                <p>CSV export for further analysis</p>
              </div>
              <button className="btn ghost">Export</button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default VisualizationReports




