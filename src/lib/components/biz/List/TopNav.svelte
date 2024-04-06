<script>
  import { goto } from "$app/navigation";
  import {
    CalendarClockIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    CircleSlashIcon,
    Clock4Icon,
    LayoutListIcon,
    ListFilterIcon,
    MenuIcon,
    MoreHorizontalIcon,
    MoreVerticalIcon,
    SaladIcon,
    SunIcon,
  } from "lucide-svelte";

  const iconSize = 16;
</script>

<div
  class="-shadow-sm sticky top-0 z-30 flex w-full items-center justify-between px-4 sm:px-18 py-2.5 sm:py-3 bg-background"
>
  <!-- mobile back button -->
  <button class="sm:hidden p-1" on:click={() => goto("/")}>
    <ChevronLeftIcon size={20} />
  </button>
  <!-- list icon & name -->
  <div class="group flex cursor-pointer items-center text-base font-medium">
    <div class="p-0.5 sm:pl-0 scale-90 sm:scale-100">
      <SunIcon size={20} />
    </div>
    <span class="pl-2 pr-1.5">Today</span>
    <div class="hidden sm:block invisible group-hover:visible">
      <ChevronRightIcon size={iconSize} />
    </div>
  </div>

  <!-- mobile right menu -->
  <button class="sm:hidden p-1">
    <MoreHorizontalIcon size={20} />
  </button>
  <!-- list actions -->
  <div class="hidden sm:flex items-center gap-4">
    <div class="flex cursor-pointer items-center gap-1 rounded hover:text-primary">
      <div class="p-1">
        <CircleSlashIcon size={iconSize} />
      </div>
      <span>Unread</span>
    </div>
    <div class="flex cursor-pointer items-center gap-1 rounded hover:text-primary">
      <div class="p-1">
        <SaladIcon size={iconSize} />
      </div>
      <span>Source</span>
    </div>
    <div class="flex cursor-pointer items-center gap-1 rounded hover:text-primary">
      <div class="p-1">
        <ListFilterIcon size={iconSize} />
      </div>
      <span>Filter</span>
    </div>
    <div class="flex cursor-pointer items-center gap-1 rounded hover:text-primary">
      <div class="p-1">
        <Clock4Icon size={iconSize} />
      </div>
      <span>Newest</span>
    </div>
    <div class="flex cursor-pointer items-center gap-1 rounded hover:text-primary">
      <div class="p-1">
        <LayoutListIcon size={iconSize} />
      </div>
      <span>List</span>
    </div>
  </div>
</div>
