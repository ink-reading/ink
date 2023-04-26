<script lang="ts">
  import { page } from "$app/stores";

  $: folderID = $page.params.folderID;

</script>

{folderID}
