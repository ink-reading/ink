<script lang="ts">
  import { IconMore } from "$lib/assets/icons";
  import { page } from "$app/stores";
  import type { Feed } from "$lib/types/feed";

  export let item: Feed;

  $: active = $page.params.feedId === item.id;

  const { id, name, pic, unread } = item;
</script>

<a
  href="/feed/{id}"
  class="font-medium sm:font-normal rounded-lg sm:rounded px-2 py-1.5 flex items-center justify-between group/item
    {active ? 'text-ink-primary bg-ink-primary/10' : 'hover:bg-ink-text/5 '}"
>
  <img
    class="w-6 h-6 sm:w-5 sm:h-5 mr-2.5 rounded sm:rounded-sm"
    src={pic}
    alt={`Avatar of ${name}`}
  />
  <span class="grow text-ellipsis overflow-hidden whitespace-nowrap">{name}</span>
  {#if unread !== 0}
    <span class="px-1.5 text-base sm:text-xs">
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
