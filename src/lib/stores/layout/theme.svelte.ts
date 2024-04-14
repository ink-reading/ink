import { browser } from "$app/environment";
import { K_THEME } from "$lib/config/constants";

let mode = $state<"light" | "dark">("light");

const theme = {
  get mode() {
    return mode;
  },

  toggle: () => {
    mode = mode === "light" ? "dark" : "light";
    if (browser) {
      localStorage.setItem(K_THEME, mode);
      document?.documentElement.classList.toggle("dark");
    }
  },
};

export default theme;
