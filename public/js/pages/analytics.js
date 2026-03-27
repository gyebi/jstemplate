import { Navbar } from "../components/navbar.js";
import { EmptyState } from "../utils/helpers.js";

export function AnalyticsPage() {
  return `
    ${Navbar()}

    <div class="container">
      <h2>Analytics</h2>

      ${EmptyState("No analytics data available yet")}
    </div>
  `;
}