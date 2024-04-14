<script lang="ts">
  import Home from "$lib/components/biz/Home/Home.svelte";
  let { data } = $props();
</script>

<div class="sm:hidden">
  <Home listing={data.listing} />
</div>
