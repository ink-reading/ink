<script lang="ts">
  import { enhance } from "$app/forms";
  export let form;
</script>

<main class="flex h-screen items-center justify-between text-ink-text">
  <div class="h-full w-2/5 bg-ink-primary"></div>
  <div class="flex grow items-center justify-center">
    <div class="w-96">
      <form method="post" use:enhance>
        <div class="pb-4">
          <label for="username" class="block py-1">Username</label>
          <input
            name="username"
            id="username"
            placeholder="Enter your username"
            class="w-full rounded border-2 border-ink-text/10 px-4 py-2 outline-none ring-ink-primary ring-offset-0 placeholder:text-ink-text/30 focus-visible:border-ink-primary"
          />
        </div>

        <div class="">
          <label for="password" class="block py-1">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            class="w-full rounded border-2 border-ink-text/10 px-4 py-2 outline-none ring-ink-primary ring-offset-0 placeholder:text-ink-text/30 focus-visible:border-ink-primary"
          />
        </div>

        <div class="mb-6 mt-4 min-h-[24px] text-red-500">
          {#if form?.message}
            {form.message}
          {/if}
        </div>

        <button class="w-full rounded bg-ink-primary p-2 text-white">Login</button>
      </form>
    </div>
  </div>
</main>
