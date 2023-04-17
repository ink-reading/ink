<script>
  import NavIcon from "$lib/components/NavIcon.svelte";
 
  import IconInbox from "$lib/icons/inbox.svg?component";
  import IconSettings from "$lib/icons/settings.svg?component";
  import IconRss from "$lib/icons/rss.svg?component";
  import IconBarChart from "$lib/icons/bar-chart.svg?component";
  import IconCompass from "$lib/icons/compass.svg?component";
  import IconBookRead from "$lib/icons/book-read.svg?component";
  import IconPodcast from "$lib/icons/podcast.svg?component";

</script>

<div class="w-full h-screen flex text-ink overflow-y-auto">
  <aside class="min-w-[350px] p-2 flex flex-col justify-between border-r-2 border-ink-100 overflow-y-auto">
    <nav class="flex justify-between">
      <NavIcon to="/"><IconCompass /></NavIcon>
      <div class="flex">
        <NavIcon to="/read-list"><IconBookRead /></NavIcon>
        <NavIcon to="/feed"><IconRss /></NavIcon>
        <NavIcon to="/newsletter"><IconInbox /></NavIcon>
        <NavIcon to="/podcast"><IconPodcast /></NavIcon>
      </div>
    </nav>
    <section class="flex-grow overflow-y-auto">
      <slot name="side" />
    </section>
    <nav class="flex">
      <NavIcon to="/settings"><IconSettings /></NavIcon>
      <NavIcon to="/stats"><IconBarChart /></NavIcon>
    </nav>
  </aside>

  <main class="flex-grow">
    <slot />
  </main>
</div>
