<script lang="ts">
  import { page } from "$app/stores";
  import TopNav from "$lib/components/layout/TopNav.svelte";

  $: id = $page.params.id;
</script>

<TopNav>list actions...</TopNav>

{id}
