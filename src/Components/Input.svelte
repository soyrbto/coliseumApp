<script>
  import { randomizer } from '../functions';
  import { players, round, startPairing } from '../store';

  let nodePlayer;
  let openSubs = true;
  let nodeRound;

  function addParticipant(e) {
    if (e.keyCode == 13 || e.detail == 1) {
      let newPlayer = nodePlayer.value;
      players.update((value) => [...value, newPlayer]);
      console.log($players);
      nodePlayer.value = '';
    }
  }

  function resetData() {
    randomizer.resetPairing();
    startPairing.set([]);
    players.set([]);
    round.set(0);
    openSubs = true;
  }

  function changeRound() {
    if ($round == 0 && $players.length >= 8) {
      openSubs = false;
      nodeRound.innerText = `Siguiente ronda`;
      randomizer.inRandom();
    }

    if ($players.length < 8) {
      window.alert(
        'No hay suficientes jugadores registrados, el minimo es de 8 participantes',
      );
    }
  }
</script>

<div class="wrapper-row">
  <div class="row-1">
    <input
      class:disable={!openSubs}
      bind:this={nodePlayer}
      on:keypress={addParticipant}
      class="name"
      type="text"
    />
    <button on:click={addParticipant} class="partaker-add"
      >Agregar <br /> participante</button
    >
  </div>
  <div class="row-2">
    <button on:click={resetData} class="reset">Reset</button>
    <button on:click={changeRound} bind:this={nodeRound} class="start"
      >comenzar</button
    >
  </div>
</div>

<style type="text/scss">
  .wrapper-row {
    margin: 10px 0 0 125px;
    .row-1 {
      margin-bottom: 35px;
      display: flex;
      .name {
        width: 493px;
        height: 58px;
        margin-right: 30px;
        border-radius: 10px;
      }

      .partaker-add {
        background-color: #ef8254;
        color: white;
        border: none;
        width: 128px;
        height: 58px;
        font-size: 14px;
        border-radius: 10px;
        cursor: pointer;
      }
    }

    .row-2 {
      .reset {
        background-color: white;
        color: #ef8254;
        border: none;
        padding: 13px 88px;
        font-size: 20px;
        border-radius: 10px;
        margin-right: 15px;
        cursor: pointer;
      }
      .start {
        background-color: #ef8254;
        color: white;
        border: none;
        padding: 13px 64px;
        font-size: 20px;
        border-radius: 10px;
        cursor: pointer;
      }
    }
  }

  .name.disable {
    pointer-events: none;
    background-color: grey;
    transition: all 500ms ease-in-out;
  }
</style>
