import { renderRoute } from "./router.js";
import { observeAuth } from "./firebase/auth.js";
import { state } from "./state.js";

document.addEventListener("DOMContentLoaded", () => {

  observeAuth((user) => {
    if (user) {
      state.user = user;
      state.isAuthenticated = true;
      renderRoute("/dashboard");

      // delay to ensure DOM loads
      setTimeout(() => {
        if (window.loadRecords) {
          window.loadRecords();
        }
      }, 300);

    } else {
      state.user = null;
      state.isAuthenticated = false;
      renderRoute("/login");
    }
  });

});