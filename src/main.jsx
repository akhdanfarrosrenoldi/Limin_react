import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Navbar from "./components/Navbar.jsx";
import Summary from "./layouts/Summary.jsx";
import PurchaseOrders from "./layouts/PurchaseOrders.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="container mx-auto">
      <Navbar />
      <App />
      <Summary />
      <PurchaseOrders />
    </div>
  </StrictMode>
);
