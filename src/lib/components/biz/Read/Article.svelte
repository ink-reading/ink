<script lang="ts">
  import { randomSentence } from "$lib/utils/mock";
  import { range } from "$lib/utils/range";
</script>

<article class="prose max-w-3xl px-4 pb-20">
  <h1 class="capitalize">{randomSentence([5, 10])}</h1>
  {#each new Array(5) as item}
    <h2 class="capitalize">{randomSentence([2, 10])}</h2>
    {#each range(1, 5) as item}
      <p>
        {range(1, 5)
          .map(() => randomSentence([5, 15]))
          .join(". ")}
      </p>
    {/each}
  {/each}
</article>

<style>
  h1 {
    font-size: 1.5em;
    font-weight: bolder;
    margin: 1em 0 0.5em 0;
  }

  h2 {
    font-size: 1.35em;
    margin-block: 2em 0.5em;
  }

  p {
    line-height: inherit;
    word-wrap: break-word;
    margin-block: 1em;
  }
</style>
