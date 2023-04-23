<script lang="ts">
	import { IconMore } from "$lib/icons";

  export let id: string;
  export let name: string;
  export let avatar: string;
  export let unread: number;
  export let active: boolean;
 
</script>

<a href="/feed/{id}"
  class="rounded px-2 py-1 flex items-center justify-between group/item 
    {active ? "text-accent bg-accent-50" : "hover:bg-ink-50 "}"
>
  <img class="w-5 h-5 m-0.5 mr-2.5 rounded-sm" src={avatar} alt={`Avatar of ${name}`} />
  <span class="grow text-ellipsis overflow-hidden whitespace-nowrap">{name}</span>
  {#if unread !== 0}
    <span class="ml-1 px-1.5 rounded-full text-xs
        {active ? "bg-accent-400 text-white" : "bg-ink-100/75 text-ink-700"}"
    >
      {unread}
    </span>
  {/if}
  <button class="shrink-0 w-0 overflow-hidden {unread !== 0 && "transition-[width] duration-100"}
    group-hover/item:w-5 group-focus-visible/item:w-5 focus-visible:w-5
    group-hover/item:p-0.5 group-focus-visible/item:p-0.5 focus-visible:p-0.5
    group-hover/item:ml-1 group-focus-visible/item:ml-1 focus-visible:ml-1"
  >
    <IconMore />
  </button>
</a>
