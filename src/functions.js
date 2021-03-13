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

//=========== function 00 22 44 =======================>

const ttff = (function () {
  let id = 0;
  let counter = 0;
  let value;

  function counterGuide() {
    id++;
    if (id < 2) {
      counter++;
      value = counter * 2;
    } else {
      id = 0;
    }
    return value;
  }

  function reset() {
    id = 0;
    counter = 0;
    value = 0;
  }

  return { counterGuide, reset };
})();

//=============== functions that ranks top bracket ========>
function bracketPairing(rankArray) {
  let rankArrayRandom = [];
  let ranked = new Array(rankArray.length);
  let randomBottom = [];
  let rankedBottom = [];
  let counter = 0;
  let blanks = [];

  for (let i = 0; i < rankArray.length; i++) {
    rankArrayRandom[i] = rankArray[i] + Math.random() / 100;
  }

  for (let n = 1; n <= rankArrayRandom.length / 2; n++) {
    ranked[rankArrayRandom.indexOf(Math.min(...rankArrayRandom))] =
      n + ttff.counterGuide() - 2;
    rankArrayRandom[rankArrayRandom.indexOf(Math.min(...rankArrayRandom))] = 10;
  }
  ttff.reset();

  for (let p = 0; p < ranked.length / 2; p++) {
    randomBottom[p] = Math.random();
  }

  for (let r = 1; r <= randomBottom.length; r++) {
    rankedBottom[randomBottom.indexOf(Math.max(...randomBottom))] = r;
    randomBottom[randomBottom.indexOf(Math.max(...randomBottom))] = -1;
  }

  for (let q = 0; q < ranked.length; q++) {
    if (ranked[q] == undefined) {
      blanks[counter] = q;
      counter++;
    }
  }

  for (let o = 0; o < blanks.length; o++) {
    ranked[blanks[rankedBottom.indexOf(Math.min(...rankedBottom))]] =
      rankedBottom[rankedBottom.indexOf(Math.min(...rankedBottom))] +
      ttff.counterGuide();

    rankedBottom[rankedBottom.indexOf(Math.min(...rankedBottom))] = 100;
  }

  ttff.reset();

  return ranked;
}

//===========function that calculates pairing over array points====>

const pairing = (function () {
  function ranking(tp) {
    let tpRandom = [];
    let rank = [];
    for (let n = 0; n < tp.length; n++) {
      tpRandom[n] = tp[n] + Math.random() / 100;
    }

    for (let i = 1; i <= tpRandom.length; i++) {
      let maxValueIndex = tpRandom.indexOf(Math.max(...tpRandom));
      rank[maxValueIndex] = i;
      tpRandom[maxValueIndex] = -1;
    }
    return rank;
  }

  function fnPairing(totalArray) {
    let tp = totalArray;
    let rank = ranking(tp);
    let pairing = bracketPairing(rank);
    return pairing;
  }

  return fnPairing;
})();

//============== funcion convertidora de numero a mesa ======>

function mesaPos(num) {
  let mesa;
  let silla;
  mesa = Math.ceil(num / 4);
  let rest = num / 4 - Math.floor(num / 4);
  if (rest <= 0.5 && rest != 0) {
    silla = rest == 0.25 ? 1 : 2;
  } else {
    silla = rest == 0.75 ? 3 : 4;
  }
  let pos = `${mesa}-${silla}`;
  return pos;
}

export { randomizer, serializer, pairing, mesaPos };
