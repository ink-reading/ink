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

  type Props = {
    id: string;
    title: string;
    brief: string;
    origin: string;
    readed: boolean;
    ty: string;
    date: string;
    pic?: string;
  };

  let { id, title, brief, origin, readed, ty, date, pic }: Props = $props();
</script>

<a
  class="border-aux-line-weak group relative flex w-full items-center gap-4 overflow-hidden border-b py-2"
  href="/read/{id}"
>
  <!-- pic (logo/avatar) -->
  {#if pic}
    <img class="h-20 w-20 shrink-0 overflow-hidden rounded" src={pic} alt="pic" />
  {/if}
  <!-- content -->
  <div
    class="flex w-full grow-0 flex-col justify-between gap-2 overflow-hidden
      {readed && '-opacity-30 group-hover:opacity-100'}"
  >
    <div class="flex w-full flex-col gap-1.5 pt-1.5">
      <!-- title -->
      <h1 class="line-clamp-2 font-medium capitalize text-prose group-hover:text-primary">
        {title}
      </h1>
      <!-- brief -->
      <p class="truncate text-prose-pale">{brief}</p>
    </div>
    <!-- metadata & actions -->
    <div class="flex h-8 items-center gap-3 text-sm text-prose-weak">
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
      <div class="flex shrink items-center gap-1.5 overflow-hidden sm:gap-2">
        <img class="h-4 w-4 rounded-sm" src="https://placehold.co/40/eee/aaa" alt="avatar" />
        <span class="truncate first-letter:capitalize group-hover:text-prose">{origin}</span>
      </div>
      <!-- date -->
      <div class="ml-auto mr-1 text-prose-pale group-hover:hidden">{date}</div>
      <!-- actions -->
      <div class="ml-auto hidden group-hover:flex">
        <div class="cursor-pointer p-2 hover:text-prose-accent">
          <Icon which={BookmarkIcon} />
        </div>
        <div class="cursor-pointer p-2 hover:text-prose-accent">
          <Icon which={CoffeeIcon} />
        </div>
        <div class="cursor-pointer p-2 hover:text-prose-accent">
          <Icon which={ArchiveIcon} />
        </div>
        <div class="cursor-pointer p-2 hover:text-prose-accent">
          <Icon which={MoreHorizontalIcon} />
        </div>
      </div>
    </div>
  </div>
</a>
