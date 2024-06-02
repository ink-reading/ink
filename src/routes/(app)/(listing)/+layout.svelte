<script lang="ts">
  import { page } from "$app/stores";
  import { randomDateStr, randomSentence, randomTy } from "$lib/__mock";
  import EntryCard from "./+components/EntryCard.svelte";
  import ListingLayout from "./+components/ListingLayout.svelte";
  import ListingHeader from "./+components/ListingHeader.svelte";
  // const { children } = $props();
  $inspect($page);
</script>

<ListingLayout>
  {#snippet header()}
    <ListingHeader />
  {/snippet}

  {#snippet content()}
    <section class="flex flex-col px-2.5 pt-2.5">
      {#each new Array(50) as item, idx}
        <EntryCard
          id={String(idx)}
          title={randomSentence([4, 10])}
          brief={randomSentence([30, 100])}
          origin={randomSentence(2)}
          ty={randomTy()}
          date={randomDateStr("M-DD")}
          readed={Math.random() > 0.5}
          pic={Math.random() > 0.8 ? "https://placehold.co/40/eee/aaa" : undefined}
        />
      {/each}
    </section>
  {/snippet}
</ListingLayout>
