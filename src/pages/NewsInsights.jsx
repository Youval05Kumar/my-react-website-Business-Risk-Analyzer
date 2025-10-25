import { useMemo, useState } from "react"

const seed = [
  { id: 1, title: "Company X beats earnings expectations", sentiment: "positive", category: "Earnings" },
  { id: 2, title: "Supply chain risks emerging in tech sector", sentiment: "negative", category: "Supply Chain" },
  { id: 3, title: "New market expansion announced by major retailer", sentiment: "neutral", category: "Expansion" },
  { id: 4, title: "Regulatory changes impact financial sector", sentiment: "negative", category: "Regulatory" },
  { id: 5, title: "AI adoption accelerates across industries", sentiment: "positive", category: "Technology" },
]

const NewsInsights = () => {
  const [q, setQ] = useState("")
  const filtered = useMemo(() => seed.filter(a => a.title.toLowerCase().includes(q.toLowerCase())), [q])
  
  return (
    <div className="page news">
      <div className="page-header">
        <h2>News & Market Insights</h2>
        <p>Real-time business sentiment analysis powered by AI</p>
      </div>
      
      <div className="search-section">
        <input className="search wide" placeholder="Search headlines..." value={q} onChange={(e)=>setQ(e.target.value)} />
        <div className="search-stats">Showing {filtered.length} of {seed.length} articles</div>
      </div>
      
      <div className="news-list">
        {filtered.map(a => (
          <div key={a.id} className={`news-card ${a.sentiment}`}>
            <div className="news-content">
              <div className="news-category">{a.category}</div>
              <div className="news-title">{a.title}</div>
              <div className="news-sentiment">
                <span className={`sentiment-badge ${a.sentiment}`}>{a.sentiment}</span>
              </div>
            </div>
            <div className="news-actions">
              <a href="/dashboard#sentiment" target="_blank" rel="noopener noreferrer" className="btn small">View Related Risks</a>
            </div>
          </div>
        ))}
      </div>
      
      <div className="news-footer">
        <div className="flashcard">
          <strong>📈 Market Summary:</strong> Current sentiment analysis shows mixed signals across sectors. Technology and AI-related news remains positive while supply chain concerns persist.
        </div>
      </div>
    </div>
  )
}

export default NewsInsights


