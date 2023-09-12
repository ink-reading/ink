<script lang="ts">
  import { fly, slide } from "svelte/transition";
  import NavIcon from "./NavIcon.svelte";
  import ThemeToggle from "./ThemeToggle.svelte";
  import { sidebar, sideWidth } from "$lib/stores/layout";
  import { IconSettings, IconReadList } from "$lib/icons";

  import { page } from "$app/stores";
  import { navRoots } from "$lib/config/routes";
  import {
    SparklesIcon,
    RssIcon,
    InboxIcon,
    ChevronsLeftIcon,
    ChevronsRightIcon,
    Construction,
    BarChart2Icon,
  } from "lucide-svelte";

  $: isNavRoot = navRoots.has($page.route.id ?? "");

  const MIN_SIDE_WIDTH = 200;
  const MAX_SIDE_WIDTH = 640;

  let resizing = false;
  const onResize = (ev: MouseEvent) => {
    if (ev.x <= MIN_SIDE_WIDTH || ev.x >= MAX_SIDE_WIDTH) return;
    $sideWidth = ev.x;
  };
  const startResize = () => (resizing = true);
  const stopResize = () => (resizing = false);
</script>

<svelte:document
  on:mousemove={resizing ? onResize : undefined}
  on:mouseup={resizing ? stopResize : undefined}
/>

<div class="flex sm:h-screen w-full sm:overflow-y-hidden text-sm text-ink-text bg-ink-bg">
  <!-- sidebar -->
  {#if $sidebar}
    <div
      transition:slide={{ axis: "x", duration: 200 }}
      style:--side-width={$sideWidth + "px"}
      class="{isNavRoot
        ? 'flex'
        : 'hidden'} sm:flex h-full w-full overflow-hidden sm:w-[--side-width] shrink-0"
    >
      <aside class="flex h-full grow flex-col justify-between overflow-y-auto overflow-x-hidden">
        <nav class="hidden justify-between p-2 pb-1 sm:flex">
          <NavIcon to="/"><Construction size={20} /></NavIcon>
          <div class="flex">
            <NavIcon to="/digest"><SparklesIcon size={20} /></NavIcon>
            <NavIcon to="/later"><IconReadList /></NavIcon>
            <NavIcon to="/feed"><RssIcon size={20} /></NavIcon>
            <NavIcon to="/newsletter"><InboxIcon size={20} /></NavIcon>
          </div>
        </nav>
        <section class="flex-grow scroll-aera overflow-x-hidden px-2 py-2.5 sm:py-0">
          <slot name="side" />
        </section>
        <!-- sidebar bottom section -->
        <section class="hidden items-center justify-between px-2 pb-2 sm:flex">
          <div class="flex items-center gap-2 px-2">
            <span class="relative mx-1 flex h-2.5 w-2.5">
              <span
                class="absolute h-full w-full animate-ping rounded-full bg-ink-primary opacity-75"
              ></span>
              <span class="relative h-full w-full scale-75 rounded-full bg-ink-primary"></span>
            </span>
          </div>
          <nav class="flex">
            <NavIcon to="/stats"><BarChart2Icon size={20} /></NavIcon>
            <NavIcon to="/settings"><IconSettings /></NavIcon>
            <ThemeToggle />
            <button class="p-2 hover:text-ink-primary" on:click={() => sidebar.close()}>
              <ChevronsLeftIcon size={20} />
            </button>
          </nav>
        </section>
      </aside>
      <!-- sidebar resizer -->
      <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
      <div
        class="hidden w-1 basis-1 cursor-col-resize select-none border border-ink-bg bg-ink-text/20 sm:block"
        on:mousedown={startResize}
        role="separator"
      ></div>
    </div>
  {/if}

  <!-- mobile nav bar -->
  <section
    class="fixed bottom-0 left-0 right-0 flex items-center justify-around border-t border-ink-text/10 bg-ink-bg py-2 shadow-sm sm:hidden"
  >
    <NavIcon to="/digest"><SparklesIcon size={20} /></NavIcon>
    <NavIcon to="/later"><IconReadList /></NavIcon>
    <NavIcon to="/feed"><RssIcon size={20} /></NavIcon>
    <NavIcon to="/newsletter"><InboxIcon size={20} /></NavIcon>
    <NavIcon to="/settings"><IconSettings /></NavIcon>
  </section>

  <!-- show sidebar btn -->
  {#if !$sidebar}
    <button
      class="fixed hidden sm:block bottom-2 left-2 p-2 hover:text-ink-primary"
      in:fly={{ delay: 100, x: -48 }}
      on:click={() => sidebar.open()}
    >
      <ChevronsRightIcon size={20} />
    </button>
  {/if}

  <main class="{isNavRoot ? 'hidden' : 'block'} sm:block overflow-y-auto grow sm:px-11">
    <slot />
  </main>
</div>
