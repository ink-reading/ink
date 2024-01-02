<script>
  import { goto } from "$app/navigation";
  import Icon from "$lib/components/unit/Icon.svelte";
  import {
    ArchiveIcon,
    BookmarkIcon,
    CaseSensitiveIcon,
    ChevronLeftIcon,
    CoffeeIcon,
    MoreHorizontalIcon,
    MoreVerticalIcon,
  } from "lucide-svelte";
</script>

<div
  class="sticky top-0 z-30 flex w-full items-center justify-between bg-ink-bg px-4 sm:px-4 py-2.5 sm:py-3"
>
  <!-- back button -->
  <button
    class="p-1.5 rounded-full hover:text-ink-primary cursor-pointer"
    on:click={() => goto("/list/today")}
  >
    <Icon which={ChevronLeftIcon} sz="md" />
  </button>
  <!-- mobile right menu -->
  <button class="sm:hidden p-2">
    <Icon which={MoreHorizontalIcon} />
  </button>

  <!-- post actions -->
  <div class="hidden sm:flex items-center gap-12">
    <section class="flex gap-1 items-center">
      <div class="p-2 rounded-full hover:text-ink-primary cursor-pointer">
        <Icon which={CoffeeIcon} />
      </div>
      <div class="p-2 rounded-full hover:text-ink-primary cursor-pointer">
        <Icon which={BookmarkIcon} />
      </div>
      <div class="p-2 rounded-full hover:text-ink-primary cursor-pointer">
        <Icon which={ArchiveIcon} />
      </div>
    </section>
    <section class="flex items-center gap-1">
      <div class="p-1.5 rounded-full hover:text-ink-primary cursor-pointer">
        <Icon which={CaseSensitiveIcon} sz="md" />
      </div>
      <div class="p-2 rounded-full hover:text-ink-primary cursor-pointer">
        <Icon which={MoreVerticalIcon} />
      </div>
    </section>
  </div>
</div>
