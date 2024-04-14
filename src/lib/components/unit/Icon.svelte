<script context="module">
  const ICON_SIZE = {
    xs: 12,
    sm: 16,
    md: 20,
    lg: 24,
    xl: 28,
  };
</script>

<script lang="ts">
  import type { ComponentType } from "svelte";

  let {
    which,
    sz = "sm",
    amp = 1,
    adjust = undefined,
  }: {
    which: ComponentType;
    sz?: "xs" | "sm" | "md" | "lg" | "xl";
    amp?: number;
    adjust?: number;
  } = $props();

  const size = ICON_SIZE[sz];
  const ampSize = size * amp;
</script>

<div
  class="ink-icon {adjust !== undefined && 'adjust'}"
  style:--sz={`${size}px`}
  style:--amp-sz={`${ampSize}px`}
  style:--adjust={adjust !== undefined ? adjust : 1}
>
  <svelte:component this={which} size="100%" width="100%" height="100%" />
</div>

<style>
  :global(.ink-icon.adjust) {
    transform: scale(var(--adjust));
  }

  :global(.ink-icon) {
    width: var(--amp-sz);
    height: var(--amp-sz);
  }

  @media (min-width: 640px) {
    :global(.ink-icon) {
      width: var(--sz);
      height: var(--sz);
    }
  }
</style>
