<script lang="ts">
  import { enhance } from "$app/forms";

  export let data;
</script>

<h1>Profile</h1>
<p>User id: {data.userId}</p>
<p>Username: {data.username}</p>
<form method="post" action="?/logout" use:enhance>
  <input type="submit" value="Sign out" />
</form>
