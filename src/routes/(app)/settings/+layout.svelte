<script lang="ts">
  import { page } from "$app/stores";
  import { settings } from "$lib/config/routes";
</script>

<!-- sidebar -->
<div>
  <div class="font-bold px-2 pt-1 pb-3">
    <span>Settings</span>
  </div>
  <div class="flex flex-col gap-0.5">
    {#each settings as { id, name, icon, isDefault } (id)}
      {@const Icon = icon}
      {@const active =
        $page.route.id?.endsWith(id) || ($page.route.id === "/settings" && isDefault)}
      <a
        href="/settings/{id}"
        class="rounded px-2 py-1 flex items-center cursor-pointer
            {active ? 'text-ink-primary bg-ink-primary/10' : 'hover:bg-ink-text/10 '}"
      >
        <div class="p-1 mr-2">
          <Icon width={16} height={16} />
        </div>
        <span>{name}</span>
      </a>
    {/each}
  </div>
</div>

<!-- main content -->
<slot />
