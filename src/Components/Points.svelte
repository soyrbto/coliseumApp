<script>
  import { players, round, pointsArray } from '../store';
  export let currentRound, disable;
  let nodesArray, parentNode;
  let pointsRound = [];

  function getPoints() {
    nodesArray = parentNode.querySelectorAll(`.round-${$round} >  .pairing`);
    nodesArray.forEach((el, i) => {
      pointsRound[i] = el.value;
    });
    pointsArray.set(pointsRound);
    console.log($pointsArray);
  }
</script>

{#if $round >= 1}
  <div class="column {currentRound}" bind:this={parentNode}>
    {#each $players as player, i}
      <input class:disable class="pairing" on:keyup={getPoints} />
    {/each}
  </div>
{/if}

<style>
  .pairing {
    background-color: white;
    border: 4px solid #2d3142;
    color: #2d3142;
    width: 90px;
    height: 58px;
    border-radius: 14px;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 0 13px;
  }

  .column {
    display: flex;
    flex-direction: column;
    height: 640px;
    justify-content: space-between;
  }
</style>
