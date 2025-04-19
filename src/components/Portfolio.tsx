import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import articles from '../assets/jay_articles.json';

const categories = Object.keys(articles);

export default function Portfolio() {
  const [search, setSearch] = useState("");

  const filterBySearch = (items) =>
    items.filter((article) =>
      article.title.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "2rem 1rem" }}>
      {/* Add a link to navigate back to Home at the top */}
      <div style={{ marginBottom: "1.5rem", textAlign: "left" }}>
        <Link
          to="/"
          style={{
            display: "inline-block",
            padding: "0.5rem 1rem",
            backgroundColor: "black",
            color: "white",
            borderRadius: "0.5rem",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          ← Back to Home
        </Link>
      </div>

      <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1.5rem" }}>Article Portfolio</h1>

      <input
        type="text"
        placeholder="Search articles..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "0.5rem 1rem", marginBottom: "2rem", width: "100%", borderRadius: "6px", border: "1px solid #ccc" }}
      />

      {categories.map((category) => {
        const filtered = filterBySearch(articles[category]);
        if (filtered.length === 0) return null;
        return (
          <div key={category} style={{ marginBottom: "2.5rem" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem" }}>{category}</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              {filtered.map((article, index) => (
                <div key={index} style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "8px" }}>
                  <h3 style={{ fontSize: "1.125rem", fontWeight: "bold" }}>{article.title}</h3>
                  <p style={{ fontSize: "0.95rem", color: "#555" }}>{article.excerpt}</p>
                </div>
              ))}
            </div>
          </div>
        );
      })}

      {categories.every((cat) => filterBySearch(articles[cat]).length === 0) && (
        <p style={{ color: "#888" }}>No articles found.</p>
      )}

      {/* Keep the existing link at the bottom */}
      <div style={{ marginTop: "2rem", textAlign: "center" }}>
        <Link
          to="/"
          style={{
            display: "inline-block",
            padding: "0.75rem 1.5rem",
            backgroundColor: "black",
            color: "white",
            borderRadius: "0.5rem",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}