<script lang="ts">
  import { page } from "$app/stores";

  $: feedID = $page.params.id;

</script>

{feedID}
