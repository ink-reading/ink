<script lang="ts">
  import { SunMedium, Moon } from "lucide-svelte";

  let theme = "light";

  const toggleTheme = () => {
    theme = theme === "light" ? "dark" : "light";
    // document.documentElement.setAttribute("data-theme", theme);
  };
</script>

<button class="p-2 hover:text-accent" on:click={toggleTheme}>
  {#if theme === "light"}
    <Moon size={20} />
  {:else}
    <SunMedium size={20} />
  {/if}
</button>
