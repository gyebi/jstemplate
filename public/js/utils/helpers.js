export function ErrorMessage(message) {
  return `
    <div class="error">
      ⚠️ ${message}
    </div>
  `;
}


export function EmptyState(message) {
  return `
    <div class="empty">
      ${message}
    </div>
  `;
}