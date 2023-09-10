import { writable } from "svelte/store";

function createSidebar() {
  const { subscribe, set, update } = writable(true);

  return {
    subscribe,
    open: () => set(true),
    close: () => set(false),
    toggle: () => update(open => !open),
  };
}

export const sidebar = createSidebar();

export const sideWidth = writable(350);
