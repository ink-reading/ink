<script lang="ts">
  import { SunMedium, Moon } from "lucide-svelte";

  let dark = false;

  const toggleTheme = () => {
    dark = !dark;
    document.documentElement.classList.toggle("dark");
  };
</script>

<button class="p-2 hover:text-ink-primary" on:click={toggleTheme}>
  {#if dark}
    <SunMedium size={20} />
  {:else}
    <Moon size={20} class="scale-90" />
  {/if}
</button>
