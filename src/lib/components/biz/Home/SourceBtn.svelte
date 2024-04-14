<script lang="ts">
  import type { Snippet } from "svelte";

  let {
    children,
  }: {
    children: Snippet;
  } = $props();
</script>

<div
  class="flex grow justify-center rounded sm:rounded bg-roam px-2.5 py-2 sm:py-1.5 hover:bg-roam-accent"
>
  <div class="p-0.5">
    {@render children()}
  </div>
</div>
