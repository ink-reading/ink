<script lang="ts">
  import { IconReadList } from "$lib/assets/icons";
  import Icon from "$lib/components/unit/Icon.svelte";
  import {
    ArchiveIcon,
    BookmarkIcon,
    CheckCircleIcon,
    CheckIcon,
    CoffeeIcon,
    DotIcon,
    InboxIcon,
    MoreHorizontalIcon,
    PodcastIcon,
    RssIcon,
  } from "lucide-svelte";

  export let id: string;
  export let title: string;
  export let brief: string;
  export let origin: string;
  export let ty: string;
  export let date: string;
  export let readed: boolean;
  export let pic: string | undefined;
</script>

<a
  class="group relative flex w-full items-center gap-4 overflow-hidden rounded-md px-2 py-3 after:absolute after:bottom-0 after:left-2 after:right-2
  after:h-px after:bg-roam hover:bg-roam active:bg-roam sm:mx-0 sm:px-6 sm:py-3 sm:after:left-6 sm:after:right-6"
  href="/read/{id}"
>
  <!-- pic (logo/avatar) -->
  {#if pic}
    <!-- <img class="h-12 w-12 shrink-0 overflow-hidden rounded" src={pic} alt="pic" /> -->
  {/if}
  <!-- content -->
  <div
    class="flex w-full grow-0 flex-col justify-between gap-3 overflow-hidden
      {readed && '-opacity-30 group-hover:opacity-100'}"
  >
    <div class="flex flex-col w-full gap-3">
      <!-- title -->
      <h1 class="truncate-3 text-base font-medium capitalize">{title}</h1>
      <!-- brief -->
      <p class="truncate hidden sm:block text-prose-pale">{brief}</p>
    </div>
    <!-- metadata -->
    <div class="flex items-center gap-3 sm:gap-4 text-sm text-prose-weak">
      <!-- type -->
      <div class="text-primary">
        {#if ty === "rss"}
          <Icon which={RssIcon} />
        {:else if ty === "newsletter"}
          <Icon which={InboxIcon} />
        {:else if ty === "podcast"}
          <Icon which={PodcastIcon} />
        {:else if ty === "saved"}
          <Icon which={IconReadList} />
        {/if}
      </div>
      <!-- origin -->
      <div class="flex shrink items-center gap-1.5 sm:gap-2 overflow-hidden">
        <img class="h-4 w-4 rounded-sm" src="https://placehold.co/400" alt="avatar" />
        <span class="truncate first-letter:capitalize">{origin}</span>
      </div>
      <!-- date -->
      <div class="group-hover:invisible text-prose-pale ml-auto">{date}</div>
    </div>
  </div>
  <!-- actions -->
  <div class="invisible absolute bottom-2 right-4 flex gap-0 group-hover:visible">
    <div class="cursor-pointer rounded-full p-2 hover:bg-roam hover:text-ink-text">
      <BookmarkIcon size={16} />
    </div>
    <div class="cursor-pointer rounded-full p-2 hover:bg-roam hover:text-ink-text">
      <CoffeeIcon size={16} />
    </div>
    <div class="cursor-pointer rounded-full p-2 hover:bg-roam hover:text-ink-text">
      <ArchiveIcon size={16} />
    </div>
    <div class="cursor-pointer rounded-full p-2 hover:bg-roam hover:text-ink-text">
      <MoreHorizontalIcon size={16} />
    </div>
  </div>
</a>
