<script lang="ts">
  import { page } from "$app/stores";

  type Props = {
    item: any;
  };

  let { item }: Props = $props();

  const active = $derived($page.params.id === item.id);

  const { id, name, pic, cnt } = item;
</script>

<a
  href="/feed/{id}"
  class="group/item relative flex items-center justify-between
    {active ? 'text-primary' : 'hover:text-prose-accent'}"
>
  <img class="h-8 w-8 rounded p-2" src={pic} alt={`Avatar of ${name}`} />
  <span class="grow truncate">{name}</span>
  <span class="min-w-8 text-center text-base text-prose-pale sm:text-xs">
    {cnt.unread !== 0 ? cnt.unread : null}
  </span>
</a>
