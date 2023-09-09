<script lang="ts">
  import { page } from "$app/stores";

  export let data;

  $: feedID = $page.params.feedID;
</script>

<div class="flex justify-center items-stretch p-4">
  <div class="w-full flex flex-col justify-stretch gap-1">
    {#each data.postEntries as post (post.id)}
      <div class="rounded px-4 py-2 flex hover:bg-ink-50 cursor-pointer">
        <span class="pr-8">{post.author}</span>
        <h1 class="font-bold grow">{post.title}</h1>
        <!-- <div>{post.brief}</div> -->
      </div>
    {/each}
  </div>
</div>
