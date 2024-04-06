<script lang="ts">
  import { enhance } from "$app/forms";
  export let form;
</script>

<main class="flex h-screen items-center justify-center text-prose">
  <div class="flex grow items-center justify-center">
    <div class="w-96 px-4">
      <div class="pb-12 flex justify-between items-end gap-4 font-mono leading-none">
        <div class="text-primary text-md pb-px font-medium">ink</div>
        <div class="text-prose-pale text-xs">/// UNDER CONSTRUCTION</div>
      </div>
      <form method="post" use:enhance>
        <div class="pb-4">
          <!-- <label for="username" class="block py-1">Username</label> -->
          <input
            name="username"
            id="username"
            placeholder="Username"
            class="w-full rounded bg-roam px-4 py-2 outline-none ring-primary ring-offset-0 placeholder:text-prose-pale focus-visible:border-primary"
          />
        </div>

        <div class="">
          <!-- <label for="password" class="block py-1">Password</label> -->
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            class="w-full rounded bg-roam px-4 py-2 outline-none ring-primary ring-offset-0 placeholder:text-prose-pale focus-visible:border-primary"
          />
        </div>

        {#if form?.message}
          <div class="mt-3 min-h-[24px] text-aux-danger">
            {form.message}
          </div>
        {/if}

        <button
          class="mt-6 w-full rounded border-2 border-roam-accent p-2 text-prose-pale hover:text-primary"
          >Login</button
        >
      </form>
    </div>
  </div>
</main>
