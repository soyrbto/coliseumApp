<script>
  import { fade } from 'svelte/transition';
  import { players, startPairing } from '../store';
  import NameAdd from './NameAdd.svelte';
  import Pairing from './Pairing.svelte';
  import Points from './Points.svelte';
</script>

{#each $players as player}
  <div transition:fade={{ delay: 250, duration: 300 }} class="wrapper-col-fill">
    <div class="col-1-fill"><NameAdd name={player} /></div>
    <div class="col-2-fill" />
  </div>
{/each}
{#each $startPairing as pairing}
  <Pairing {pairing} />
  <Points />
{/each}

<style type="text/scss">
  .wrapper-col-fill {
    display: flex;
    font-size: 20px;
    margin-bottom: 25px;
    .col-1-fill {
      width: 385px;
    }
    .col-2-fill {
      display: flex;
      justify-content: start;
      width: 80%;
      margin-left: 50px;
    }
  }
</style>
