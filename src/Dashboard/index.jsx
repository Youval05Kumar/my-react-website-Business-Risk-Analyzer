import { Chart as ChartJS, ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js"
import { Bar } from "react-chartjs-2"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { useTheme } from "../context/ThemeContext.jsx"
import "./Dashboard.css"

ChartJS.register(ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend)

const Dashboard = () => {
  const { hash } = useLocation()
  const { mode } = useTheme()
  const [chartKey, setChartKey] = useState(0)
  const [companyName, setCompanyName] = useState("")

  useEffect(() => {
    if (!hash) return
    const id = hash.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [hash])

  useEffect(() => {
    const storedCompany = localStorage.getItem('selectedCompany')
    if (storedCompany) {
      setCompanyName(storedCompany)
    }
  }, [])

  // Force chart re-render when theme changes
  useEffect(() => {
    setChartKey(prev => prev + 1)
  }, [mode])

  const revenueData = {
    labels: ["Q1", "Q2", "Q3", "Q4"],
    datasets: [
      { 
        label: "Revenue ($M)", 
        backgroundColor: mode === 'dark' ? '#00B4D8' : '#0077B6', 
        data: [120, 150, 180, 210],
        borderRadius: 4,
        borderSkipped: false,
      },
    ],
  }

  const riskData = {
    labels: ["Q1", "Q2", "Q3", "Q4"],
    datasets: [
      { 
        label: "Risk Score", 
        backgroundColor: '#B0E0E6', 
        data: [40, 35, 30, 25],
        borderRadius: 4,
        borderSkipped: false,
      },
    ],
  }

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: { color: mode === 'dark' ? '#E0E1DD' : '#1B263B', font: { size: 12 } }
      }
    },
    scales: {
      x: { 
        ticks: { color: mode === 'dark' ? '#E0E1DD' : '#1B263B', font: { size: 11 } },
        grid: { color: mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)' }
      },
      y: { 
        ticks: { color: mode === 'dark' ? '#E0E1DD' : '#1B263B', font: { size: 11 } },
        grid: { color: mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)' }
      }
    },
    elements: {
      bar: {
        borderWidth: 0
      }
    }
  }

  return (
    <div className="page dashboard">
      {/* Header Section */}
          <div className="dashboard-header">
            <h1>Company Risk Dashboard</h1>
            <p>Real-time analytics and risk assessment for informed decision making</p>
            {companyName && (
              <div className="company-info">
                <span className="company-label">Analyzing:</span>
                <span className="company-name">{companyName}</span>
              </div>
            )}
          </div>

      {/* KPI Cards */}
      <div className="cards top">
        <div id="overview" className="card kpi-card">
          <div className="kpi-icon">⚠️</div>
          <div className="kpi-content">
            <h3>Overall Risk</h3>
            <div className="kpi-value">Medium</div>
            <div className="kpi-trend">↓ 5% from last month</div>
          </div>
        </div>
        <div className="card kpi-card">
          <div className="kpi-icon">💰</div>
          <div className="kpi-content">
            <h3>Financial Stability</h3>
            <div className="kpi-value">Stable</div>
            <div className="kpi-trend">↑ 12% growth</div>
          </div>
        </div>
        <div id="sentiment" className="card kpi-card">
          <div className="kpi-icon">🤖</div>
          <div className="kpi-content">
            <h3>AI Sentiment</h3>
            <div className="kpi-value">Positive</div>
            <div className="kpi-trend">↑ 8% improvement</div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid two">
        <div id="metrics" style={{ height: 0 }} />
        <div id="financial" className="card chart-card">
          <div className="chart-header">
            <h3>Revenue Analysis</h3>
            <div className="chart-subtitle">Quarterly performance metrics</div>
          </div>
          <div className="chart-container">
            <Bar key={`revenue-${chartKey}`} data={revenueData} options={chartOptions} />
          </div>
          <div className="chart-footer">
            <div className="flashcard">
              <strong>💡 Insight:</strong> Revenue shows consistent 15% quarterly growth, indicating strong market position and effective business strategies.
            </div>
          </div>
        </div>
        <div id="risk" className="card chart-card">
          <div className="chart-header">
            <h3>Risk Assessment</h3>
            <div className="chart-subtitle">Risk score trends over time</div>
          </div>
          <div className="chart-container">
            <Bar key={`risk-${chartKey}`} data={riskData} options={chartOptions} />
          </div>
          <div className="chart-footer">
            <div className="flashcard">
              <strong>⚠️ Alert:</strong> Risk scores are declining, showing improved risk management. Continue monitoring market volatility.
            </div>
          </div>
        </div>
      </div>

          {/* Additional Insights */}
          <div className="grid two">
            <div className="card insights-card">
              <div className="card-header">
                <img src="/src/assets/glob.jpg" alt="Global Analysis" className="card-image" />
                <h3>Global Market Analysis</h3>
              </div>
              <div className="flashcard">
                <strong>🌍 Global Overview:</strong> Market conditions show mixed signals across regions. North America leads in stability while emerging markets present higher volatility opportunities.
              </div>
            </div>
            <div className="card insights-card">
              <div className="card-header">
                <img src="/src/assets/team.jpg" alt="Team Performance" className="card-image" />
                <h3>Team Performance</h3>
              </div>
              <div className="flashcard">
                <strong>👥 Team Insights:</strong> Risk analysis team efficiency increased by 25% this quarter. Enhanced AI tools have improved accuracy and reduced manual workload.
              </div>
            </div>
          </div>

          {/* Additional Asset Integration */}
          <div className="grid three">
            <div className="card insights-card">
              <div className="card-header">
                <img src="/src/assets/goldcrd.jpg" alt="Financial Growth" className="card-image" />
                <h3>Financial Growth</h3>
              </div>
              <div className="flashcard">
                <strong>💰 Growth Metrics:</strong> Revenue growth shows 15% increase this quarter with strong cash flow management and improved profit margins.
              </div>
            </div>
            <div className="card insights-card">
              <div className="card-header">
                <img src="/src/assets/Firefly_finance images gold card website risk 27919.jpg" alt="Risk Assessment" className="card-image" />
                <h3>Advanced Risk Assessment</h3>
              </div>
              <div className="flashcard">
                <strong>🔍 Risk Analysis:</strong> Comprehensive risk evaluation using advanced algorithms and real-time market data for accurate predictions.
              </div>
            </div>
            <div className="card insights-card">
              <div className="card-header">
                <img src="/src/assets/istockphoto-869074934-612x612.jpg" alt="Business Strategy" className="card-image" />
                <h3>Business Strategy</h3>
              </div>
              <div className="flashcard">
                <strong>📈 Strategic Insights:</strong> AI-powered recommendations for business optimization and strategic decision making based on market trends.
              </div>
            </div>
          </div>
    </div>
  )
}

export default Dashboard
