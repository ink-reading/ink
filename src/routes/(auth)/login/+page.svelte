<script lang="ts">
  import { enhance } from "$app/forms";
  let { form } = $props();
</script>

<main class="flex h-screen items-center justify-center text-prose">
  <div class="flex grow items-center justify-center">
    <div class="w-96 px-4">
      <div class="flex items-end justify-between gap-4 pb-12 font-mono leading-none">
        <div class="text-md pb-px font-medium text-primary">ink</div>
        <div class="text-xs text-prose-pale">/// UNDER CONSTRUCTION</div>
      </div>
      <form method="post" use:enhance>
        <div class="pb-4">
          <!-- <label for="username" class="block py-1">Username</label> -->
          <input
            name="username"
            id="username"
            placeholder="Username"
            autocomplete="username"
            class="bg-roam w-full rounded px-4 py-2 outline-none ring-primary ring-offset-0 placeholder:text-prose-pale focus-visible:border-primary"
          />
        </div>

        <div class="">
          <!-- <label for="password" class="block py-1">Password</label> -->
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            autocomplete="current-password"
            class="bg-roam w-full rounded px-4 py-2 outline-none ring-primary ring-offset-0 placeholder:text-prose-pale focus-visible:border-primary"
          />
        </div>

        {#if form?.message}
          <div class="mt-3 min-h-[24px] text-aux-danger">
            {form.message}
          </div>
        {/if}

        <button
          class="border-roam-accent mt-6 w-full rounded border-2 p-2 text-prose-pale hover:text-primary"
          >Login</button
        >
      </form>
    </div>
  </div>
</main>
