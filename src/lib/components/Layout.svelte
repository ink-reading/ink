<script lang="ts">
  import { fly, fade } from "svelte/transition";
  
	import { IconBarChart, IconBookRead, IconChevronsLeft, IconChevronsright, IconCompass, IconInbox, IconPodcast, IconRss, IconSettings } from "$lib/icons";
  
  import NavIcon from "$lib/components/NavIcon.svelte";
  
  import { sidebar, sideWith } from "$lib/stores/layout";

  let sidebarContainer: HTMLDivElement | null = null;
  
  const onSidebarResize = () => {
    sidebarContainer!.style.transitionProperty = 'none';
    document.addEventListener("mousemove", resize);
    document.addEventListener("mouseup", stopResize);
  }

  const resize = (evt: MouseEvent) => {
    if (evt.x < 200 || evt.x > 700) return;
    $sideWith = `${evt.x}px`;
  }

  const stopResize = () => {
    sidebarContainer!.style.transitionProperty = "flex-basis";
    document.removeEventListener("mousemove", resize);
    document.removeEventListener("mouseup", stopResize);
  }

</script>

<div class="w-full h-screen flex text-ink text-sm overflow-y-auto">

  <!-- sidebar -->
  <div
    bind:this={sidebarContainer}
    class="h-full transition-[flex-basis] duration-400 overflow-hidden min-w-0"
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
      <nav class="flex justify-between px-2 pb-2">
        <div class="flex">
          <NavIcon to="/settings"><IconSettings /></NavIcon>
          <NavIcon to="/stats"><IconBarChart /></NavIcon>  
        </div>
        <div class="h-9 invisible group-hover:visible p-2">
          <button on:click={() => sidebar.close()}>
            <IconChevronsLeft />
          </button>
        </div>
      </nav>
    </aside>
  </div>

  <!-- sidebar resizer -->
  <div
    class="{$sidebar ? "bg-ink-100 cursor-col-resize" : "bg-white cursor-auto"}
      transition-[background-color] duration-400 w-1 border-x border-white select-none"
    on:mousedown={$sidebar ? onSidebarResize : undefined}
  ></div>

  <!-- show sidebar btn -->
  {#if !$sidebar}
    <button
      class="p-2 fixed left-2 bottom-2"
      in:fly={{ delay: 300, x: -48 }}
      on:click={() => sidebar.open()}
    >
      <IconChevronsright />
    </button>
  {/if}
 
  <main class="flex-grow flex justify-center items-center">
    <slot />
  </main>
</div>
