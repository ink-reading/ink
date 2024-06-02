<script>
  import { goto } from "$app/navigation";
  import Icon from "$lib/components/unit/Icon.svelte";
  import {
    ChevronLeftIcon,
    CircleSlashIcon,
    Clock4Icon,
    LayoutListIcon,
    ListFilterIcon,
    MoreHorizontalIcon,
    MoreVerticalIcon,
    SaladIcon,
    SunIcon,
  } from "lucide-svelte";
</script>

<!-- mobile -->
<header class="flex items-center justify-between sm:hidden">
  <button class="py-1 pl-0 pr-2 sm:hidden" onclick={() => goto("/")}>
    <Icon which={ChevronLeftIcon} size="md" />
  </button>
  <button class="p-1 sm:hidden">
    <Icon which={MoreHorizontalIcon} size="md" />
  </button>
</header>

<!-- pc -->
<header class="hidden items-center justify-between bg-background px-2 py-2 sm:flex">
  <!-- list icon & name -->
  <section class="group flex cursor-pointer items-center text-base font-medium">
    <div class="p-1 sm:pl-0">
      <Icon which={SunIcon} />
    </div>
    <span class="pl-1 pr-1">Today</span>
    <div class="invisible hidden group-hover:visible sm:block">
      <Icon which={MoreVerticalIcon} />
    </div>
  </section>

  <!-- list actions -->
  <section class="hidden items-center gap-1 text-prose-weak sm:flex">
    <div
      class="flex cursor-pointer items-center gap-1 p-1.5 hover:text-prose-accent lg:px-2 lg:py-1.5"
    >
      <Icon which={CircleSlashIcon} />
      <span class="hidden lg:block">Unread</span>
    </div>
    <div
      class="flex cursor-pointer items-center gap-1 p-1.5 hover:text-prose-accent lg:px-2 lg:py-1.5"
    >
      <Icon which={SaladIcon} />
      <span class="hidden lg:block">Type</span>
    </div>
    <div
      class="flex cursor-pointer items-center gap-1 p-1.5 hover:text-prose-accent lg:px-2 lg:py-1.5"
    >
      <Icon which={ListFilterIcon} />
      <span class="hidden lg:block">Filter</span>
    </div>
    <div
      class="flex cursor-pointer items-center gap-1 p-1.5 hover:text-prose-accent lg:px-2 lg:py-1.5"
    >
      <Icon which={Clock4Icon} />
      <span class="hidden lg:block">Sort</span>
    </div>
    <div
      class="flex cursor-pointer items-center gap-1 p-1.5 hover:text-prose-accent lg:px-2 lg:py-1.5"
    >
      <Icon which={LayoutListIcon} />
      <span class="hidden lg:block">Layout</span>
    </div>
  </section>
</header>
