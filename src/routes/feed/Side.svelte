<script lang="ts">
	import { IconCircle, IconCoffee, IconPlus, IconStar } from "$lib/icons";

  import SmartFolder from "./SmartFolder.svelte";

</script>

<div class="font-bold flex justify-between items-center px-2 pt-1 pb-3">
  <span>Feed</span>
  <button><IconPlus width="20" height="20" /></button>
</div>

<div class="flex flex-col gap-0.5">
  <SmartFolder id="today" name="Today"><IconCoffee /></SmartFolder>
  <SmartFolder id="unread" name="Unread"><IconCircle /></SmartFolder>
  <SmartFolder id="starred" name="Starred"><IconStar /></SmartFolder>
</div>

<div class="w-full h-0.5 my-2 bg-ink-50"></div>

<div class="flex flex-col pb-8">

</div>
