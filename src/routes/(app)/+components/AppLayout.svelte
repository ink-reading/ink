<script lang="ts">
  import type { Snippet } from "svelte";
  import sidebar from "$lib/stores/layout/sidebar.svelte";
  import AppAside from "./aside/AppAside.svelte";
  import SidebarResizer from "./aside/SidebarResizer.svelte";

  type Props = {
    listing: any;
    children: Snippet;
  };

  let { listing, children }: Props = $props();

  let asideEl = $state<HTMLElement | undefined>();
</script>

<div id="app" class="sm:flex">
  <aside
    bind:this={asideEl}
    class="hidden shrink-0 overflow-hidden duration-200 sm:block sm:h-screen"
    style:width={`${sidebar.open ? sidebar.width : 0}px`}
  >
    <!-- inner wrapper -->
    <div style:width={`${sidebar.width}px`}>
      <AppAside {listing} />
    </div>
  </aside>

  <SidebarResizer {asideEl} />

  <div class="grow overflow-hidden">
    {@render children()}
  </div>
</div>
