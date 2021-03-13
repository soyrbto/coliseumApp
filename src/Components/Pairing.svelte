<script>
  import {
    globalTotals,
    players,
    round,
    startPairing,
    totalPoints,
  } from '../store';
  import { pairing } from '../functions';
  export let classRound;
  let localRound = 0;
  let nodesArray, parentNode;

  $: {
    localRound = $round;
    if (parentNode !== undefined && $round == 1) {
      nodesArray = parentNode.querySelectorAll(`.round-${$round} >  .pairing`);
      nodesArray.forEach((el, i) => {
        el.innerText = $startPairing[i];
      });
    } else if (parentNode !== undefined) {
      nodesArray = parentNode.querySelectorAll(`.round-${$round} >  .pairing`);
      let pairingLocal = pairing($globalTotals);
      nodesArray.forEach((el, i) => {
        //aqui debe ir el pairing en funcion de la ronda
        el.innerText = pairingLocal[i];
      });
    }
  }
</script>

{#if $round > 0}
  <div class="column {classRound}" bind:this={parentNode}>
    {#each $players as player}
      <div class="pairing"><p>{localRound}</p></div>
    {/each}
  </div>
{/if}

<style>
  .pairing {
    background-color: #2d3142;
    color: white;
    width: 90px;
    height: 58px;
    border-radius: 14px;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 13px;
  }

  .column {
    display: flex;
    flex-direction: column;
    height: 640px;
    justify-content: space-between;
  }
</style>
