<script lang="ts">
  import type { Snippet } from "svelte";

  const {
    header,
    content,
  }: {
    header: Snippet;
    content: Snippet;
  } = $props();
  let showDivider = $state(false);
  let mainContainer = $state<HTMLElement | undefined>();
  const toggleDivider = () => {
    if (!mainContainer) return;
    showDivider = mainContainer.scrollTop >= 10;
  };

  $effect(() => {
    toggleDivider();
  });
</script>

<main bind:this={mainContainer} onscroll={toggleDivider} class="h-screen overflow-y-auto">
  <div class="mx-auto max-w-5xl px-2 sm:px-12">
    <div class="sticky top-0 z-10">
      {@render header()}
      <!-- divider -->
      <div
        class="absolute -bottom-px left-0 right-0 h-px
          {showDivider ? 'bg-aux-line' : 'bg-transparent'}"
      ></div>
    </div>
    {@render content()}
  </div>
</main>
