<script lang="ts">
  import { page } from "$app/stores";

  $: folderId = $page.params.folderId;
</script>

{folderId}
