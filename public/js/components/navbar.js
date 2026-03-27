import { navigate } from "../router.js";
import { state } from "../state.js";

export function Navbar() {
  return `
    <div class="navbar">
      <h2 class="logo">WJS</h2>

      <div class="nav-links">
        <button onclick="goHome()">Home</button>
        <button onclick="goDashboard()">Dashboard</button>
        <button onclick="goAnalytics()">Analytics</button>
        <button onclick="goSettings()">Settings</button>
      </div>

      <div>
        ${state.isAuthenticated ? `<button onclick="handleLogout()">Logout</button>` : ""}
      </div>
    </div>
  `;
}

// Navigation handlers
window.goHome = () => navigate("/");
window.goDashboard = () => navigate("/dashboard");
window.goAnalytics = () => navigate("/analytics");
window.goSettings = () => navigate("/settings");