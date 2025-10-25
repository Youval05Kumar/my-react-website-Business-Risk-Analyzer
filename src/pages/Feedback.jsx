import { Link } from "react-router-dom"
import { useState } from "react"

const Feedback = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const submit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return alert("Please fill all fields")
    alert("Thank you for your feedback!")
    setForm({ name: "", email: "", message: "" })
  }
  return (
    <div className="page feedback">
      <h2>Feedback & Testimonials</h2>
      <form onSubmit={submit} className="form">
        <input placeholder="Name" value={form.name} onChange={(e)=>setForm({ ...form, name: e.target.value })} />
        <input placeholder="Email" value={form.email} onChange={(e)=>setForm({ ...form, email: e.target.value })} />
        <textarea placeholder="Message" value={form.message} onChange={(e)=>setForm({ ...form, message: e.target.value })} />
        <button className="btn primary" type="submit">Submit</button>
      </form>
      <Link to="/contact" className="btn">Contact Us</Link>
    </div>
  )
}

export default Feedback


