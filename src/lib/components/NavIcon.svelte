<script lang="ts">
  import { page } from "$app/stores";
  export let to: string;

  $: active = $page.route.id?.startsWith(to);
</script>

<a class="p-2 hover:text-ink-primary" class:text-ink-primary={active} href={to}>
  <slot />
</a>
