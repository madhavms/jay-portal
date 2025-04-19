import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Jayakhosh Chidambaran – Author | Columnist | Consultant";
  }, []);

  return (
    <div style={{ minHeight: "100vh", padding: "4rem 1rem", textAlign: "center", backgroundColor: "white" }}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem" }}>
        Jayakhosh Chidambaran
      </h1>
      <p style={{ fontSize: "1.125rem", color: "#666", maxWidth: "600px", margin: "0 auto 1.5rem" }}>
        Management Consultant | Columnist | Researcher | Traveller
      </p>

      <div style={{ color: "#666", maxWidth: "700px", margin: "0 auto 2rem" }}>
        <p style={{ marginBottom: "0.75rem" }}>
          With over 20 years of cross-industry experience, Jayakhosh blends deep expertise in strategy, leadership, and technology with a lifelong passion for writing and reflection.
        </p>
        <p>
          As a columnist and blogger, he shares perspectives on global affairs, economics, philosophy, and culture to inspire thoughtful action and meaningful dialogue.
        </p>
      </div>

      <a
        href="/portfolio"
        style={{
          display: "inline-block",
          padding: "0.75rem 1.5rem",
          backgroundColor: "black",
          color: "white",
          borderRadius: "0.5rem",
          textDecoration: "none",
          fontWeight: "bold",
          marginBottom: "2rem"
        }}
      >
        Explore Articles →
      </a>

      <div style={{ fontSize: "0.875rem", color: "#888", display: "flex", justifyContent: "center", gap: "1rem" }}>
        <a
          href="https://www.linkedin.com/in/jayakhosh-chidambaran-00943175/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "underline" }}
        >
          LinkedIn
        </a>
        <a
          href="https://jaychidambaran.wordpress.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "underline" }}
        >
          Blog
        </a>
        <a
          href="mailto:jaykhosh999@hotmail.com"
          style={{ textDecoration: "underline" }}
        >
          Email
        </a>
      </div>
    </div>
  );
}
