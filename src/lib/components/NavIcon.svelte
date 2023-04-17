<script lang="ts">
  import { page } from "$app/stores";
  export let to: string;
  
  $: active = $page.route.id?.startsWith(to);
  
</script>

<a class="p-2 hover:text-accent" class:text-accent={active} href={to}>
  <slot />
</a>
