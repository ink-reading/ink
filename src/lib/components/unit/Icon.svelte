<script context="module">
  const ICON_SIZE_MAP = {
    xs: 12,
    sm: 16,
    md: 20,
    lg: 24,
    xl: 28,
  };
</script>

<script lang="ts">
  import type { ComponentType } from "svelte";

  type Props = {
    which: ComponentType;
    size?: "xs" | "sm" | "md" | "lg" | "xl";
  };

  let {
    which,
    size = "sm",
  }: {
    which: ComponentType;
    size?: "xs" | "sm" | "md" | "lg" | "xl";
  } = $props();

  const sz = ICON_SIZE_MAP[size];
</script>

<div class="ink-icon" style:width={`${sz}px`} style:height={`${sz}px`}>
  <svelte:component this={which} size="100%" width="100%" height="100%" />
</div>
