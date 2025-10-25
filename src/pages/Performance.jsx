import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Chart as ChartJS, LineElement, PointElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js"
import { Line, Bar } from "react-chartjs-2"

ChartJS.register(LineElement, PointElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend)

// Mock datasets for performance visualization
const lineData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
  datasets: [
    { label: "Predicted", borderColor: "var(--accent)", backgroundColor: "transparent", data: [62, 65, 68, 70, 73, 75, 77, 80], tension: 0.35 },
    { label: "Actual", borderColor: "var(--success-color)", backgroundColor: "transparent", data: [60, 64, 66, 71, 72, 74, 78, 79], tension: 0.35 },
  ],
}

const barData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
  datasets: [
    { label: "Financial Growth %", backgroundColor: "var(--accent)", data: [4, 6, 5, 7, 6, 8, 9, 10] },
  ],
}

const cardItems = [
  { label: "Model Accuracy", value: "94%" },
  { label: "Profit Growth", value: "+12%" },
  { label: "Risk Mitigation", value: "-28%" },
  { label: "Task Efficiency", value: "+31%" },
]

const fadeUp = { hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      labels: { color: 'var(--text)', font: { size: 12 } }
    }
  },
  scales: {
    x: { 
      ticks: { color: 'var(--text)', font: { size: 11 } },
      grid: { color: 'var(--grid-color)' }
    },
    y: { 
      ticks: { color: 'var(--text)', font: { size: 11 } },
      grid: { color: 'var(--grid-color)' }
    }
  },
  elements: {
    bar: {
      borderWidth: 0
    }
  }
}

const Performance = () => {
  return (
    <div className="page performance">
      <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>Performance & KPIs</motion.h2>

      {/* KPI cards */}
      <div className="cards top">
        {cardItems.map((c) => (
          <motion.div key={c.label} className="card" variants={fadeUp} initial="hidden" animate="show">
            <div style={{ opacity: 0.8 }}>{c.label}</div>
            <div style={{ fontSize: 28, fontWeight: 700 }}>{c.value}</div>
          </motion.div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid two">
        <motion.div className="card" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h3>Predicted vs Actual Outcomes</h3>
          <div style={{ height: 260 }}>
            <Line data={lineData} options={chartOptions} />
          </div>
        </motion.div>
        <motion.div id="metrics" className="card" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h3>Monthly Financial Growth</h3>
          <div style={{ height: 260 }}>
            <Bar data={barData} options={chartOptions} />
          </div>
        </motion.div>
      </div>

      {/* Action buttons */}
      <div style={{ display: 'flex', gap: 10, marginTop: 16, flexWrap: 'wrap' }}>
        <Link to="/dashboard" className="btn">Back to Overview</Link>
        <a href="/dashboard#risk" className="btn">Analyze Risk Factors</a>
        <a href="/dashboard#metrics" className="btn primary">View Financial Metrics</a>
      </div>
    </div>
  )
}

export default Performance


