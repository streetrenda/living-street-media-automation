import React from "react";

const items = [
  ["home", "Home"],
  ["stories", "Original Stories"],
  ["reviews", "Reviewed Stories"],
  ["programs", "Programs"],
  ["method", "Our Method"],
  ["about", "About"],
  ["contact", "Contact"],
  ["queue", "Review Queue"],
];

export default function NavBar({ page, setPage }) {
  return (
    <header className="topbar">
      <div className="shell nav-inner">
        <div className="brand">
          <div className="brand-mark">❤</div>
          <div className="brand-stack">
            <div className="brand-script">Where Life Lives</div>
            <div className="brand-name">LIVING STREET MEDIA</div>
          </div>
        </div>

        <nav className="nav-links">
          {items.map(([key, label]) => (
            <button
              key={key}
              className={page === key ? "nav-link active" : "nav-link"}
              onClick={() => setPage(key)}
            >
              {label}
            </button>
          ))}
          <button className="support-btn" onClick={() => setPage("support")}>
            Support Us
          </button>
        </nav>
      </div>
    </header>
  );
}
