import React, { useState } from "react";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import { StoriesPage, ReviewsPage, ProgramsPage, MethodPage, AboutPage, ContactPage, SupportPage, QueuePage } from "./pages/InnerPages";

export default function App() {
  const [page, setPage] = useState("home");

  const pages = {
    home: <HomePage setPage={setPage} />,
    stories: <StoriesPage />,
    reviews: <ReviewsPage />,
    programs: <ProgramsPage />,
    method: <MethodPage />,
    about: <AboutPage />,
    contact: <ContactPage />,
    support: <SupportPage />,
    queue: <QueuePage />,
  };

  return (
    <div className="site-shell">
      <NavBar page={page} setPage={setPage} />
      {pages[page]}
    </div>
  );
}
