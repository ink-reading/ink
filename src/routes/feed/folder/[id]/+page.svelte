<script lang="ts">
  import { page } from "$app/stores";

  $: folderID = $page.params.id;

</script>

{folderID}
