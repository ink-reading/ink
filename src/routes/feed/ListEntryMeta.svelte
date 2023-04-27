<script lang="ts">
	import { IconMore } from "$lib/icons";
  import { page } from "$app/stores";
	import type { IconComponent } from "$lib/types";

  export let id: string;
  export let name: string;
  export let icon: IconComponent;
  export let unread: number;

  $: active = $page.params.feedID === id;
  
  const Icon = icon;

</script>

<a href="/feed/{id}"
  class="rounded px-2 py-1 flex items-center justify-between group/item 
    {active ? "text-accent bg-accent-50" : "hover:bg-ink-50 "}"
>
  <div class="p-1 mr-2"><Icon /></div>
  <span class="grow text-ellipsis overflow-hidden whitespace-nowrap">{name}</span>
  {#if unread !== 0}
    <span class="px-1.5 text-xs">
      {unread}
    </span>
  {/if}
  <button class="shrink-0 w-0 overflow-hidden {unread !== 0 && "transition-[width] duration-100"}
    group-hover/item:w-5 group-focus-visible/item:w-5 focus-visible:w-5
    group-hover/item:p-0.5 group-focus-visible/item:p-0.5 focus-visible:p-0.5"
  >
    <IconMore />
  </button>
</a>
