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

<div class="sticky top-0 z-30 flex w-full items-center justify-between px-4 sm:px-4 py-2.5 sm:py-3">
  <!-- back button -->
  <div class="flex gap-2">
    <button
      class="p-2 rounded-full hover:text-primary cursor-pointer"
      on:click={() => goto("/list/today")}
    >
      <Icon which={ArrowLeftIcon} />
    </button>
    <section class="flex gap-1">
      <!-- <button class="p-2 rounded-full hover:text-primary cursor-pointer">
        <Icon which={ChevronUpIcon} />
      </button>
      <button class="p-2 rounded-full hover:text-primary cursor-pointer">
        <Icon which={ChevronDownIcon} />
      </button> -->
      <button class="p-2 rounded-full hover:text-primary cursor-pointer">
        <Icon which={AlignLeftIcon} />
      </button>
    </section>
  </div>

  <!-- mobile right menu -->
  <button class="sm:hidden p-2">
    <Icon which={MoreHorizontalIcon} />
  </button>

  <!-- post actions -->
  <div class="hidden sm:flex items-center gap-8">
    <section class="flex gap-1 items-center">
      <div class="p-2 rounded-full hover:text-primary cursor-pointer">
        <Icon which={CheckIcon} />
      </div>
      <div class="p-2 rounded-full hover:text-primary cursor-pointer">
        <Icon which={CoffeeIcon} />
      </div>
      <div class="p-2 rounded-full hover:text-primary cursor-pointer">
        <Icon which={BookmarkIcon} />
      </div>
      <div class="p-2 rounded-full hover:text-primary cursor-pointer">
        <Icon which={ArchiveIcon} />
      </div>
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
      <div class="p-1.5 rounded-full hover:text-primary cursor-pointer">
        <Icon which={PenLineIcon} />
      </div>
      <div class="p-2 rounded-full hover:text-primary cursor-pointer">
        <Icon which={MoreVerticalIcon} />
      </div>
    </section>
  </div>
</div>
