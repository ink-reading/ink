<script lang="ts">
  import { page } from "$app/stores";
  import { settings } from "$lib/config/routes";
  import Layout from "$lib/components/Layout.svelte";
</script>

<Layout>
  <!-- sidebar -->
  <div slot="side" class="px-2">
    <div class="font-bold px-2 pt-1 pb-3">
      <span>Settings</span>
    </div>
    <div class="flex flex-col gap-1">
      {#each settings as {id, name, icon, isDefault} (id)}
        {@const Icon = icon}
        {@const active = $page.route.id?.endsWith(id) || ($page.route.id === "/settings" && isDefault)}
        <a
          href="/settings/{id}"
          class="rounded p-1 flex items-center cursor-pointer
            {active ? "text-accent bg-accent-50" : "hover:bg-ink-50 "}"
        >
          <div class="p-1 mx-1">
            <Icon width={16} height={16} />
          </div>
          <span>{name}</span>
        </a>
      {/each}
    </div>    
  </div>
  
  <!-- main content -->
  <slot />

</Layout>
