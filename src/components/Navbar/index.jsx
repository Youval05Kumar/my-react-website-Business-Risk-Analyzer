import { Link, NavLink } from "react-router-dom"
import { useTheme } from "../../context/ThemeContext.jsx"

const Navbar = () => {
  const { mode, toggle } = useTheme()

  return (
    <header className="navbar">
      <div className="brand">
        <div className="brand-logo">
          <img src="/src/assets/Company_logo.png" alt="Company Logo" />
        </div>
        <Link to="/">Company Risk Analyzer</Link>
      </div>
      <nav className="nav-links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/how-it-works">How It Works</NavLink>
        <NavLink to="/news">News</NavLink>
        <NavLink to="/visualization">Reports</NavLink>
        <NavLink to="/sentiment">AI Insights</NavLink>
        <NavLink to="/feedback">Feedback</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
      <div className="actions">
        <input aria-label="Search" className="search" placeholder="Search" />
        <button className="btn" onClick={toggle}>{mode === "dark" ? "Light" : "Dark"}</button>
      </div>
    </header>
  )
}

export default Navbar


