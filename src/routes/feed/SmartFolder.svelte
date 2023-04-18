<script lang="ts">
  import { selected, type FeedSelectedList } from "$lib/stores/feed";

  import IconMore from "$lib/icons/more-vertical.svg?component";

  export let name: Exclude<FeedSelectedList, number>;

  $: active = $selected === name;

  const onSelect = () => $selected = name;
 
</script>

<button
  class="rounded p-1 flex items-center justify-between group/item
    {active ? "text-accent bg-accent-50" : "hover:bg-ink-50 "}"
  on:click={onSelect}
  on:keypress={onSelect}
>
  <div class="flex items-center">
    <div class="p-1 mx-1">
      <slot />
    </div>
    <div>
      {name}
    </div>
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
