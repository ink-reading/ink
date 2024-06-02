<script lang="ts">
  import AppAside from "./+components/aside/AppAside.svelte";
  let { data } = $props();
</script>

<div class="sm:hidden">
  <AppAside listing={data.listing} />
</div>
