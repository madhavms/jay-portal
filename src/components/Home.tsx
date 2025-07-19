import { useEffect } from "react";
import { Link } from "react-router-dom";
import jayImage from '../assets/jay.jpg';

export default function Home() {
  useEffect(() => {
    document.title = "Jayakhosh Chidambaran – Author | Columnist | Consultant";
  }, []);

  return (
    <div style={{ 
      minHeight: "100vh", 
      padding: "2rem 1rem", 
      backgroundColor: "#fafafa",
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      lineHeight: "1.6"
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto"
      }}>
        {/* Hero Section */}
        <div style={{ 
          background: "white",
          borderRadius: "24px",
          padding: "3rem",
          marginBottom: "3rem",
          boxShadow: "0 4px 24px rgba(0, 0, 0, 0.05)",
          border: "1px solid #e5e7eb"
        }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "3rem",
            flexWrap: "wrap",
            justifyContent: "center"
          }}>
            {/* Profile Image */}
            <div style={{
              flexShrink: 0
            }}>
              <div style={{
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                overflow: "hidden",
                border: "4px solid #667eea",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                padding: "4px",
                boxShadow: "0 8px 32px rgba(102, 126, 234, 0.3)"
              }}>
                <img 
                  src={jayImage} 
                  alt="Jayakhosh Chidambaran"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "50%"
                  }}
                />
              </div>
            </div>

            {/* Content */}
            <div style={{
              flex: 1,
              textAlign: "left",
              minWidth: "300px"
            }}>
              <h1 style={{ 
                fontSize: "3rem", 
                fontWeight: "700", 
                margin: "0 0 1rem 0",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                lineHeight: "1.2"
              }}>
                Jayakhosh Chidambaran
              </h1>
              
              <p style={{ 
                fontSize: "1.3rem", 
                color: "#4b5563", 
                margin: "0 0 2rem 0",
                fontWeight: "500"
              }}>
                Management Consultant | Columnist | Researcher | Traveller
              </p>

              <div style={{ 
                color: "#6b7280", 
                fontSize: "1.1rem",
                lineHeight: "1.7",
                marginBottom: "2.5rem"
              }}>
                <p style={{ marginBottom: "1rem" }}>
                  With over 20 years of cross-industry experience, Jayakhosh blends deep expertise in strategy, leadership, and technology with a lifelong passion for writing and reflection.
                </p>
                <p style={{ margin: "0" }}>
                  As a columnist and blogger, he shares perspectives on global affairs, economics, philosophy, and culture to inspire thoughtful action and meaningful dialogue.
                </p>
              </div>

              <Link
                to="/portfolio"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "1rem 2rem",
                  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  color: "white",
                  borderRadius: "12px",
                  textDecoration: "none",
                  fontWeight: "600",
                  fontSize: "1.1rem",
                  transition: "all 0.3s ease",
                  boxShadow: "0 4px 15px rgba(102, 126, 234, 0.25)"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 8px 25px rgba(102, 126, 234, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 15px rgba(102, 126, 234, 0.25)";
                }}
              >
                Explore Articles →
              </Link>
            </div>
          </div>
        </div>

        {/* Stats/Highlights Section */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "2rem",
          marginBottom: "3rem"
        }}>
          <div style={{
            background: "white",
            padding: "2rem",
            borderRadius: "16px",
            textAlign: "center",
            border: "1px solid #e5e7eb",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
            transition: "all 0.3s ease"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-4px)";
            e.currentTarget.style.boxShadow = "0 12px 32px rgba(0, 0, 0, 0.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.05)";
          }}>
            <div style={{
              fontSize: "2.5rem",
              fontWeight: "700",
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              marginBottom: "0.5rem"
            }}>
              20+
            </div>
            <h3 style={{
              fontSize: "1.2rem",
              fontWeight: "600",
              color: "#1f2937",
              marginBottom: "0.5rem"
            }}>
              Years Experience
            </h3>
            <p style={{
              color: "#6b7280",
              margin: "0"
            }}>
              Cross-industry expertise in strategy and leadership
            </p>
          </div>

          <div style={{
            background: "white",
            padding: "2rem",
            borderRadius: "16px",
            textAlign: "center",
            border: "1px solid #e5e7eb",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
            transition: "all 0.3s ease"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-4px)";
            e.currentTarget.style.boxShadow = "0 12px 32px rgba(0, 0, 0, 0.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.05)";
          }}>
            <div style={{
              fontSize: "2.5rem",
              fontWeight: "700",
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              marginBottom: "0.5rem"
            }}>
              100+
            </div>
            <h3 style={{
              fontSize: "1.2rem",
              fontWeight: "600",
              color: "#1f2937",
              marginBottom: "0.5rem"
            }}>
              Published Articles
            </h3>
            <p style={{
              color: "#6b7280",
              margin: "0"
            }}>
              Insights on global affairs and economics
            </p>
          </div>

          <div style={{
            background: "white",
            padding: "2rem",
            borderRadius: "16px",
            textAlign: "center",
            border: "1px solid #e5e7eb",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
            transition: "all 0.3s ease"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-4px)";
            e.currentTarget.style.boxShadow = "0 12px 32px rgba(0, 0, 0, 0.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.05)";
          }}>
            <div style={{
              fontSize: "2.5rem",
              fontWeight: "700",
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              marginBottom: "0.5rem"
            }}>
              9
            </div>
            <h3 style={{
              fontSize: "1.2rem",
              fontWeight: "600",
              color: "#1f2937",
              marginBottom: "0.5rem"
            }}>
              Categories
            </h3>
            <p style={{
              color: "#6b7280",
              margin: "0"
            }}>
              From economics to philosophy and culture
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div style={{
          background: "white",
          borderRadius: "16px",
          padding: "2.5rem",
          textAlign: "center",
          border: "1px solid #e5e7eb",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)"
        }}>
          <h2 style={{
            fontSize: "1.75rem",
            fontWeight: "700",
            color: "#1f2937",
            marginBottom: "1rem"
          }}>
            Connect & Collaborate
          </h2>
          <p style={{
            color: "#6b7280",
            fontSize: "1.1rem",
            marginBottom: "2rem",
            maxWidth: "600px",
            margin: "0 auto 2rem auto"
          }}>
            Interested in consulting, writing collaborations, or thoughtful discussions? Let's connect.
          </p>
          
          <div style={{ 
            display: "flex", 
            justifyContent: "center", 
            gap: "2rem",
            flexWrap: "wrap"
          }}>
            <a
              href="https://www.linkedin.com/in/jayakhosh-chidambaran-00943175/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "0.75rem 1.5rem",
                background: "#0077b5",
                color: "white",
                borderRadius: "10px",
                textDecoration: "none",
                fontWeight: "600",
                transition: "all 0.3s ease",
                fontSize: "0.95rem"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 8px 25px rgba(0, 119, 181, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              LinkedIn
            </a>
            <a
              href="https://jaychidambaran.wordpress.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "0.75rem 1.5rem",
                background: "#21759b",
                color: "white",
                borderRadius: "10px",
                textDecoration: "none",
                fontWeight: "600",
                transition: "all 0.3s ease",
                fontSize: "0.95rem"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 8px 25px rgba(33, 117, 155, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Blog
            </a>
            <a
              href="mailto:jaykhosh999@hotmail.com"
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "0.75rem 1.5rem",
                background: "#ea4335",
                color: "white",
                borderRadius: "10px",
                textDecoration: "none",
                fontWeight: "600",
                transition: "all 0.3s ease",
                fontSize: "0.95rem"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 8px 25px rgba(234, 67, 53, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
