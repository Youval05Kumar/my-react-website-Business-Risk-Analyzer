import { Link } from "react-router-dom"
import { useState } from "react"

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const submit = (e) => {
    e.preventDefault()
    alert("Message Sent Successfully")
    setForm({ name: "", email: "", message: "" })
  }
  return (
    <div className="page contact">
      <h2>Contact Us</h2>
      <form onSubmit={submit} className="form">
        <input placeholder="Name" value={form.name} onChange={(e)=>setForm({ ...form, name: e.target.value })} />
        <input placeholder="Email" value={form.email} onChange={(e)=>setForm({ ...form, email: e.target.value })} />
        <textarea placeholder="Message" value={form.message} onChange={(e)=>setForm({ ...form, message: e.target.value })} />
        <button className="btn primary" type="submit">Send Message</button>
      </form>
      <Link to="/" className="btn">Back to Home</Link>
    </div>
  )
}

export default Contact


