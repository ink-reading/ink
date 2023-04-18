import { writable } from 'svelte/store';

export type FeedSelectedList = "Today" | "Unread" | "Starred" | number;

export const selected = writable<FeedSelectedList>("Today");
