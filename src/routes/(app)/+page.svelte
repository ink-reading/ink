<script lang="ts">
  import Home from "$lib/components/biz/Home/Home.svelte";
  export let data;
</script>

<div class="sm:hidden">
  <Home listing={data.listing} />
</div>
