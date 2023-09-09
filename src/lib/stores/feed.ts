import { writable } from "svelte/store";

export type FeedSelected = "today" | "unread" | "starred" | number;

export const selected = writable<FeedSelected>("today");
