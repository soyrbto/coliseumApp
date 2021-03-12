import { get } from 'svelte/store';
import { players, startPairing, totalPoints } from './store';

//----------function that randomize first pairing-------->
const randomizer = (function () {
  let randomArray = [];
  let pairingArray = [];
  function inRandom() {
    let numberOfPlayers = get(players).length;

    for (let i = 0; i < numberOfPlayers; i++) {
      randomArray[i] = Math.random();
    }

    for (let i = 1; i <= numberOfPlayers; i++) {
      pairingArray[randomArray.indexOf(Math.max(...randomArray))] = `${i}`;
      randomArray[randomArray.indexOf(Math.max(...randomArray))] = 0;
    }
    startPairing.set(pairingArray);

    return pairingArray;
  }

  function resetPairing() {
    pairingArray = [];
  }

  return { inRandom, resetPairing };
})();

//====================function that serialize unique components=====>
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

//===========function that calculates pairing over array points====>

const pairing = (function () {
  //
  //
  function pairingBrackets() {
    let tp = get(totalPoints);
    let rank = [];

    for (let i = 1; i <= tp.length; i++) {
      let maxIterator = tp.indexOf(Math.max(...tp));

      rank[maxIterator] = `${i}`;
      tp[maxIterator] = 0;
    }
  }

  return pairingBrackets;
})();

//========================= function that generate the pairing array ==>

// const pairing = (function () {
//   function pairingStd() {
//     //algo
//   }

//   return { pairingStd };
// })();

//========================= change round function ==========>
const commonUse = function () {
  function nextRound() {
    //algo
  }

  function reset() {
    // algo
  }

  return { nextRound, reset };
};

export { randomizer, serializer, pairing, commonUse };
