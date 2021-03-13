<script>
  import { fade } from 'svelte/transition';
  import { players, rounds } from '../store';
  import NameAdd from './NameAdd.svelte';
  import Pairing from './Pairing.svelte';
  import Points from './Points.svelte';
</script>

<div class="wrapper-all">
  <div class="wrapper-col-1">
    {#each $players as player, i}
      <div class="fill-1" transition:fade={{ delay: 250, duration: 300 }}>
        <NameAdd name={player} />
      </div>
    {/each}
  </div>
  {#each $rounds as round}
    <div class="wrapper-col-n">
      <div class="round" transition:fade={{ delay: 250, duration: 300 }}>
        <Pairing classRound={`round-${round}`} />
        <Points classRound={`round-${round}`} currentRound={round} />
      </div>
    </div>
  {/each}
</div>
{#if $rounds >= 5}
  <Points />
{/if}

<style type="text/scss">
  .wrapper-all {
    display: flex;

    .wrapper-col-1 {
      font-size: 1.04vw; // 20px
      width: 35%;
      padding-right: 3%;

      .fill-1 {
        width: 100%;
        margin-bottom: 1.3vw; // 25px
      }
    }
    .wrapper-col-n {
      .round {
        display: flex;
        margin: 0 0 1.3vw 0; // 0 0 25px 0
      }
    }
  }
</style>
