import { Navbar } from "../components/navbar.js";
import { addRecord, getRecords } from "../firebase/firestore.js";
import { EmptyState } from "../utils/helpers.js";
import { Loader } from "../components/loader.js";

export function DashboardPage() {
  return `
    ${Navbar()}

    <div class="container">
      <h2>Dashboard</h2>

      <input id="recordInput" class="input" placeholder="Enter data" />
      <button class="btn btn-primary" onclick="handleAdd()">Add Record</button>

      <div id="recordsContainer">
        ${Loader()}
      </div>
    </div>
  `;
}

// Add data
window.handleAdd = async () => {
  const value = document.getElementById("recordInput").value;

  if (!value) return alert("Enter something");

  await addRecord({
    value,
    createdAt: new Date().toISOString()
  });

  loadRecords();
};

// Load data
window.loadRecords = async () => {
  const container = document.getElementById("recordsContainer");

  container.innerHTML = Loader();

  try {
    const records = await getRecords();

    if (records.length === 0) {
      container.innerHTML = EmptyState("No records yet");
      return;
    }

    container.innerHTML = records.map(r => `
      <div class="card">
        <p>${r.value}</p>
        <small>${r.createdAt}</small>
      </div>
    `).join("");

  } catch (err) {
    container.innerHTML = `<div class="error">${err.message}</div>`;
  }
};