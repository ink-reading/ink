<script lang="ts">
  import sidebar from "$lib/stores/layout/sidebar.svelte";
  import Home from "./Home/Home.svelte";

  let { listing } = $props();

  let asideEl: HTMLElement;
  const MIN_SIDE_WIDTH = 240;
  const MAX_SIDE_WIDTH = 640;
  let resizing = $state(false);
  const onResize = (ev: MouseEvent) => {
    if (ev.x <= MIN_SIDE_WIDTH || ev.x >= MAX_SIDE_WIDTH) return;
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
  onmousemove={resizing ? onResize : undefined}
  onmouseup={resizing ? stopResize : undefined}
/>

<div id="app" class="w-full sm:flex">
  <!-- sidebar -->
  <aside
    bind:this={asideEl}
    class="hidden shrink-0 overflow-hidden duration-200 sm:block sm:h-screen"
    style:width={`${sidebar.open ? sidebar.width : 0}px`}
  >
    <!-- inner wrapper -->
    <div class="" style:width={`${sidebar.width}px`}>
      <Home {listing} />
    </div>
  </aside>

  <!-- sidebar resizer -->
  <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
  <div
    class="transition-[flex-basis] hidden cursor-col-resize select-none border-[0.5px] border-background bg-aux-line duration-200 sm:block
    {sidebar.open ? 'basis-[2px]' : 'basis-0'}"
    role="separator"
    onmousedown={startResize}
  ></div>

  <!-- main content -->
  <main class="sm:h-screen sm:grow sm:overflow-y-auto">
    <div class="mx-auto max-w-6xl">
      <slot />
    </div>
  </main>
</div>
