import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom"
import { ThemeProvider } from "./context/ThemeContext.jsx"
import Navbar from "./components/Navbar/index.jsx"
import Sidebar from "./components/Sidebar/index.jsx"
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Services from "./pages/Services.jsx"
import HowItWorks from "./pages/HowItWorks.jsx"
import NewsInsights from "./pages/NewsInsights.jsx"
import Performance from "./pages/Performance.jsx"
import VisualizationReports from "./pages/VisualizationReports.jsx"
import AISentimentInsights from "./pages/AISentimentInsights.jsx"
import Feedback from "./pages/Feedback.jsx"
import Contact from "./pages/Contact.jsx"
import Dashboard from "./Dashboard/index.jsx"

const Layout = () => (
  <div className="layout">
    <Navbar />
    <div className="body">
      <Sidebar />
      <main className="content">
        <Outlet />
      </main>
    </div>
  </div>
)

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="how-it-works" element={<HowItWorks />} />
            <Route path="news" element={<NewsInsights />} />
            <Route path="performance" element={<Performance />} />
            <Route path="visualization" element={<VisualizationReports />} />
            <Route path="sentiment" element={<AISentimentInsights />} />
            <Route path="feedback" element={<Feedback />} />
            <Route path="contact" element={<Contact />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
