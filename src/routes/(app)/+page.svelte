<script lang="ts">
  import Home from "$lib/components/layout/Home/index.svelte";
  export let data;
</script>

<div class="sm:hidden">
  <Home listing={data.listing} />
</div>
