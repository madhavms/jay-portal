import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import articles from '../assets/jay_articles.json';

// Define the type for an article
type Article = {
  title: string;
  excerpt?: string;
  link?: string;
};

// Define the type for the articles object
type ArticlesByCategory = {
  [category: string]: Article[];
};

const categories = Object.keys(articles as ArticlesByCategory);

export default function Portfolio() {
  const [search, setSearch] = useState<string>("");

  const filterBySearch = (items: Article[]): Article[] =>
    items.filter((article) =>
      article.title.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div style={{ 
      maxWidth: "1200px", 
      margin: "0 auto", 
      padding: "2rem 1rem",
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      lineHeight: "1.6"
    }}>
      {/* Header with back button */}
      <div style={{ 
        marginBottom: "3rem", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "space-between",
        borderBottom: "1px solid #e5e7eb",
        paddingBottom: "2rem"
      }}>
        <div>
          <h1 style={{ 
            fontSize: "2.5rem", 
            fontWeight: "700", 
            margin: "0",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text"
          }}>
            Article Portfolio
          </h1>
          <p style={{ 
            margin: "0.5rem 0 0 0", 
            color: "#6b7280", 
            fontSize: "1.1rem" 
          }}>
            Explore insightful articles across various topics
          </p>
        </div>
        <Link
          to="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "0.75rem 1.5rem",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            color: "white",
            borderRadius: "12px",
            textDecoration: "none",
            fontWeight: "600",
            fontSize: "0.95rem",
            transition: "all 0.3s ease",
            boxShadow: "0 4px 15px rgba(102, 126, 234, 0.25)"
          }}
        >
          ← Back to Home
        </Link>
      </div>

      {/* Search Bar */}
      <div style={{ marginBottom: "3rem" }}>
        <input
          type="text"
          placeholder="Search articles..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ 
            padding: "1rem 1.5rem", 
            fontSize: "1rem",
            width: "100%", 
            borderRadius: "12px", 
            border: "2px solid #e5e7eb",
            outline: "none",
            transition: "all 0.3s ease",
            background: "#fafafa"
          }}
          onFocus={(e) => {
            e.target.style.borderColor = "#667eea";
            e.target.style.background = "white";
            e.target.style.boxShadow = "0 0 0 3px rgba(102, 126, 234, 0.1)";
          }}
          onBlur={(e) => {
            e.target.style.borderColor = "#e5e7eb";
            e.target.style.background = "#fafafa";
            e.target.style.boxShadow = "none";
          }}
        />
      </div>

      {categories.map((category) => {
        const filtered = filterBySearch((articles as ArticlesByCategory)[category]);
        if (filtered.length === 0) return null;
        return (
          <div key={category} style={{ marginBottom: "3rem" }}>
            <h2 style={{ 
              fontSize: "1.75rem", 
              fontWeight: "700", 
              marginBottom: "1.5rem",
              color: "#1f2937",
              borderLeft: "4px solid #667eea",
              paddingLeft: "1rem"
            }}>
              {category}
            </h2>
            <div style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", 
              gap: "1.5rem" 
            }}>
              {filtered.map((article: Article, index: number) => (
                <div 
                  key={index} 
                  style={{ 
                    border: "1px solid #e5e7eb", 
                    padding: "1.5rem", 
                    borderRadius: "16px",
                    background: "white",
                    transition: "all 0.3s ease",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow = "0 12px 32px rgba(0, 0, 0, 0.1)";
                    e.currentTarget.style.borderColor = "#667eea";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.05)";
                    e.currentTarget.style.borderColor = "#e5e7eb";
                  }}
                >
                  {article.link ? (
                    <a 
                      href={article.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{ 
                        textDecoration: "none", 
                        color: "inherit",
                        display: "block",
                        height: "100%"
                      }}
                    >
                      <h3 style={{ 
                        fontSize: "1.2rem", 
                        fontWeight: "600",
                        marginBottom: "0.75rem",
                        color: "#1f2937",
                        lineHeight: "1.4"
                      }}>
                        {article.title}
                        <span style={{
                          marginLeft: "0.5rem",
                          fontSize: "0.9rem",
                          color: "#667eea",
                          fontWeight: "normal"
                        }}>
                          ↗
                        </span>
                      </h3>
                      <div style={{
                        display: "inline-flex",
                        alignItems: "center",
                        padding: "0.5rem 1rem",
                        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                        color: "white",
                        borderRadius: "8px",
                        fontSize: "0.85rem",
                        fontWeight: "600",
                        textTransform: "uppercase",
                        letterSpacing: "0.5px"
                      }}>
                        Read Article
                      </div>
                    </a>
                  ) : (
                    <>
                      <h3 style={{ 
                        fontSize: "1.2rem", 
                        fontWeight: "600",
                        marginBottom: "0.75rem",
                        color: "#1f2937",
                        lineHeight: "1.4"
                      }}>
                        {article.title}
                      </h3>
                      <p style={{ 
                        fontSize: "0.95rem", 
                        color: "#6b7280",
                        lineHeight: "1.6",
                        margin: "0"
                      }}>
                        {article.excerpt}
                      </p>
                      <div style={{
                        marginTop: "1rem",
                        display: "inline-flex",
                        alignItems: "center",
                        padding: "0.5rem 1rem",
                        background: "#f3f4f6",
                        color: "#6b7280",
                        borderRadius: "8px",
                        fontSize: "0.85rem",
                        fontWeight: "600",
                        textTransform: "uppercase",
                        letterSpacing: "0.5px"
                      }}>
                        Coming Soon
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      })}

      {categories.every((cat) => filterBySearch((articles as ArticlesByCategory)[cat]).length === 0) && (
        <div style={{ 
          textAlign: "center", 
          padding: "3rem",
          background: "#f9fafb",
          borderRadius: "16px",
          border: "1px solid #e5e7eb"
        }}>
          <p style={{ 
            color: "#6b7280", 
            fontSize: "1.1rem",
            margin: "0"
          }}>
            No articles found matching your search.
          </p>
        </div>
      )}

      {/* Footer with back button */}
      <div style={{ 
        marginTop: "4rem", 
        textAlign: "center",
        borderTop: "1px solid #e5e7eb",
        paddingTop: "2rem"
      }}>
        <Link
          to="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "1rem 2rem",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            color: "white",
            borderRadius: "12px",
            textDecoration: "none",
            fontWeight: "600",
            fontSize: "1rem",
            transition: "all 0.3s ease",
            boxShadow: "0 4px 15px rgba(102, 126, 234, 0.25)"
          }}
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}