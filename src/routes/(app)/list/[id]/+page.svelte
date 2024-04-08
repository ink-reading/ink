<script lang="ts">
  import { page } from "$app/stores";
  import TopNav from "$lib/components/biz/List/TopNav.svelte";
  import { randomDateStr, randomSentence, randomTy } from "$lib/utils/mock";

  import PostEntryCard from "$lib/components/biz/List/PostEntryCard.svelte";

  $: id = $page.params.id;
</script>

<TopNav />

<section class="px-2 py-4 flex flex-col sm:px-12 overflow-hidden">
  {#each new Array(50) as item, idx}
    <PostEntryCard
      id={String(idx)}
      title={randomSentence([4, 10])}
      brief={randomSentence([30, 100])}
      origin={randomSentence(2)}
      ty={randomTy()}
      date={randomDateStr("M-DD")}
      readed={Math.random() > 0.5}
      pic={Math.random() > 0.8 ? "https://placehold.co/400/444444/aaaaaa" : undefined}
    />
  {/each}
</section>
