import { writable } from "svelte/store";

export type SettingSelected = 
  | "account"
  | "appearance"
  | "read-list"
  | "feed"
  | "newsletter"
  | "podcast"
  | "stats"
  | "about"
  ;

export const selected = writable<SettingSelected>("account");
