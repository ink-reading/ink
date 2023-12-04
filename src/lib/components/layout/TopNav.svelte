<script>
  import { goto } from "$app/navigation";
  import { ChevronLeftIcon } from "lucide-svelte";
</script>

<div class="sticky z-30 top-0 w-full px-4 sm:px-3 py-2.5 flex justify-between items-center">
  <button class="p-1 sm:hidden" on:click={() => goto("/")}>
    <ChevronLeftIcon size={20} />
  </button>
  <div>
    <slot />
  </div>
</div>
