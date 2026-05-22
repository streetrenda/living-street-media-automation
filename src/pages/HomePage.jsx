import React from "react";
import homepageImage from "../assets/approved-homepage.png";

function Hotspot({ label, left, top, width, height, onClick }) {
  return (
    <button
      aria-label={label}
      title={label}
      className="hotspot"
      style={{ left, top, width, height }}
      onClick={onClick}
    />
  );
}

export default function HomePage({ setPage }) {
  return (
    <main className="homepage-wrap">
      <div className="homepage-frame">
        <img src={homepageImage} alt="" className="homepage-image" />
        <div className="hotspots" aria-hidden="false">
          {/* hero buttons */}
          <Hotspot label="Read the Stories" left="17.3%" top="50.8%" width="13.0%" height="5.8%" onClick={() => setPage("stories")} />
          <Hotspot label="Our Method" left="31.0%" top="50.8%" width="11.0%" height="5.8%" onClick={() => setPage("method")} />

          {/* bottom cards */}
          <Hotspot label="Original Stories section" left="9.5%" top="73.6%" width="25.2%" height="17.2%" onClick={() => setPage("stories")} />
          <Hotspot label="Reviewed Stories section" left="37.3%" top="73.6%" width="25.2%" height="17.2%" onClick={() => setPage("reviews")} />
          <Hotspot label="Programs section" left="65.1%" top="73.6%" width="25.2%" height="17.2%" onClick={() => setPage("programs")} />

          {/* bottom join the conversation */}
          <Hotspot label="Join the Conversation" left="78.8%" top="92.2%" width="15.0%" height="5.0%" onClick={() => setPage("contact")} />
        </div>
      </div>
    </main>
  );
}
