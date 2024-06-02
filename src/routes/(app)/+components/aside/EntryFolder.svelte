<script lang="ts">
  import { IconMore, IconChevronRight } from "$lib/assets/icons";
  import EntryItem from "./EntryItem.svelte";
  import {
    ChevronDownIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    EllipsisVerticalIcon,
    FolderIcon,
  } from "lucide-svelte";
  import { page } from "$app/stores";
  import Icon from "$lib/components/unit/Icon.svelte";

  let { folder }: { folder: any } = $props();

  const active = $derived($page.params.id === folder.id);

  let open = $state(false);

  const { id, name, cnt } = folder;
</script>

<a
  href="/feed/folder/{id}"
  class="group/item relative flex items-center justify-between
    {active ? 'text-primary' : 'hover:text-primary'}"
>
  <span class="p-2">
    <Icon which={FolderIcon} />
  </span>
  <span class="grow truncate">{name}</span>
  {#if cnt.unread !== 0}
    <span class="min-w-8 text-center text-base text-prose-pale group-hover/item:hidden sm:text-xs">
      {cnt.unread}
    </span>
  {/if}
  <span
    class="hidden p-2 text-prose-pale hover:text-prose focus-visible:block
    group-hover/item:block group-focus-visible/item:block"
    onclick={e => {
      e.preventDefault();
      e.stopPropagation();
      open = !open;
    }}
  >
    <Icon which={open ? ChevronDownIcon : ChevronLeftIcon} />
  </span>
</a>

{#if open}
  <div class="flex flex-col gap-0 pl-4">
    {#each folder.items as item (item.id)}
      <EntryItem {item} />
    {/each}
  </div>
{/if}
