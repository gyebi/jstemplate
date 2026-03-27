import { HomePage } from "./pages/home.js";
import { LoginPage } from "./pages/login.js";
import { DashboardPage } from "./pages/dashboard.js";

const routes = {
  "/": HomePage,
  "/login": LoginPage,
  "/dashboard": DashboardPage
};

export function navigate(path) {
  window.history.pushState({}, path, window.location.origin + path);
  renderRoute(path);
}

export function renderRoute(path) {
  const app = document.getElementById("app");
  const page = routes[path] || HomePage;
  app.innerHTML = page();
}

window.onpopstate = () => renderRoute(window.location.pathname);