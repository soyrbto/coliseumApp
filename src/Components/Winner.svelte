<script>
  import { round } from '../store';
  let winnerPlayer = 'ganador';

  $: {
    getWinner($round);
  }

  function getWinner(when) {
    if (when > 5) {
      winnerPlayer = 'alguien';
    }
  }
</script>

<div class="wrapper-row">
  <div class="row-1">
    <div class="name-1" type="text"><p>{winnerPlayer}</p></div>
  </div>
</div>

<style type="text/scss">
  .wrapper-row {
    margin: 40px 125px 0 0;
    .row-1 {
      margin-bottom: 35px;
      display: flex;
      .name-1 {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 493px;
        height: 58px;
        margin-right: 30px;
        border-radius: 10px;
        background-color: #bfc0c0;
        color: #2d3142;
        font-size: 20px;
        border: 4px solid white;
      }
    }
  }
</style>
