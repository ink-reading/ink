<script>
  import { goto } from "$app/navigation";
  import Icon from "$lib/components/unit/Icon.svelte";
  import sidebar from "$lib/stores/layout/sidebar.svelte";
  import {
    ChevronLeftIcon,
    ChevronRightIcon,
    CircleSlashIcon,
    Clock4Icon,
    LayoutListIcon,
    ListFilterIcon,
    MoreHorizontalIcon,
    MoreVerticalIcon,
    PanelRightIcon,
    SaladIcon,
    SunIcon,
  } from "lucide-svelte";
  import { fly } from "svelte/transition";
</script>

<div
  class="sticky top-0 z-30 flex w-full items-center justify-between bg-background px-3 py-2.5 sm:px-18"
>
  <!-- sidebar open button -->
  {#if !sidebar.open}
    <button
      class="fixed left-3 top-2.5 hidden rounded p-1.5 hover:bg-roam sm:block"
      in:fly={{ duration: 200, delay: 100, x: -48 }}
      onclick={() => sidebar.setOpen(true)}
    >
      <Icon which={PanelRightIcon} />
    </button>
  {/if}
  <!-- mobile back button -->
  <button class="py-1 pl-0 pr-2 sm:hidden" onclick={() => goto("/")}>
    <Icon which={ChevronLeftIcon} sz="md" adjust={1.15} />
  </button>
  <!-- list icon & name -->
  <div class="group flex cursor-pointer items-center text-base font-medium">
    <div class="scale-90 p-1 sm:scale-100 sm:pl-0">
      <Icon which={SunIcon} sz="md" />
    </div>
    <span class="pl-2 pr-1.5">Today</span>
    <div class="invisible hidden group-hover:visible sm:block">
      <Icon which={MoreVerticalIcon} />
    </div>
  </div>

  <!-- mobile right menu -->
  <button class="p-1 sm:hidden">
    <Icon which={MoreHorizontalIcon} sz="md" />
  </button>
  <!-- list actions -->
  <div class="hidden items-center gap-1 sm:flex">
    <div
      class="flex cursor-pointer items-center gap-1 rounded px-1.5 lg:px-2 py-1.5 lg:py-1 hover:bg-roam"
    >
      <Icon which={CircleSlashIcon} />
      <span class="hidden lg:block">Unread</span>
    </div>
    <div
      class="flex cursor-pointer items-center gap-1 rounded px-1.5 lg:px-2 py-1.5 lg:py-1 hover:bg-roam"
    >
      <Icon which={SaladIcon} />
      <span class="hidden lg:block">Source</span>
    </div>
    <div
      class="flex cursor-pointer items-center gap-1 rounded px-1.5 lg:px-2 py-1.5 lg:py-1 hover:bg-roam"
    >
      <Icon which={ListFilterIcon} />
      <span class="hidden lg:block">Filter</span>
    </div>
    <div
      class="flex cursor-pointer items-center gap-1 rounded px-1.5 lg:px-2 py-1.5 lg:py-1 hover:bg-roam"
    >
      <Icon which={Clock4Icon} />
      <span class="hidden lg:block">Newest</span>
    </div>
    <div
      class="flex cursor-pointer items-center gap-1 rounded px-1.5 lg:px-2 py-1.5 lg:py-1 hover:bg-roam"
    >
      <Icon which={LayoutListIcon} />
      <span class="hidden lg:block">List</span>
    </div>
  </div>
</div>
