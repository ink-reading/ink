<script lang="ts">
  import { page } from "$app/stores";

  $: feedId = $page.params.feedId;
</script>

{feedId}
