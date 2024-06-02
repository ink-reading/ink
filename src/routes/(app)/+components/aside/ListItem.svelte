<script lang="ts">
  import type { ComponentType, Snippet } from "svelte";
  import { page } from "$app/stores";
  import { ChevronDownIcon, ChevronLeftIcon, EllipsisVerticalIcon } from "lucide-svelte";
  import Icon from "$lib/components/unit/Icon.svelte";
  import EntryFolder from "./EntryFolder.svelte";
  import EntryItem from "./EntryItem.svelte";

  let {
    slug,
    name,
    unread,
    expandable = false,
    entries = [],
    icon,
  }: {
    slug: string;
    name: string;
    unread: number;
    expandable?: boolean;
    entries?: any[];
    icon: ComponentType;
  } = $props();

  const href = `/list/${slug}`;
  const active = $derived($page.params.slug === slug);
  let expand = $state(false);
</script>

<a
  {href}
  class="group/item relative flex items-center justify-between {active
    ? 'text-primary'
    : 'hover:text-prose'}"
>
  <div class="p-2">
    <Icon which={icon} />
  </div>
  <span class="grow truncate">{name}</span>
  {#if expandable}
    <button
      class="hidden p-2 text-prose-pale hover:text-prose focus-visible:block
        group-hover/item:block group-focus-visible/item:block"
      onclick={e => {
        e.preventDefault();
        e.stopPropagation();
        expand = !expand;
      }}
    >
      <Icon which={expand ? ChevronDownIcon : ChevronLeftIcon} />
    </button>
  {/if}
  {#if unread !== 0}
    <span
      class="min-w-8 text-center text-base text-prose-pale sm:text-xs
        {expandable ? 'group-hover/item:hidden' : ''}"
    >
      {unread}
    </span>
  {/if}
</a>

{#if expand}
  <div class="flex flex-col gap-0 pl-6">
    {#each entries as entry (entry.id)}
      {#if entry.type === "folder"}
        <EntryFolder folder={entry} />
      {:else}
        <EntryItem item={entry} />
      {/if}
    {/each}
  </div>
{/if}
