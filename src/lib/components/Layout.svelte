<script lang="ts">
  import { fly, fade } from "svelte/transition";
  
  import NavIcon from "$lib/components/NavIcon.svelte";
 
  import IconInbox from "$lib/icons/inbox.svg?component";
  import IconSettings from "$lib/icons/settings.svg?component";
  import IconRss from "$lib/icons/rss.svg?component";
  import IconBarChart from "$lib/icons/bar-chart.svg?component";
  import IconCompass from "$lib/icons/compass.svg?component";
  import IconBookRead from "$lib/icons/book-read.svg?component";
  import IconPodcast from "$lib/icons/podcast.svg?component";
  import IconChevronsLeft from "$lib/icons/chevrons-left.svg?component";
  import IconChevronsright from "$lib/icons/chevrons-right.svg?component";
  
  import { sidebar, sideWith } from "$lib/stores/layout";

  let sidebarContainer: HTMLDivElement | null = null;
  
  const onSidebarResize = () => {
    sidebarContainer!.style.transitionProperty = 'none';
    const resize = (evt: MouseEvent) => {
      if (evt.x < 200 || evt.x > 700) return;
      $sideWith = `${evt.x}px`;
    }
    document.addEventListener("mousemove", resize);
    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", resize);
      sidebarContainer!.style.transitionProperty = "flex-basis";
    });
  }

</script>

<div class="w-full h-screen flex text-ink overflow-y-auto">

  <!-- sidebar -->
  <div
    bind:this={sidebarContainer}
    class="h-full transition-[flex-basis] duration-400 overflow-hidden min-w-0"
    style:flex-basis={$sidebar ? $sideWith : "0px"}
  >
    <aside
      class="h-full p-2 pb-6 flex flex-col justify-between overflow-y-auto group"
      style:min-width={$sideWith}
      style:width={$sideWith}
    >
      <nav class="flex justify-between">
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
      <nav class="flex justify-between">
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
  {#if $sidebar}
    <div
      class="w-1 border-x border-white bg-ink-100 select-none cursor-col-resize"
      on:mousedown={onSidebarResize}
      transition:fade={{ duration: 300 }}
    ></div>
  {/if}

  <!-- show sidebar btn -->
  {#if !$sidebar}
    <button
      class="p-2 fixed left-2 bottom-6"
      in:fly={{ delay: 300, x: -48 }}
      on:click={() => sidebar.open()}
    >
      <IconChevronsright />
    </button>
  {/if}
 
  <main class="flex-grow">
    <slot />
  </main>
</div>