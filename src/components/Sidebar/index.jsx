import { NavLink } from "react-router-dom"
import "./Sidebar.css"

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/news">News</NavLink>
            <NavLink to="/dashboard">Dashboard</NavLink>
            <NavLink to="/visualization">Reports</NavLink>
            <NavLink to="/sentiment">AI Insights</NavLink>
            <NavLink to="/feedback">Feedback</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </aside>
    )
}

export default Sidebar