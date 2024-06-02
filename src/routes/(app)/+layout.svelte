<script lang="ts">
  import { type Snippet } from "svelte";
  import AppLayout from "./+components/AppLayout.svelte";

  type Props = {
    data: any;
    children: Snippet;
  };

  let { data, children }: Props = $props();
</script>

<AppLayout listing={data.listing}>
  {@render children()}
</AppLayout>
