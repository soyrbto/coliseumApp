import { get } from 'svelte/store';
import { players, startPairing } from './store';

const randomizer = (function () {
  let randomArray = [];
  let pairingArray = [];
  function inRandom() {
    let numberOfPlayers = get(players).length;
    console.log(numberOfPlayers);

    for (let i = 0; i < numberOfPlayers; i++) {
      randomArray[i] = Math.random();
    }
    console.log(randomArray);

    for (let i = 0; i < numberOfPlayers; i++) {
      pairingArray[randomArray.indexOf(Math.max(...randomArray))] = `${i}`;
      randomArray[randomArray.indexOf(Math.max(...randomArray))] = 0;
    }
    startPairing.set(pairingArray);
    console.log(get(startPairing));

    return pairingArray;
  }

  function resetPairing() {
    pairingArray = [];
  }

  return { inRandom, resetPairing };
})();

const serializer = (function () {
  let id = -1;

  function addId() {
    id++;
    return id;
  }

  function reset() {
    id = -1;
  }

  function substract() {
    id--;
  }
  return { addId, substract, reset };
})();

export { randomizer, serializer };
