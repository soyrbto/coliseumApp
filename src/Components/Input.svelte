<script>
  import { randomizer, serializer } from '../functions';
  import {
    players,
    round,
    rounds,
    startPairing,
    pointsArray,
    globalPoints,
    globalTotals,
  } from '../store';

  let nodePlayer;
  let openSubs = true;
  let nodeRound;
  let onPlay = false;

  function addParticipant(e) {
    if (e.keyCode == 13 || e.detail == 1) {
      if (nodePlayer.value.length < 3) {
        window.alert('nombre muy corto, minimo 3 caracteres por participante');
      } else {
        let newPlayer = nodePlayer.value;
        players.update((value) => [...value, newPlayer]);
        nodePlayer.value = '';
      }
    }
  }

  function resetData() {
    globalTotals.set([]);
    globalPoints.set({});
    serializer.reset();
    randomizer.resetPairing();
    startPairing.set([]);
    players.set([]);
    round.set(0);
    rounds.set([1]);
    openSubs = true;
    nodeRound.innerText = 'Comenzar';
  }

  function changeRound() {
    //acciones en la primera ronda
    let totalForStore = [];
    if ($round == 0 && $players.length >= 8) {
      openSubs = false;
      nodeRound.innerText = `Siguiente ronda`;
      randomizer.inRandom();
      round.update((round) => round + 1);
      rounds.update((roundArray) => [...roundArray]);
      onPlay = true;

      // acciones desde la segunda ronda en adelante
    } else if (onPlay && $round < 5 && $pointsArray.indexOf('') == -1) {
      globalPoints.update((value) => ({ ...value, [$round]: $pointsArray }));

      for (let i = 0; i < $pointsArray.length; i++) {
        if ($globalTotals[i] != undefined) {
          totalForStore[i] = $globalTotals[i] + $pointsArray[i];
        } else {
          totalForStore[i] = $pointsArray[i];
        }
      }
      globalTotals.set(totalForStore);

      round.update((round) => round + 1);

      rounds.update((roundArray) => [...roundArray, $round]);
      pointsArray.set(['']);

      //resistencia a pasar la ronda si no faltan puntos
    } else if ($round != 0) {
      window.alert('rellena todos los puntos antes de pasar la ronda');
    }
    //resistencia a iniciar el torneo si hay menos de 8 jugadores
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
      >Comenzar</button
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
