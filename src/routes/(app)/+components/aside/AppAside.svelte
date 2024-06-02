<script lang="ts">
  import { goto } from "$app/navigation";
  import {
    ArchiveIcon,
    BarChart2Icon,
    BookmarkIcon,
    CircleIcon,
    CoffeeIcon,
    ConstructionIcon,
    HashIcon,
    ImageIcon,
    InboxIcon,
    LibraryIcon,
    MessageSquareIcon,
    MoonIcon,
    PanelLeftIcon,
    PenLineIcon,
    PlusIcon,
    PlusSquareIcon,
    PodcastIcon,
    RssIcon,
    ScrollTextIcon,
    SearchIcon,
    Settings2Icon,
    SunIcon,
    TvIcon,
  } from "lucide-svelte";
  import { IconReadList } from "$lib/assets/icons";
  import Icon from "$lib/components/unit/Icon.svelte";
  import theme from "$lib/stores/layout/theme.svelte";
  import sidebar from "$lib/stores/layout/sidebar.svelte";

  import ListItem from "./ListItem.svelte";

  type Props = {
    listing: any;
  };

  let { listing }: Props = $props();

  const ICON_MAP: any = {
    list: {
      today: SunIcon,
      all: CircleIcon,
      later: CoffeeIcon,
      mark: BookmarkIcon,
      archive: ArchiveIcon,
    },
    saved: IconReadList,
    library: LibraryIcon,
    feed: RssIcon,
    newsletter: InboxIcon,
    podcast: PodcastIcon,
    socialmedia: MessageSquareIcon,
    picture: ImageIcon,
    video: TvIcon,
    notes: PenLineIcon,
    tags: HashIcon,
  };

  const { lists, entries } = listing;

  let showDivider = $state(false);
  let scrollContainer = $state<HTMLElement | null>(null);
  const toggleDivider = () => {
    if (!scrollContainer) return;
    showDivider = scrollContainer.scrollTop >= 10;
  };

  $effect(() => {
    toggleDivider();
  });
</script>

<nav class="min-h-screen sm:flex sm:h-screen sm:flex-col sm:justify-between">
  <!-- sidebar open button -->
  <section
    class="duration fixed top-0 z-10 hidden bg-background p-2.5 transition-[left] duration-150 sm:block
      {sidebar.open ? '-left-full' : 'left-0'}"
  >
    <button class="rounded p-1.5 hover:text-prose-accent" onclick={() => sidebar.setOpen(true)}>
      <Icon which={PanelLeftIcon} />
    </button>
  </section>

  <!-- pc top bar -->
  <section class="hidden items-center justify-between px-2 py-2 sm:flex">
    <!-- ink logo -->
    <a class="px-1.5 font-mono leading-none hover:text-primary" href="/">INK</a>
    <!-- top action buttons -->
    <div class="flex items-center">
      <button class="p-2 hover:text-prose-accent">
        <Icon which={SearchIcon} />
      </button>
      <button class="p-2 hover:text-prose-accent" onclick={() => sidebar.setOpen(false)}>
        <Icon which={PanelLeftIcon} />
      </button>
    </div>
  </section>

  <!-- mobile top bar -->
  <section class="sticky top-0 z-30 flex flex-col bg-background px-3.5 py-2.5 sm:hidden">
    <div class="flex justify-between">
      <button class="p-1" onclick={() => goto("/settings")}>
        <Icon which={Settings2Icon} size="md" />
      </button>
      <button class="p-1">
        <Icon which={PlusIcon} size="md" />
      </button>
    </div>
  </section>

  <!-- top divider -->
  <div
    class="mx-2 hidden h-px shrink-0 transition-colors duration-200 sm:block
      {showDivider ? 'bg-aux-line' : 'bg-transparent'}"
  ></div>

  <!-- listing section -->
  <section
    bind:this={scrollContainer}
    onscroll={toggleDivider}
    class="scroll-area-r-2 px-2 pb-12 pt-1 sm:grow"
  >
    <!-- inner wrapper -->
    <div class="px-0">
      <!-- mobile search bar -->
      <section class="flex flex-col pb-3 pt-1 sm:hidden">
        <div class="bg-roam flex items-center gap-2.5 rounded-lg px-2 py-1 text-prose-weak">
          <span class="p-0.5">
            <Icon which={SearchIcon} />
          </span>
          <span>Search</span>
        </div>
      </section>

      <!-- lists -->
      <div class="flex flex-col gap-0">
        {#each listing.list as list (list.slug)}
          <ListItem
            slug={list.slug}
            name={list.name}
            unread={list.cnt.unread}
            icon={ICON_MAP.list[list.slug]}
          />
        {/each}
      </div>

      <!-- divider -->
      <div class="my-3 h-px w-full bg-aux-line-weak"></div>

      <!-- subscribed -->
      <div class="flex flex-col gap-0">
        <ListItem
          slug={listing.saved.slug}
          name={listing.saved.name}
          unread={listing.saved.cnt.unread}
          icon={ICON_MAP[listing.saved.slug]}
        />
        <ListItem
          slug={listing.library.slug}
          name={listing.library.name}
          unread={listing.library.cnt.unread}
          icon={ICON_MAP[listing.library.slug]}
          expandable={true}
          entries={listing.library.entries}
        />
        <ListItem
          slug={listing.feed.slug}
          name={listing.feed.name}
          unread={listing.feed.cnt.unread}
          icon={ICON_MAP[listing.feed.slug]}
          expandable={true}
          entries={listing.feed.entries}
        />
        <ListItem
          slug={listing.newsletter.slug}
          name={listing.newsletter.name}
          unread={listing.newsletter.cnt.unread}
          icon={ICON_MAP[listing.newsletter.slug]}
          expandable={true}
          entries={listing.newsletter.entries}
        />
        <ListItem
          slug={listing.podcast.slug}
          name={listing.podcast.name}
          unread={listing.podcast.cnt.unread}
          icon={ICON_MAP[listing.podcast.slug]}
          expandable={true}
          entries={listing.podcast.entries}
        />
        <ListItem
          slug={listing.socialmedia.slug}
          name={listing.socialmedia.name}
          unread={listing.socialmedia.cnt.unread}
          icon={ICON_MAP[listing.socialmedia.slug]}
          expandable={true}
          entries={listing.socialmedia.entries}
        />
        <ListItem
          slug={listing.picture.slug}
          name={listing.picture.name}
          unread={listing.picture.cnt.unread}
          icon={ICON_MAP[listing.picture.slug]}
          expandable={true}
          entries={listing.picture.entries}
        />
        <ListItem
          slug={listing.video.slug}
          name={listing.video.name}
          unread={listing.video.cnt.unread}
          icon={ICON_MAP[listing.video.slug]}
          expandable={true}
          entries={listing.video.entries}
        />
      </div>

      <!-- divider -->
      <div class="my-3 h-px w-full bg-aux-line-weak"></div>

      <!-- tags & notes -->
      <div class="flex flex-col gap-0 pb-4">
        <ListItem
          slug={listing.tags.slug}
          name={listing.tags.name}
          unread={listing.tags.cnt.unread}
          icon={ICON_MAP[listing.tags.slug]}
        />
        <ListItem
          slug={listing.notes.slug}
          name={listing.notes.name}
          unread={listing.notes.unread}
          icon={ICON_MAP[listing.notes.slug]}
        />
      </div>
    </div>
  </section>

  <!-- pc bottom section -->
  <!-- <section class="hidden px-4 py-2.5 sm:block">
    <div class="flex items-center justify-between gap-0.5">
      <div class="flex grow items-center gap-2.5 px-1.5">
        <span class="h-4 w-4 rounded-full bg-roam-accent"></span>
        <span>admin</span>
      </div>
      <div class="flex items-center gap-1">
        <button class="rounded p-1.5 hover:text-prose-accent">
          <Icon which={BarChart2Icon} />
        </button>
        <button class="rounded p-1.5 hover:text-prose-accent" onclick={() => theme.toggle()}>
          <Icon which={theme.mode === "light" ? MoonIcon : SunIcon} />
        </button>
      </div>
    </div>
  </section> -->
</nav>
