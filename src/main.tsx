import React from "react";
import App from "./App.tsx";
import "./assets/css/index.css";
import { createRoot } from "react-dom/client";

const div = document.getElementById("agencyreviews360-widgets")!;
const domain = "http://localhost:8000/api";

createRoot(div).render(
  <React.StrictMode>
    <App
      domain={domain}
      campaignId={parseInt(div.dataset.campaignid ?? "1")}
      isDarkMode={div.dataset.isdarkmode === "true"}
      canLeaveReview={div.dataset.canleavereview === "true"}
      widget={div.dataset.widget ?? "Carousel"}
    />
  </React.StrictMode>
);
