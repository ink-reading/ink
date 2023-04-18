<script lang="ts">
  import SmartFolder from "./SmartFolder.svelte";

  import IconCircle from "$lib/icons/circle.svg?component";
  import IconCoffee from "$lib/icons/coffee.svg?component";
  import IconStar from "$lib/icons/star.svg?component";
  import IconPlus from "$lib/icons/plus.svg?component";

</script>

<div class="font-bold flex justify-between items-center p-2 pt-0.5">
  <span class="pl-1">Feed</span>
  <button><IconPlus width="20" height="20" /></button>
</div>

<div class="flex flex-col gap-1">
  <SmartFolder name="Today"><IconCoffee /></SmartFolder>
  <SmartFolder name="Unread"><IconCircle /></SmartFolder>
  <SmartFolder name="Starred"><IconStar /></SmartFolder>
</div>

<div class="w-full h-0.5 my-2 bg-ink-50"></div>

<div class="flex flex-col pb-8">

</div>
