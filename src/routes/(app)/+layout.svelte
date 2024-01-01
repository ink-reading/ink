<script>
  import Layout from "$lib/components/biz/Layout.svelte";
  export let data;
</script>

<Layout listing={data.listing}>
  <slot />
</Layout>
