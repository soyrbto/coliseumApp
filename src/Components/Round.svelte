<script>
  import { round } from '../store';

  let currentRound;

  $: {
    getRound($round);
  }

  function getRound(when) {
    if (when < 6) {
      currentRound = when;
    } else {
      currentRound = 'Fin del torneo';
    }
  }
</script>

<div class="wrapper-round">
  <div class="title">Round</div>
  <div class="round-container"><p>{currentRound}</p></div>
</div>

<style type="text/scss">
  .title {
    font-size: 30px;
    color: #d5dce7;
    margin-bottom: 10px;
  }
  .round-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    width: 100px;
    background: white;
    color: #2d3142;
    border-radius: 10px;
    font-size: 20px;
    text-align: center;
  }
</style>
