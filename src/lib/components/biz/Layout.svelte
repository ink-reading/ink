<script lang="ts">
  import { sidebar, sideWidth } from "$lib/stores/layout";
  import { fly } from "svelte/transition";
  import Home from "./Home/Home.svelte";
  import { ChevronsRightIcon } from "lucide-svelte";

  export let listing: any;

  let asideEl: HTMLElement;
  const MIN_SIDE_WIDTH = 240;
  const MAX_SIDE_WIDTH = 640;
  let resizing = false;
  const onResize = (ev: MouseEvent) => {
    if (ev.x <= MIN_SIDE_WIDTH || ev.x >= MAX_SIDE_WIDTH) return;
    $sideWidth = ev.x;
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
  on:mousemove={resizing ? onResize : undefined}
  on:mouseup={resizing ? stopResize : undefined}
/>

<div id="app" class="w-full text-lg text-prose sm:flex sm:text-sm select-none sm:select-auto">
  <!-- sidebar -->
  <aside
    bind:this={asideEl}
    class="hidden shrink-0 overflow-hidden duration-200 sm:block sm:h-screen"
    style:width={`${$sidebar ? $sideWidth : 0}px`}
  >
    <!-- inner wrapper -->
    <div class="" style:width={`${$sideWidth}px`}>
      <Home {listing} />
    </div>
  </aside>

  <!-- sidebar resizer -->
  <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
  <div
    class="transition-all hidden cursor-col-resize select-none border-[0.5px] border-background bg-aux-line duration-200 sm:block
    {$sidebar ? 'basis-[2px]' : 'basis-0'}"
    role="separator"
    on:mousedown={startResize}
  ></div>

  <!-- show sidebar btn -->
  {#if !$sidebar}
    <button
      class="fixed bottom-1.5 left-1.5 hidden p-2 hover:text-primary sm:block"
      in:fly={{ duration: 200, delay: 100, x: -48 }}
      on:click={() => sidebar.open()}
    >
      <ChevronsRightIcon size={20} />
    </button>
  {/if}

  <!-- main content -->
  <main class="sm:h-screen sm:grow sm:overflow-y-auto">
    <div class="mx-auto max-w-7xl">
      <slot />
    </div>
  </main>
</div>
