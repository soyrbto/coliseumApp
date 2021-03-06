<script>
  import { startPairing } from '../store';
</script>

<div class="column">
  {#each $startPairing as pairing}
    <div class="pairing"><p>{pairing}</p></div>
  {/each}
</div>

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
