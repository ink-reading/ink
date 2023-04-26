<script lang="ts">
  import { IconCoffee, IconCircle, IconStar, IconPlus } from "$lib/icons";
  import { page } from "$app/stores";
  import Layout from "$lib/components/Layout.svelte";
  import ListMetaEntry from "./ListMetaEntry.svelte";
  import ListEntry from "./ListEntry.svelte";
  import ListFolder from "./ListFolder.svelte";
	import type { ListItem } from "$lib/types/feed";

  export let data: {
    meta: {
      today: number;
      unread: number;
      starred: number;
    };
    feeds: ListItem[];
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
      <ListMetaEntry id="today" name="Today" icon={IconCoffee} unread={data.meta.today} />
      <ListMetaEntry id="unread" name="Unread" icon={IconCircle} unread={data.meta.unread} />
      <ListMetaEntry id="starred" name="Starred" icon={IconStar} unread={data.meta.starred} />
    </div>
    <!-- spacer -->
    <div class="w-full h-0.5 my-2 bg-ink-50"></div>
    <!-- feed list -->
    <div class="flex flex-col gap-0.5 pb-8">
      {#each data.feeds as item (item.id)}
        {#if item.type === "folder"}
          <ListFolder folder={item} />
        {:else}
          <ListEntry feed={item} />
        {/if}
      {/each}
    </div>
  </div>
  
  <!-- main content -->
  <slot />
</Layout>
