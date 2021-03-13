<script>
  import { globalTotals, players, round, startPairing } from '../store';
  import { pairing, mesaPos } from '../functions';
  export let classRound;
  let localRound = 0;
  let nodesArray, parentNode;

  $: {
    localRound = $round;
    if (parentNode !== undefined && $round == 1) {
      nodesArray = parentNode.querySelectorAll(`.round-${$round} >  .pairing`);
      nodesArray.forEach((el, i) => {
        el.innerText = mesaPos($startPairing[i]);
      });
    } else if (parentNode !== undefined) {
      nodesArray = parentNode.querySelectorAll(`.round-${$round} >  .pairing`);
      let pairingLocal = pairing($globalTotals);
      nodesArray.forEach((el, i) => {
        //aqui debe ir el pairing en funcion de la ronda
        el.innerText = mesaPos(pairingLocal[i]);
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

<style type="text/scss">
  .pairing {
    background-color: #2d3142;
    color: white;
    width: 4.68vw; // 90px
    height: 3.02vw; // 58px
    border-radius: 14px;
    font-size: 1.04vw;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0.67vw 1.3vw; 
  }

  .column {
    display: flex;
    flex-direction: column;
    //height: 33.33vw; // 640px
    // justify-content: space-between;
  }
</style>
