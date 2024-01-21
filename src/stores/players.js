import { defineStore } from "pinia";

export const usePlayerStore = defineStore("players", {
  state: () => ({
    __players: [],
  }),
  getters: {
    getPlayers: (state) => state.__players || [],
    getPlayerById: (state) => {
      return (id) => state.__players.find((pl) => pl.id == id);
    },
  },
  actions: {
    async refreshPlayers() {
      try {
        let response = await fetch("/players.json");
        let players = await response.json();
        this.__players = players;
      } catch (error) {
        console.error(error);
      }
    },
  },
});
