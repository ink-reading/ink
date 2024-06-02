<script lang="ts">
  import sidebar, { MAX_SIDEBAR_WIDTH, MIN_SIDEBAR_WIDTH } from "$lib/stores/layout/sidebar.svelte";

  let {
    asideEl,
  }: {
    asideEl: HTMLElement;
  } = $props();

  let resizing = $state(false);

  const handleResize = (ev: MouseEvent) => {
    if (ev.x <= MIN_SIDEBAR_WIDTH / 3) {
      asideEl.style.transitionProperty = "width";
      sidebar.setOpen(false);
      stopResize();
      return;
    }
    if (ev.x <= MIN_SIDEBAR_WIDTH || ev.x >= MAX_SIDEBAR_WIDTH) return;
    sidebar.setWidth(ev.x);
  };
  const startResize = () => {
    resizing = true;
    asideEl.style.transitionProperty = "none";
  };
  const stopResize = () => {
    resizing = false;
    asideEl.style.transitionProperty = "width";
  };
</script>

<svelte:document
  onmousemove={resizing ? handleResize : undefined}
  onmouseup={resizing ? stopResize : undefined}
/>

<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<div
  class="relative hidden shrink-0 cursor-col-resize select-none border-x-[1px] border-background bg-aux-line transition-[width] duration-200 sm:block
  {sidebar.open ? 'w-[3px]' : 'w-0'}"
  role="separator"
  onmousedown={startResize}
>
  {#if resizing}
    <div class="fixed bottom-0 left-0 right-0 top-0 z-50 cursor-col-resize"></div>
  {/if}
  <div
    class="pointer-events-none absolute -left-px -right-px bottom-0 top-0 z-50 transition-colors duration-200
    {resizing ? 'bg-primary' : 'bg-transparent'}"
  ></div>
</div>
