<script lang="ts">
  import { IconMore, IconChevronRight } from "$lib/icons";
  import type { Folder } from "$lib/types/feed";
  import { page } from "$app/stores";
  import { slide } from "svelte/transition";
  import ListEntryFeed from "./ListEntryFeed.svelte";

  export let folder: Folder;

  $: active = $page.params.folderId === folder.id;
  $: open = false;

  const { id, name, unread } = folder;
</script>

<a
  href="/feed/folder/{id}"
  class="rounded px-2 py-1 flex items-center justify-between group/item
    {active ? 'text-ink-primary bg-ink-primary/10' : 'hover:bg-ink-text/10 '}"
>
  <button
    class="p-1 mr-2 rounded-full transition-transform {open ? 'rotate-90' : 'rotate-0'}"
    on:click|preventDefault|stopPropagation={() => (open = !open)}
  >
    <IconChevronRight />
  </button>
  <span class="grow text-ellipsis overflow-hidden whitespace-nowrap">{name}</span>
  {#if unread !== 0}
    <span class="px-1.5 text-xs">
      {unread}
    </span>
  {/if}
  <button
    class="shrink-0 w-0 overflow-hidden {unread !== 0 && 'transition-[width] duration-100'}
    group-hover/item:w-5 group-focus-visible/item:w-5 focus-visible:w-5
    group-hover/item:p-0.5 group-focus-visible/item:p-0.5 focus-visible:p-0.5"
  >
    <IconMore />
  </button>
</a>

{#if open}
  <div class="pl-0 flex flex-col gap-0.5" transition:slide>
    {#each folder.feeds as feed (feed.id)}
      <ListEntryFeed {feed} />
    {/each}
  </div>
{/if}
