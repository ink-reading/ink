<script>
	import MenuItem from "./MenuItem.svelte";

  import IconInbox from "$lib/icons/inbox.svg?component";
  import IconRss from "$lib/icons/rss.svg?component";
  import IconBarChart from "$lib/icons/bar-chart.svg?component";
  import IconBookRead from "$lib/icons/book-read.svg?component";
  import IconPodcast from "$lib/icons/podcast.svg?component";
  import IconUser from "$lib/icons/user.svg?component";
  import IconInfo from "$lib/icons/info.svg?component";
  import IconPalette from "$lib/icons/palette.svg?component";

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
