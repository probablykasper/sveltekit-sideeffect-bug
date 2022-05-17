<script lang="ts">
  import { messages } from './message'
</script>

{#each $messages as message}
  {message}
{/each}
