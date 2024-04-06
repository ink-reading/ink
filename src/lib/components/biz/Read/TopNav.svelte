<script>
  import { goto } from "$app/navigation";
  import Icon from "$lib/components/unit/Icon.svelte";
  import {
    AlignLeftIcon,
    ArchiveIcon,
    ArrowDownIcon,
    ArrowLeftIcon,
    ArrowUpIcon,
    BookmarkIcon,
    CaseSensitiveIcon,
    CheckIcon,
    ChevronDownIcon,
    ChevronLeftIcon,
    ChevronUpIcon,
    CoffeeIcon,
    CompassIcon,
    MoreHorizontalIcon,
    MoreVerticalIcon,
    PenLineIcon,
    ViewIcon,
    Wand2Icon,
  } from "lucide-svelte";
  import { IconReadList } from "$lib/assets/icons";
</script>

<div
  class="sticky top-0 z-30 flex w-full items-center justify-between bg-background px-3 sm:px-12 py-2.5"
>
  <div class="flex gap-2">
    <!-- pc back button -->
    <button
      class="p-1.5 rounded hover:text-prose-accent hover:bg-roam hidden sm:block"
      on:click={() => goto("/list/today")}
    >
      <Icon which={ChevronLeftIcon} adjust={1.15} />
    </button>
    <!-- mobile back button -->
    <button class="py-1 pr-2 sm:hidden" on:click={() => goto("/list/today")}>
      <Icon which={ChevronLeftIcon} sz="md" adjust={1.15} />
    </button>
    <section class="flex gap-1">
      <!-- <button class="p-2 rounded-full hover:text-primary cursor-pointer">
        <Icon which={ChevronUpIcon} />
      </button>
      <button class="p-2 rounded-full hover:text-primary cursor-pointer">
        <Icon which={ChevronDownIcon} />
      </button> -->
      <!-- <button class="p-2 rounded-full hover:text-primary cursor-pointer">
        <Icon which={AlignLeftIcon} />
      </button> -->
    </section>
  </div>

  <!-- mobile right menu -->
  <button class="sm:hidden p-1">
    <Icon which={MoreHorizontalIcon} sz="md" />
  </button>

  <!-- post actions -->
  <div class="hidden sm:flex items-center gap-8">
    <section class="flex gap-1 items-center">
      <!-- <button class="p-1.5 rounded hover:bg-roam hover:text-prose-accent">
        <Icon which={CheckIcon} />
      </button> -->
      <button class="p-1.5 rounded hover:bg-roam hover:text-prose-accent">
        <Icon which={CoffeeIcon} />
      </button>
      <button class="p-1.5 rounded hover:bg-roam hover:text-prose-accent">
        <Icon which={BookmarkIcon} />
      </button>
      <button class="p-1.5 rounded hover:bg-roam hover:text-prose-accent">
        <Icon which={ArchiveIcon} />
      </button>
    </section>
    <section class="flex items-center gap-1">
      <!-- <div class="p-1.5 rounded-full hover:text-primary cursor-pointer">
        <Icon which={Wand2Icon} />
      </div> -->
      <!-- <div class="p-1.5 rounded-full hover:text-primary cursor-pointer">
        <Icon which={ViewIcon} />
      </div>
      <div class="p-1.5 rounded-full hover:text-primary cursor-pointer">
        <Icon which={CompassIcon} />
      </div> -->
      <!-- <div class="p-1.5 rounded hover:bg-roam hover:text-prose-accent">
        <Icon which={PenLineIcon} />
      </div> -->
      <div class="p-1.5 rounded hover:bg-roam hover:text-prose-accent">
        <Icon which={MoreVerticalIcon} />
      </div>
    </section>
  </div>
</div>
