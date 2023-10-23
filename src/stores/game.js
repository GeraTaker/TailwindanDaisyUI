import { defineStore } from 'pinia';

export const useGameStore = defineStore('gameIndex', {
    state: () => ({ gameIndex: 0 }),
});