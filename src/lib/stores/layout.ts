import { writable } from "svelte/store";

export const sidebar = (() => {
  const { subscribe, set, update } = writable(true);

  return {
    subscribe,
    open: () => set(true),
    close: () => set(false),
    toggle: () => update(open => !open),
  };
})();

export const sideWidth = writable(350);

export const theme = (() => {
  const { subscribe, update } = writable<"light" | "dark">("light");
  return {
    subscribe,
    toggle: () => update(theme => (theme === "light" ? "dark" : "light")),
  };
})();
