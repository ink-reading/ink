<script lang="ts">
  import { IconMore } from "$lib/assets/icons";

  let {
    id,
    name,
    unread,
  }: {
    id: string;
    name: string;
    unread: number;
  } = $props();

  // const active = $derived($page.params.id === id);
  const active = false;
  const href = $derived(id === "digest" ? "/digest" : `/list/${id}`);
</script>

<a
  {href}
  class="group/item flex items-center justify-between rounded-lg px-2 py-1.5 font-medium
    active:bg-roam sm:rounded sm:font-normal
    {active ? 'bg-roam-primary text-primary' : 'hover:bg-roam '}"
>
  <div class="mr-2.5 p-0.5"><slot /></div>
  <span class="grow overflow-hidden text-ellipsis whitespace-nowrap">{name}</span>
  {#if unread !== 0}
    <span class="px-1.5 text-base sm:text-xs">
      {unread}
    </span>
  {/if}
  <span
    class="w-0 shrink-0 overflow-hidden text-prose-pale hover:text-prose
    {unread !== 0 && 'transition-[width] duration-75'}
    focus-visible:w-5 focus-visible:p-0.5 group-hover/item:w-5
    group-hover/item:p-0.5 group-focus-visible/item:w-5 group-focus-visible/item:p-0.5"
  >
    <IconMore />
  </span>
</a>
