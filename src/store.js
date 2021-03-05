import { writable } from 'svelte/store';

const players = writable([]);
const round = writable(0);
const startPairing = writable([]);

export { players, round, startPairing };
