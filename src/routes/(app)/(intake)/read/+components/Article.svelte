<script lang="ts">
  import { randomDateStr, randomSentence } from "$lib/__mock";
  import { range } from "$lib/__mock";
  import Icon from "$lib/components/unit/Icon.svelte";
  import { RssIcon } from "lucide-svelte";
</script>

<article class="prose px-4 pb-20 text-base leading-7 text-prose">
  <h1 class="capitalize">{randomSentence([4, 7])}</h1>
  <div class="flex items-center gap-4 pb-9 pt-2">
    <span class="text-primary">
      <Icon which={RssIcon} />
    </span>
    <span class="flex items-center gap-1.5">
      <img class="h-4 w-4 rounded-sm" src="https://placehold.co/40/eee/aaa" alt="avatar" />
      <span class="text-sm capitalize text-prose-weak">{randomSentence([1, 3])}</span>
    </span>
    <span class="ml-auto text-sm text-prose-weak">
      {randomDateStr("M-DD")}
    </span>
  </div>
  {#each new Array(5) as item}
    {#each range(1, 5) as item}
      <p class="first-letter:capitalize">
        {range(4, 9)
          .map(() => randomSentence([2, 20]))
          .join(". ")}
      </p>
    {/each}
    <h2 class="capitalize">{randomSentence([2, 10])}</h2>
  {/each}
</article>

<style>
  h1 {
    font-size: 1.3em;
    font-weight: bolder;
    margin: 1em 0 0.5em 0;
  }

  h2 {
    font-size: 1.2em;
    margin-block: 2em 0.5em;
  }

  p {
    line-height: inherit;
    word-wrap: break-word;
    margin-block: 1em;
  }
</style>
