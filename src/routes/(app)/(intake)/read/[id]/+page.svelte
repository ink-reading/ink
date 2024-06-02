<script lang="ts">
  import { goto } from "$app/navigation";
  import Article from "../+components/Article.svelte";
  import Icon from "$lib/components/unit/Icon.svelte";
  import { randomSentence } from "$lib/__mock";
  import { range } from "$lib/__mock";
  import {
    ArchiveIcon,
    ArrowUpIcon,
    ArrowUpRightIcon,
    BookmarkIcon,
    CheckIcon,
    ChevronLeftIcon,
    CornerLeftUpIcon,
    CornerRightDownIcon,
    CornerUpLeftIcon,
    ListIcon,
    LucideSquareArrowOutUpRight,
    MoreHorizontalIcon,
    MoveLeftIcon,
    MoveUpRightIcon,
    PenIcon,
    PenLineIcon,
    SparklesIcon,
    SpeechIcon,
    SquareArrowOutUpRightIcon,
    TypeIcon,
  } from "lucide-svelte";
  import { IconCoffee } from "$lib/assets/icons";
</script>

<div class="flex h-screen justify-center overflow-y-auto">
  <aside
    class="no-scrollbar sticky top-0 flex h-full flex-1 justify-end overflow-y-auto text-sm text-prose-weak"
  >
    <div class="flex min-w-80 flex-col pl-4 pr-8">
      <button
        class="mb-12 mt-24 flex cursor-pointer items-center gap-2 p-3 pl-0 hover:text-prose-accent"
        onclick={() => goto("/list/today")}
      >
        <Icon which={CornerUpLeftIcon} />
        <span>Back</span>
      </button>
      <nav class="flex flex-col gap-2 pb-16">
        {#each range(4, 18) as item}
          <div class="cursor-pointer truncate capitalize hover:text-prose">
            {randomSentence([2, 3])}
          </div>
        {/each}
      </nav>
      <section class="mt-auto flex items-center pb-6">
        <button class="p-2 pl-0 hover:text-prose-accent">
          <Icon which={ListIcon} />
        </button>
        <button class="p-2 hover:text-prose-accent">
          <Icon which={CornerLeftUpIcon} />
        </button>
        <button class="p-2 hover:text-prose-accent">
          <Icon which={CornerRightDownIcon} />
        </button>
      </section>
    </div>
  </aside>

  <main class="max-w-[768px] pt-10">
    <Article />
  </main>

  <aside class="no-scrollbar sticky top-0 h-full flex-1 overflow-y-auto text-prose-weak">
    <div class="flex h-full max-w-80 flex-col items-end pl-8 pr-4 pt-32">
      <!-- <section class="pt-24">
        <button class="p-2 hover:text-prose-accent">
          <Icon which={MoreHorizontalIcon} />
        </button>
      </section> -->
      <section class="flex flex-col gap-1 pr-12 pt-12">
        <!-- <button class="p-2 hover:text-prose-accent">
          <Icon which={CheckIcon} />
        </button> -->
        <button class="p-2 hover:text-prose-accent">
          <Icon which={SparklesIcon} />
        </button>
        <button class="p-2 hover:text-prose-accent">
          <Icon which={IconCoffee} />
        </button>
        <button class="p-2 hover:text-prose-accent">
          <Icon which={BookmarkIcon} />
        </button>
        <button class="p-2 hover:text-prose-accent">
          <Icon which={ArchiveIcon} />
        </button>
        <button class="p-2 hover:text-prose-accent">
          <Icon which={TypeIcon} />
        </button>
        <button class="p-2 hover:text-prose-accent">
          <Icon which={SquareArrowOutUpRightIcon} />
        </button>
        <button class="p-2 hover:text-prose-accent">
          <Icon which={SpeechIcon} />
        </button>
        <button class="p-2 hover:text-prose-accent">
          <Icon which={PenLineIcon} />
        </button>
        <button class="p-2 hover:text-prose-accent">
          <Icon which={MoreHorizontalIcon} />
        </button>
      </section>
      <section class="mt-auto flex items-end pb-6 pr-12">
        <button class="p-2 hover:text-prose-accent">
          <Icon which={ArrowUpIcon} />
        </button>
      </section>
    </div>
  </aside>
</div>
