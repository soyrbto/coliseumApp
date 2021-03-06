import { writable } from 'svelte/store';

const players = writable([
  // 'luis',
  // 'rawy',
  // 'viviana',
  // 'javier',
  // 'ricardo',
  // 'omar',
  // 'paris',
  // 'nelly',
]);
const round = writable(0);
const rounds = writable([1]);
const pointsArray = writable(['']);
const totalPoints = writable(['']);
const startPairing = writable([]);
const requirements = writable(false);
const trigger = writable(0);
const notified = writable(false);
const globalPoints = writable({});
const globalTotals = writable([]);

export {
  players,
  round,
  rounds,
  startPairing,
  pointsArray,
  requirements,
  trigger,
  notified,
  totalPoints,
  globalPoints,
  globalTotals,
};
