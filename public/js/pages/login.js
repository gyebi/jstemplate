import { login } from "../firebase/auth.js";

export function LoginPage() {
  return `
    <div class="container">
      <h2>Login</h2>

      <input id="email" class="input" placeholder="Email" />
      <input id="password" class="input" type="password" placeholder="Password"/>

      <button class="btn btn-primary" onclick="handleLogin()">Login</button>
    </div>
  `;
}

window.handleLogin = async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    await login(email, password);
  } catch (err) {
    alert(err.message);
  }
};