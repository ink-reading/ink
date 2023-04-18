<script lang="ts">
	import { IconMore } from "$lib/icons";
  import { selected, type FeedSelected } from "$lib/stores/feed";

  export let id: Exclude<FeedSelected, number>;
  export let name: string;

  $: active = $selected === id;

  const onSelect = () => $selected = id;
 
</script>

<button
  class="rounded p-1 flex items-center justify-between group/item
    {active ? "text-accent bg-accent-50" : "hover:bg-ink-50 "}"
  on:click={onSelect}
  on:keypress={onSelect}
>
  <div class="flex items-center">
    <div class="p-1 mx-1"><slot /></div>
    <span>{name}</span>
  </div>
  <div class="flex items-center">
    <span
      class="px-1.5 mx-1.5 rounded-full text-xs
        {active ? "bg-accent-400 text-white" : "bg-ink-100/75 text-ink-700"}"
    >
      18
    </span>
    <button class="w-0 overflow-hidden group-hover/item:w-auto group-focus-visible/item:w-auto focus-visible:w-auto">
      <IconMore />
    </button>
  </div>
  
</button>
