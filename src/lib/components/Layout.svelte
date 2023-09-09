<script lang="ts">
  import { fly, fade } from "svelte/transition";

  import {
    IconBarChart,
    IconBookRead,
    IconChevronsLeft,
    IconChevronsRight,
    IconCompass,
    IconInbox,
    IconPodcast,
    IconRss,
    IconSettings,
  } from "$lib/icons";

  import NavIcon from "$lib/components/NavIcon.svelte";

  import { sidebar, sideWith } from "$lib/stores/layout";

  let sidebarContainer: HTMLDivElement | null = null;

  const onSidebarResize = () => {
    sidebarContainer!.style.transitionProperty = "none";
    document.addEventListener("mousemove", resize);
    document.addEventListener("mouseup", stopResize);
  };

  const resize = (evt: MouseEvent) => {
    if (evt.x < 200 || evt.x > 700) return;
    $sideWith = `${evt.x}px`;
  };

  const stopResize = () => {
    sidebarContainer!.style.transitionProperty = "flex-basis";
    document.removeEventListener("mousemove", resize);
    document.removeEventListener("mouseup", stopResize);
  };
</script>

<div class="w-full h-screen flex text-ink text-sm overflow-y-auto">
  <!-- sidebar -->
  <div
    bind:this={sidebarContainer}
    class="shrink-0 h-full transition-[flex-basis] duration-400 overflow-hidden min-w-0"
    style:flex-basis={$sidebar ? $sideWith : "0px"}
  >
    <aside
      class="h-full flex flex-col justify-between overflow-y-auto group"
      style:min-width={$sideWith}
      style:width={$sideWith}
    >
      <nav class="flex justify-between p-2 pb-1">
        <NavIcon to="/"><IconCompass /></NavIcon>
        <div class="flex">
          <NavIcon to="/read-list"><IconBookRead /></NavIcon>
          <NavIcon to="/feed"><IconRss /></NavIcon>
          <NavIcon to="/newsletter"><IconInbox /></NavIcon>
          <NavIcon to="/podcast"><IconPodcast /></NavIcon>
        </div>
      </nav>
      <section class="flex-grow overflow-y-auto">
        <slot name="side" />
      </section>
      <div class="flex justify-between items-center px-2 pb-2">
        <div class="flex items-center">
          <div class="flex items-center gap-2 px-2 text-xs text-ink/50">
            <span class="relative flex h-2.5 w-2.5 mx-1">
              <span class="animate-ping absolute h-full w-full rounded-full bg-accent opacity-75"
              ></span>
              <span class="relative rounded-full h-full w-full scale-75 bg-accent"></span>
            </span>
            <span class="group-hover:hidden">Fetching</span>
          </div>
          <button class="h-9 p-2 hidden group-hover:block" on:click={() => sidebar.close()}>
            <IconChevronsLeft />
          </button>
        </div>
        <nav class="flex">
          <NavIcon to="/stats"><IconBarChart /></NavIcon>
          <NavIcon to="/settings"><IconSettings /></NavIcon>
        </nav>
      </div>
    </aside>
  </div>

  <!-- sidebar resizer -->
  <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
  <div
    class="{$sidebar ? 'bg-ink-100 cursor-col-resize' : 'bg-white cursor-auto'}
      transition-[background-color] duration-400 w-1 border-x border-white select-none"
    on:mousedown={$sidebar ? onSidebarResize : undefined}
    role="separator"
  ></div>

  <!-- show sidebar btn -->
  {#if !$sidebar}
    <button
      class="p-2 fixed left-2 bottom-2"
      in:fly={{ delay: 300, x: -48 }}
      on:click={() => sidebar.open()}
    >
      <IconChevronsRight />
    </button>
  {/if}

  <main class="flex-grow overflow-y-auto">
    <slot />
  </main>
</div>
