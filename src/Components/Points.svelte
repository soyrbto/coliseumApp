<script>
  import { players, round, pointsArray } from '../store';
  export let classRound, currentRound;
  let nodesArray, parentNode;
  let pointsRound = [];

  function getPoints() {
    nodesArray = parentNode.querySelectorAll(`.round-${$round} >  .pairing`);
    nodesArray.forEach((el, i) => {
      if (el.value >= 0 && el.value <= 5) {
        pointsRound[i] = Number(el.value);
      } else {
        window.alert('el valor debe estar entre 0 y 5');
        el.value = '';
      }
    });
    pointsArray.set(pointsRound);
  }
</script>

{#if $round >= 1}
  <div class="column {classRound}" bind:this={parentNode}>
    {#each $players as player}
      <input
        class:disable={currentRound != $round}
        class="pairing"
        on:keyup={getPoints}
      />
    {/each}
  </div>
{/if}

<style type="text/scss">
  .pairing {
    background-color: white;
    border: 4px solid #2d3142;
    color: #2d3142;
    width: 4.68vw; // 90px
    height: 3.02vw; // 58px
    border-radius: 14px;
    font-size: 1.04vw; // 20px
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 0 0.67vw; // 0 13px
  }

  .column {
    display: flex;
    flex-direction: column;
    height: 33.33vw; // 640px
    justify-content: space-between;
  }

  .disable {
    pointer-events: none;
    background-color: #808080;
  }
</style>
