<script lang="ts">
  import { IconMore, IconChevronRight } from "$lib/assets/icons";
  import type { Folder } from "$lib/types/feed";
  // import { page } from "$app/stores";
  import { slide } from "svelte/transition";
  import EntryItem from "./EntryItem.svelte";
  import { ChevronRightIcon } from "lucide-svelte";

  let { folder }: { folder: Folder } = $props();

  // const active = $derived($page.params.folderId === folder.id);
  const active = false;

  let open = $state(true);

  const { id, name, unread } = folder;

  const toggleOpen = (evt: Event) => {
    evt.stopPropagation();
    open = !open;
  };
</script>

<a
  href="/feed/folder/{id}"
  class="font-medium sm:font-normal rounded-lg sm:rounded px-2 py-1.5 flex items-center justify-between group/item
    {active ? 'text-primary bg-roam-primary' : 'hover:bg-roam '}"
>
  <span
    class="p-1 sm:p-0.5 mr-2.5 rounded-full transition-transform {open ? 'rotate-90' : 'rotate-0'}"
    onclick={toggleOpen}
    onkeydown={toggleOpen}
    role="button"
    tabindex={0}
  >
    <ChevronRightIcon size={16} />
  </span>
  <span class="grow text-ellipsis overflow-hidden whitespace-nowrap">{name}</span>
  {#if unread !== 0}
    <span class="px-1.5 text-base sm:text-xs">
      {unread}
    </span>
  {/if}
  <span
    class="shrink-0 w-0 overflow-hidden text-prose-pale hover:text-prose
    {unread !== 0 && 'transition-[width] duration-100'}
    group-hover/item:w-5 group-focus-visible/item:w-5 focus-visible:w-5
    group-hover/item:p-0.5 group-focus-visible/item:p-0.5 focus-visible:p-0.5"
  >
    <IconMore />
  </span>
</a>

{#if open}
  <div class="flex flex-col gap-0.5" transition:slide={{ duration: 150 }}>
    {#each folder.items as item (item.id)}
      <EntryItem {item} />
    {/each}
  </div>
{/if}
