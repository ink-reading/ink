<script lang="ts">
  import {
    ArchiveIcon,
    Bookmark,
    BookmarkIcon,
    ChevronsLeftIcon,
    CircleIcon,
    Coffee,
    CoffeeIcon,
    ConstructionIcon,
    HashIcon,
    InboxIcon,
    LibraryIcon,
    PanelLeft,
    PanelLeftIcon,
    PlusIcon,
    PlusSquareIcon,
    PodcastIcon,
    RssIcon,
    ScrollTextIcon,
    SearchIcon,
    Settings,
    Settings2Icon,
    SunIcon,
  } from "lucide-svelte";
  import Indicator from "./Indicator.svelte";
  import { sidebar } from "$lib/stores/layout";
  import ListItem from "./ListItem.svelte";
  import SourceBtn from "./SourceBtn.svelte";
  import EntryFolder from "./EntryFolder.svelte";
  import EntryItem from "./EntryItem.svelte";
  import { goto } from "$app/navigation";
  import { IconPlus, IconSettings } from "$lib/assets/icons";
  import Icon from "$lib/components/unit/Icon.svelte";

  export let listing: any;

  const { lists, entries } = listing;
</script>

<nav class="min-h-screen sm:flex sm:h-screen sm:flex-col sm:justify-between overscroll-y-contain">
  <!-- pc top bar -->
  <section class="hidden justify-between px-3 py-2.5 sm:flex">
    <!-- ink logo -->
    <a class="p-1.5 hover:text-primary" class:text-primary={true} href="/">
      <ConstructionIcon size={16} />
    </a>
    <!-- top action buttons -->
    <div class="flex items-center gap-1">
      <!-- <button class="p-1.5 rounded hover:bg-roam">
        <Icon which={SearchIcon} />
      </button> -->
      <button class="p-1.5 rounded hover:bg-roam">
        <Icon which={Settings2Icon} />
      </button>
      <button class="p-1.5 rounded hover:bg-roam">
        <Icon which={PlusSquareIcon} />
      </button>
      <button class="p-1.5 rounded hover:bg-roam" on:click={() => sidebar.close()}>
        <Icon which={PanelLeftIcon} />
      </button>
    </div>
  </section>

  <!-- mobile top bar -->
  <section class="sticky top-0 z-30 flex flex-col px-3.5 py-2.5 sm:hidden bg-background">
    <div class="flex justify-between">
      <button class="p-1" on:click={() => goto("/settings")}>
        <Icon which={Settings2Icon} sz="md" />
      </button>
      <button class="p-1">
        <Icon which={PlusIcon} sz="md" />
      </button>
    </div>
  </section>

  <!-- listing section -->
  <section class="scroll-area-r-2 px-2 sm:grow sm:px-2">
    <!-- mobile search bar -->
    <section class="flex flex-col pb-3 pt-1 sm:hidden">
      <div class="flex items-center gap-2.5 rounded-lg bg-roam px-2 py-1 text-prose-weak">
        <span class="p-0.5">
          <Icon which={SearchIcon} />
        </span>
        <span>Search</span>
      </div>
    </section>
    <!-- lists -->
    <div class="flex flex-col gap-0.5 pb-2">
      <ListItem id="digest" name="Digest" unread={lists.today}>
        <Icon which={ScrollTextIcon} />
      </ListItem>
      <ListItem id="today" name="Today" unread={lists.today}>
        <Icon which={SunIcon} />
      </ListItem>
      <ListItem id="all" name="All" unread={lists.all}>
        <Icon which={CircleIcon} />
      </ListItem>
      <ListItem id="later" name="Later" unread={lists.later}>
        <Icon which={CoffeeIcon} />
      </ListItem>
      <ListItem id="mark" name="Mark" unread={lists.mark}>
        <Icon which={BookmarkIcon} />
      </ListItem>
      <ListItem id="archive" name="Archive" unread={lists.archive}>
        <Icon which={ArchiveIcon} />
      </ListItem>
    </div>
    <!-- source switcher -->
    <div
      class="sticky top-12 z-20 flex w-full items-center justify-between gap-1 pb-2 sm:top-0 bg-background"
    >
      <SourceBtn>
        <Icon which={RssIcon} />
      </SourceBtn>
      <SourceBtn>
        <Icon which={InboxIcon} />
      </SourceBtn>
      <SourceBtn>
        <Icon which={PodcastIcon} />
      </SourceBtn>
      <!-- <SourceBtn>
        <Icon which={LibraryIcon} />
      </SourceBtn> -->
      <SourceBtn>
        <Icon which={HashIcon} />
      </SourceBtn>
    </div>
    <!-- entries -->
    <div class="flex flex-col gap-0.5 pb-20">
      {#each entries.feed as entry (entry.id)}
        {#if entry.type === "folder"}
          <EntryFolder folder={entry} />
        {:else}
          <EntryItem item={entry} />
        {/if}
      {/each}
    </div>
  </section>
</nav>
