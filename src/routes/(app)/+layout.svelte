<script>
  import Layout from "$lib/components/biz/Layout.svelte";
  let { data, children } = $props();
</script>

<Layout listing={data.listing}>
  {@render children()}
</Layout>
