<script>
	import { IconUser, IconPalette, IconBookRead, IconRss, IconInbox, IconPodcast, IconBarChart, IconInfo } from "$lib/icons";
	import MenuItem from "./MenuItem.svelte";

</script>
<div class="font-bold px-2 pt-1 pb-3">
  <span>Settings</span>
</div>

<div class="flex flex-col gap-1">
  <MenuItem id="account" name="Account">
    <IconUser width="16" height="16" />
  </MenuItem>
  <MenuItem id="appearance" name="Appearance">
    <IconPalette width="16" height="16" />
  </MenuItem>
  <MenuItem id="read-list" name="Read List">
    <IconBookRead width="16" height="16" />
  </MenuItem>
  <MenuItem id="feed" name="Feed">
    <IconRss width="16" height="16" />
  </MenuItem>
  <MenuItem id="newsletter" name="Newsletter">
    <IconInbox width="16" height="16" />
  </MenuItem>
  <MenuItem id="podcast" name="Podcast">
    <IconPodcast width="16" height="16" />
  </MenuItem>
  <MenuItem id="stats" name="Stats">
    <IconBarChart width="16" height="16" />
  </MenuItem>
  <MenuItem id="about" name="About">
    <IconInfo width="16" height="16" />
  </MenuItem>
</div>
