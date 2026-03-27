import { navigate } from "../router.js";

export function HomePage() {
  return `
    <div class="container">
      <h1>Welcome to WinfredJSStarter</h1>

      <div class="card">
        <p>Your app factory is ready 🚀</p>
        <button class="btn btn-primary" onclick="goLogin()">Login</button>
      </div>
    </div>
  `;
}

window.goLogin = () => navigate("/login");