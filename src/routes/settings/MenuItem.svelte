<script lang="ts">
  import { selected, type SettingSelected } from "$lib/stores/settings";

  export let id: SettingSelected;
  export let name: string;

  $: active = $selected === id;

  const onSelect = () => $selected = id;

</script>

<div
  class="rounded p-1 flex items-center cursor-pointer
    {active ? "text-accent bg-accent-50" : "hover:bg-ink-50 "}"
  on:click={onSelect}
  on:keypress={onSelect}
>
  <div class="p-1 mx-1"><slot /></div>
  <span>{name}</span>
</div>
