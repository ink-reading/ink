<script>
  import { goto } from "$app/navigation";
  import Layout from "$lib/components/layout/Layout.svelte";
  import { ChevronLeftIcon } from "lucide-svelte";
  export let data;
</script>

<Layout listing={data.listing}>
  <slot />
</Layout>
