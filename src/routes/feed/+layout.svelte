<script lang="ts">
  import { IconCoffee, IconCircle, IconStar, IconPlus } from "$lib/icons";
	import type { Entry } from "$lib/types/feed";
  import Layout from "$lib/components/Layout.svelte";
  import ListEntryMeta from "./ListEntryMeta.svelte";
  import ListEntryFeed from "./ListEntryFeed.svelte";
  import ListEntryFolder from "./ListEntryFolder.svelte";

  export let data: {
    meta: {
      today: number;
      unread: number;
      starred: number;
    };
    entries: Entry[];
  };
  
</script>

<Layout>
  <!-- sidebar -->
  <div slot="side" class="px-2">
    <div class="font-bold flex justify-between items-center px-2 pt-1 pb-3">
      <span>Feed</span>
      <button><IconPlus width="20" height="20" /></button>
    </div>
    <!-- meta list -->
    <div class="flex flex-col gap-0.5">
      <ListEntryMeta id="today" name="Today" icon={IconCoffee} unread={data.meta.today} />
      <ListEntryMeta id="unread" name="Unread" icon={IconCircle} unread={data.meta.unread} />
      <ListEntryMeta id="starred" name="Starred" icon={IconStar} unread={data.meta.starred} />
    </div>
    <!-- spacer -->
    <div class="w-full h-0.5 my-2 bg-ink-50"></div>
    <!-- feed list -->
    <div class="flex flex-col gap-0.5 pb-16">
      {#each data.entries as entry (entry.id)}
        {#if entry.type === "folder"}
          <ListEntryFolder folder={entry} />
        {:else}
          <ListEntryFeed feed={entry} />
        {/if}
      {/each}
    </div>
  </div>
  <!-- main content -->
  <slot />
</Layout>
