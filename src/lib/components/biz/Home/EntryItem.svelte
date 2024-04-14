<script lang="ts">
  import { IconMore } from "$lib/assets/icons";
  import type { Feed } from "$lib/types/feed";
  import { randomSentence } from "$lib/utils/mock";

  let { item }: { item: Feed } = $props();

  // const active = $derived($page.params.feedId === item.id);
  const active = false;

  const { id, name, pic, unread } = item;
</script>

<a
  href="/feed/{id}"
  class="font-medium sm:font-normal rounded-lg sm:rounded px-2 py-1.5 flex items-center justify-between group/item
    {active ? 'text-primary bg-roam-primary' : 'hover:bg-roam '}"
>
  <img
    class="w-6 h-6 sm:w-5 sm:h-5 mr-2.5 rounded sm:rounded-sm"
    src={pic}
    alt={`Avatar of ${name}`}
  />
  <span class="grow text-ellipsis overflow-hidden whitespace-nowrap capitalize"
    >{randomSentence([1, 3])}</span
  >
  <span
    class="shrink-0 w-0 overflow-hidden text-prose-pale hover:text-prose
    {unread !== 0 && 'transition-[width] duration-100'}
    group-hover/item:w-5 group-focus-visible/item:w-5 focus-visible:w-5
    group-hover/item:p-0.5 group-focus-visible/item:p-0.5 focus-visible:p-0.5"
  >
    <IconMore />
  </span>
  {#if unread !== 0}
    <span class="px-1.5 text-base sm:text-xs">
      {unread}
    </span>
  {/if}
</a>
