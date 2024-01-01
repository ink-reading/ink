<script lang="ts">
  import { IconMore } from "$lib/assets/icons";
  import { page } from "$app/stores";

  export let id: string;
  export let name: string;
  export let unread: number;

  $: active = $page.params.id === id;
  $: href = id === "digest" ? "/digest" : `/list/${id}`;
</script>

<a
  {href}
  class="group/item flex items-center justify-between rounded-lg px-2 py-1.5 font-medium
    active:bg-ink-text/5 sm:rounded sm:font-normal
    {active ? 'bg-ink-primary/10 text-ink-primary' : 'hover:bg-ink-text/5 '}"
>
  <div class="mr-2.5 p-0.5"><slot /></div>
  <span class="grow overflow-hidden text-ellipsis whitespace-nowrap">{name}</span>
  {#if unread !== 0}
    <span class="px-1.5 text-base sm:text-xs">
      {unread}
    </span>
  {/if}
  <button
    class="w-0 shrink-0 overflow-hidden {unread !== 0 && 'transition-[width] duration-100'}
    focus-visible:w-5 focus-visible:p-0.5 group-hover/item:w-5
    group-hover/item:p-0.5 group-focus-visible/item:w-5 group-focus-visible/item:p-0.5"
  >
    <IconMore />
  </button>
</a>
