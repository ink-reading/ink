<script lang="ts">
  import {
    ArchiveIcon,
    Bookmark,
    BookmarkIcon,
    ChevronsLeftIcon,
    CircleIcon,
    CoffeeIcon,
    ConstructionIcon,
    HashIcon,
    InboxIcon,
    LibraryIcon,
    PlusIcon,
    PodcastIcon,
    RssIcon,
    ScrollTextIcon,
    SearchIcon,
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
  import { IconPlus } from "$lib/assets/icons";

  export let listing: any;

  const { lists, entries } = listing;

  const iconSizeLg = 20;
  const iconSizeBase = 16;
</script>

<nav class="min-h-screen sm:flex sm:h-screen sm:flex-col sm:justify-between overscroll-y-contain">
  <!-- pc top bar -->
  <section class="hidden justify-between px-3.5 py-3 sm:flex mb-1">
    <!-- ink logo -->
    <a class="p-0.5 hover:text-ink-primary" class:text-ink-primary={true} href="/">
      <ConstructionIcon size={iconSizeLg} />
    </a>
    <!-- top action buttons -->
    <div class="flex items-center gap-2">
      <button class="p-1 hover:text-ink-primary">
        <SearchIcon size={iconSizeBase} />
      </button>
      <button class="p-1 hover:text-ink-primary">
        <IconPlus width={iconSizeBase} height={iconSizeBase} />
      </button>
    </div>
  </section>

  <!-- mobile top bar -->
  <section class="sticky top-0 z-30 flex flex-col bg-ink-bg px-4 py-2.5 sm:hidden">
    <div class="flex justify-between">
      <button class="p-1" on:click={() => goto("/settings")}>
        <Settings2Icon size={iconSizeLg} /></button
      >
      <button class="p-1"><PlusIcon size={iconSizeLg} /></button>
    </div>
  </section>

  <!-- listing section -->
  <section class="scroll-area-r-2 px-3 sm:grow sm:px-2">
    <!-- mobile search bar -->
    <section class="flex flex-col pb-3 pt-1 sm:hidden">
      <div class="flex items-center gap-2.5 rounded-lg bg-ink-text/5 px-2 py-1 text-ink-text/40">
        <span class="p-0.5"><SearchIcon size={iconSizeBase} /></span>
        <span>Search</span>
      </div>
    </section>
    <!-- lists -->
    <div class="flex flex-col gap-0.5">
      <ListItem id="digest" name="Digest" unread={lists.today}>
        <ScrollTextIcon size={iconSizeBase} />
      </ListItem>
      <ListItem id="today" name="Today" unread={lists.today}>
        <SunIcon size={iconSizeBase} />
      </ListItem>
      <ListItem id="all" name="All" unread={lists.all}>
        <CircleIcon size={iconSizeBase} />
      </ListItem>
      <!-- <ListItem id="later" name="Later" unread={lists.later}>
        <CoffeeIcon size={iconSizeBase} />
      </ListItem> -->
      <ListItem id="mark" name="Mark" unread={lists.mark}>
        <BookmarkIcon size={iconSizeBase} />
      </ListItem>
      <ListItem id="archive" name="Archive" unread={lists.archive}>
        <ArchiveIcon size={iconSizeBase} />
      </ListItem>
    </div>
    <!-- spacer -->
    <div class="my-2 h-0.5 w-full rounded-full bg-ink-text/5"></div>
    <!-- source switcher -->
    <div
      class="sticky top-12 z-20 flex w-full items-center justify-between gap-1.5 bg-ink-bg pb-2 sm:top-0"
    >
      <SourceBtn>
        <RssIcon size={iconSizeBase} />
      </SourceBtn>
      <SourceBtn>
        <InboxIcon size={iconSizeBase} />
      </SourceBtn>
      <SourceBtn>
        <PodcastIcon size={iconSizeBase} />
      </SourceBtn>
      <SourceBtn>
        <LibraryIcon size={iconSizeBase} />
      </SourceBtn>
      <SourceBtn>
        <HashIcon size={iconSizeBase} />
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

  <!-- bottom bar -->
  <section class="hidden px-3.5 py-3 sm:flex sm:items-center sm:justify-between">
    <Indicator />
    <!-- bottom action buttons -->
    <div class="flex gap-2">
      <button
        class="p-1 hover:text-ink-primary"
        on:click={() => {
          /* TODO */
        }}
      >
        <Settings2Icon size={iconSizeBase} />
      </button>
      <button class="p-0.5 hover:text-ink-primary" on:click={() => sidebar.close()}>
        <ChevronsLeftIcon size={iconSizeLg} />
      </button>
    </div>
  </section>
</nav>
